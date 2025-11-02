import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const sendEmailSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  html: z.string(),
});

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
        console.error('API Route Error: RESEND_API_KEY is not configured in .env file.');
        return NextResponse.json({ error: 'Server is not configured for sending emails.' }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();
    const validation = sendEmailSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input.', details: validation.error.flatten() }, { status: 400 });
    }

    const { to, subject, html } = validation.data;

    const { data, error } = await resend.emails.send({
      from: 'BloodSync <onboarding@resend.dev>', // This must be a verified domain in Resend, 'onboarding@resend.dev' is for testing.
      to: [to],
      subject: subject,
      html: html,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email.', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.', details: error.message }, { status: 500 });
  }
}
