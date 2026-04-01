import nodemailer from 'nodemailer';

export async function sendEmailNotification(data: Record<string, unknown>) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === '465' ? true : false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlContent = `
    <h2>New Appointment Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
    <p><strong>Preferred Date:</strong> ${data.date}</p>
    <p><strong>Concern:</strong></p>
    <p>${data.concern}</p>
  `;

  await transporter.sendMail({
    from: `"Clinic Notifications" <${process.env.SMTP_USER}>`,
    to: process.env.DOCTOR_EMAIL,
    subject: `New Inquiry from ${data.name}`,
    html: htmlContent,
  });
}
