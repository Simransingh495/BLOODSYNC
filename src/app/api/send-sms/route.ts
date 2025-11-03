
import { NextResponse } from 'next/server';
import { z } from 'zod';

const sendSmsSchema = z.object({
  to: z.string(),
  body: z.string(),
});

// This is a simulated SMS sending function.
// It logs the message to the console instead of sending a real SMS.
// This is useful for development and avoids the need for a paid SMS service.
async function simulateSendSms(to: string, body: string) {
  console.log('\n--- SIMULATING SENDING SMS ---');
  console.log(`To: ${to}`);
  console.log(`Body: ${body}`);
  console.log('-----------------------------\n');
  return { success: true, message: 'SMS simulated successfully.' };
}

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

    // Use the simulated function
    const result = await simulateSendSms(to, smsBody);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send simulated SMS.', details: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'SMS simulated successfully!',
      details: result,
    });

  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to process SMS request.', details: error.message },
      { status: 500 }
    );
  }
}
