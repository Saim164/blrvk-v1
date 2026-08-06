const { Resend } = require("resend");

let resendClient;

function getResend() {
  if (!resendClient) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set.");
    }
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

async function send(payload) {
  const { data, error } = await getResend().emails.send(payload);

  if (error) {
    throw new Error(error.message || "Resend failed to send the email.");
  }

  return data;
}

async function sendContactEmail(data) {
  const { name, email, company, phone, message } = data;

  await send({
    from: "BLRVK <noreply@mail.blrvk.com>",
    to: process.env.OWNER_EMAIL,
    subject: `🚀 New BLRVK Inquiry — ${name}`,

    html: `
      <h2>New Inquiry Received</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not Provided"}</p>
      <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>

      <hr>

      <h3>Message</h3>

      <p>${message}</p>
    `,
  });

  await send({
    from: "BLRVK <noreply@mail.blrvk.com>",
    to: email,
    subject: "We've received your inquiry — BLRVK",

    html: `
      <h2>Hello ${name},</h2>

      <p>
        Thank you for reaching out to BLRVK.
      </p>

      <p>
        We've successfully received your inquiry.
      </p>

      <p>
        Our team will review your message and get back to you
        within <strong>24 hours</strong>.
      </p>

      <br>

      <p>
        — BLRVK
      </p>
    `,
  });
}

async function sendNewsletterEmail(email) {
  await send({
    from: "BLRVK <noreply@mail.blrvk.com>",
    to: process.env.OWNER_EMAIL,
    subject: "📩 New Newsletter Subscriber",

    html: `
      <h2>New Newsletter Subscription</h2>

      <p><strong>Email:</strong> ${email}</p>
    `,
  });

  await send({
    from: "BLRVK <noreply@mail.blrvk.com>",
    to: email,
    subject: "Welcome to BLRVK",

    html: `
      <h2>Welcome!</h2>

      <p>
        Thank you for subscribing to BLRVK.
      </p>

      <p>
        You'll occasionally receive updates about AI,
        automation, and intelligent systems.
      </p>

      <br>

      <p>
        Thanks for joining us.
      </p>

      <p>
        — BLRVK
      </p>
    `,
  });
}

module.exports = {
  sendContactEmail,
  sendNewsletterEmail,
};