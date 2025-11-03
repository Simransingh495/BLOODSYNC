
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

    // --- SIMULATED SMS SERVICE ---
    // In a real app, this is where you would integrate with Twilio, Vonage, etc.
    // For now, we just log to the console to show it's working.
    console.log('--- SIMULATING SENDING SMS ---');
    console.log(`To: ${to}`);
    console.log(`Body: ${smsBody}`);
    console.log('-----------------------------');
    // --- END SIMULATION ---

    return NextResponse.json({
      message: 'SMS sent successfully! (Simulated)',
    });
  } catch (error: any) {
    console.error('Simulated SMS Error:', error);
    return NextResponse.json(
      { error: 'Failed to send simulated SMS.', details: error.message },
      { status: 500 }
    );
  }
}
