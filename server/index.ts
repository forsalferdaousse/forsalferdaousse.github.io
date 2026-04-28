import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ← CORS must be first
app.use(cors({
  origin: "https://ferdaousse-forsal.netlify.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: "forsalferdaousse.dev@gmail.com",
    subject: `[Portfolio] ${subject}`,
    replyTo: email,
    html: `
      <h2>New message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  res.json({ success: true });
});

app.listen(3001, () => console.log("Server running on port 3001"));