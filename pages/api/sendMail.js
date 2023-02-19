import nodemailer from "nodemailer";

export default function handler(req, res) {
  //require("dotenv").config();

  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.office365.com",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: false,
  });

  const mailData = {
    from: "Maigadi",
    to: "info@simajonline.com,whosyusuf@gmail.com",
    subject: `SIMAJ enquiry from ${req.body.name}`,
    text: "Request from " + req.body.email,
    html: `
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <br>
    <p>Role: ${req.body.message}</p>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(400).json({ result: "Failed. Try again" });
    } else console.log(info);
  });

  res.status(200).json({ result: "Submitted" });
}
