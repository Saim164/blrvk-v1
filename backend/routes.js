const express = require("express");
const {
  sendContactEmail,
  sendNewsletterEmail,
} = require("./resend");

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  try {
    await sendContactEmail(req.body);

    res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

router.post("/newsletter", async (req, res) => {
  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required.",
    });
  }

  try {
    await sendNewsletterEmail(email);

    res.status(200).json({
      success: true,
      message: "Subscribed successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

module.exports = router;