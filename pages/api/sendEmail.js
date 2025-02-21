import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    // Create a Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "mitsananikone@gmail.com", // Replace with your email address
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}