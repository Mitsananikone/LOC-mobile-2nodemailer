import sgMail from "@sendgrid/mail";

// Ensure the API key is available
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  const msg = {
    to: "mitsananikone@gmail.com", // Your email
    from: process.env.SENDGRID_VERIFIED_SENDER, // Must be a verified sender
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);
    return res.status(500).json({ error: "Failed to send message", details: error.message });
  }
}
