// This is a Next.js API Route, which runs on the server.
// It is a secure place to handle secrets like API keys.

import {NextRequest, NextResponse} from 'next/server';
import twilio from 'twilio';

export async function POST(req: NextRequest) {
  try {
    const {to, message} = await req.json();

    // =========================================================================
    // This is where the app sends a real SMS.
    // It uses the credentials you provide in the `.env` file.
    // =========================================================================
    
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      const errorMessage = "SMS service is not configured. Please add your Twilio credentials to the .env file.";
      console.error(errorMessage);
      return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
    }

    const client = twilio(accountSid, authToken);

    await client.messages.create({
      body: message,
      from: fromNumber,
      to: to, // The recipient's phone number
    });

    return NextResponse.json({success: true});
  } catch (error) {
    console.error('Failed to send SMS:', error);
    // In a real app, you might want more specific error handling.
    return NextResponse.json(
      {success: false, error: 'Failed to send message.'},
      {status: 500}
    );
  }
}
