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
    to: "info@trigonaltech.com,yusuf.a@agtrinex.com",
    subject: `Maigadi enquiry from ${req.body.name}`,
    text: "New sign up request from: " + req.body.email,
    html: `
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>phone: ${req.body.phone}</p>
    <p>State: ${req.body.state}</p>
    <p>Role: ${req.body.role}</p>
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
