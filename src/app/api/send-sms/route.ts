
import { NextResponse } from 'next/server';
import { z } from 'zod';

const sendSmsSchema = z.object({
  to: z.string(),
  body: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = sendSmsSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input.', details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const { to, body: smsBody } = validation.data;
    const apiKey = process.env.FAST2SMS_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key for Fast2SMS is not configured.' },
        { status: 500 }
      );
    }
    
    // Fast2SMS expects numbers without the country code prefix like +
    const numbers = to.replace('+', '');

    const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        'authorization': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        route: 'v3', // or 'dlt' or 'p' depending on your use case
        sender_id: 'TXTIND', // You may need to register this with Fast2SMS
        message: smsBody,
        language: 'english',
        flash: 0,
        numbers: numbers,
      }),
    });

    const data = await response.json();

    if (!data.return) {
      // Fast2SMS returns 'return: false' on failure
      console.error('Fast2SMS Error:', data.message);
      return NextResponse.json(
        { error: 'Failed to send SMS via Fast2SMS.', details: data.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'SMS sent successfully via Fast2SMS!',
      details: data,
    });

  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to send SMS.', details: error.message },
      { status: 500 }
    );
  }
}
