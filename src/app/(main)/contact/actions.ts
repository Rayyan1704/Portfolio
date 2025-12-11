'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(formData: z.infer<typeof formSchema>) {
  const parsedData = formSchema.safeParse(formData);

  if (!parsedData.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;

  if (!resendApiKey) {
    console.error('Resend API key is not configured.');
    return { success: false, error: 'The server is not configured to send emails.' };
  }
  
  if (!toEmail) {
    console.error('Recipient email is not configured.');
    return { success: false, error: 'The server is not configured to send emails.' };
  }
  
  const resend = new Resend(resendApiKey);
  const { name, email, message } = parsedData.data;
  
  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // This must be a verified domain in Resend
      to: toEmail,
      subject: `New Message from ${name} via Portfolio`,
      reply_to: email,
      html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p>
             <p>${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send message.' };
  }
}
