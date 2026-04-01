import { sendEmailNotification } from './email';

export async function sendNotification(data: Record<string, unknown>) {
  try {
    if (process.env.NOTIFY_EMAIL === 'true') {
      await sendEmailNotification(data);
    }
    // We could add WhatsApp or SMS notifications here if needed
  } catch (error) {
    console.error("Failed to send notification:", error);
    // Don't throw error to not interrupt the main flow if just notification fails
  }
}
