import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: 'hamzahassanmir62@gmail.com',
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #F9F8F5;">
          <h2 style="font-family: Georgia, serif; font-size: 1.5rem; margin-bottom: 1.5rem; color: #111110;">New Portfolio Message</h2>
          <div style="border-top: 1px solid #E2E0D8; padding-top: 1rem;">
            <p style="color: #6B6960; font-size: 0.85rem; margin-bottom: 0.25rem;">FROM</p>
            <p style="font-weight: 500; margin-bottom: 1rem;">${name} &lt;${email}&gt;</p>
            <p style="color: #6B6960; font-size: 0.85rem; margin-bottom: 0.25rem;">MESSAGE</p>
            <p style="line-height: 1.7;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
