
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { phoneNumber, message } = await request.json();

    if (!process.env.FAST2SMS_API_KEY) {
      return NextResponse.json({ success: false, error: 'Fast2SMS API key is not configured.' }, { status: 500 });
    }
    
    if (!phoneNumber || !message) {
        return NextResponse.json({ success: false, error: 'Phone number and message are required.' }, { status: 400 });
    }

    const encodedMessage = encodeURIComponent(message);
    const url = 'https://www.fast2sms.com/dev/bulkV2';

    const options = {
        method: 'POST',
        headers: {
            'authorization': process.env.FAST2SMS_API_KEY,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `route=v3&sender_id=FTWSMS&message=${encodedMessage}&language=english&flash=0&numbers=${phoneNumber}`,
    };

    const fast2smsResponse = await fetch(url, options);
    const data = await fast2smsResponse.json();

    if (data.return) {
        return NextResponse.json({ success: true, data });
    } else {
        return NextResponse.json({ success: false, error: data.message || 'Failed to send SMS' }, { status: 500 });
    }

  } catch (error: any) {
    console.error('SMS API Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'An unknown error occurred.' }, { status: 500 });
  }
}
