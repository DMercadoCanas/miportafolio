const nodemailer = require("nodemailer");
const emailConfig = require("../config/email");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailConfig.email,
    pass: emailConfig.password,
  },
});

exports.sendEmail = async ({ name, email, reason, message }) => {
  const mailOptions = {
    from: emailConfig.email,
    to: emailConfig.email,
    subject: `Nuevo mensaje de contacto - ${reason}`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Razón de contacto: ${reason}
      Mensaje: ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
};
