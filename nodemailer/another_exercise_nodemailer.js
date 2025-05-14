const nodemailer = require("nodemailer");

async function sendMail() {
  const testAccount = await nodemailer.createTestAccount();
  console.log("user:", testAccount.user);
  console.log("password:", testAccount.pass);

  let transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: testAccount.user,
    to: testAccount.user,
    subject: "Second nodemailer exercise",
    text: "I hope it will run",
    html: "<b>This is a test email from nodemailer</b>",
  });

  console.log("Email was send...", nodemailer.getTestMessageUrl(info));
}
sendMail().catch(console.error);
