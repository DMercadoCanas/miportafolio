const emailService = require("../services/emailService");

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, email, reason, message } = req.body;
    await emailService.sendEmail({ name, email, reason, message });
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
