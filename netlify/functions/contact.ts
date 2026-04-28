import nodemailer from "nodemailer";

const headers = {
  "Access-Control-Allow-Origin": "https://forsalferdaousse.github.io",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler = async (event: any) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: "Method Not Allowed" };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "All fields are required." }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send email." }),
    };
  }
};