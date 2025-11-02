import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const sendEmailSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  html: z.string(),
});

// The RESEND_API_KEY is loaded from the .env file.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = sendEmailSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input.', details: validation.error.flatten() }, { status: 400 });
    }
    
    if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not configured in .env file.');
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
