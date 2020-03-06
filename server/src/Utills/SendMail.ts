import * as nodemailer from "nodemailer";
const { WelcomeMessage, PasswordResetLink } = require("./Mailtemplates");

nodemailer.createTransport({
  host: "",
  port: 4500
});

export const Mails = {
  async sendWelcomeEmail(user, ctx) {
    const mailer = nodemailer.createTransport({
      host: "process.env.MAIL_HOST",
      port: 45,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptions = {
      to: user.email,
      from: "naperg@imran-irshad.io",
      subject: "Welcome To My Website",
      html: WelcomeMessage(user, ctx)
    };
    return mailer.sendMail(mailOptions);
  },
  sendForgetPassword(token, user, ctx) {
    const mailer = nodemailer.createTransport({
      host: "process.env.MAIL_HOST",
      port: 45,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASS
      }
    });

    var mailOptions = {
      to: user.email,
      from: "naperg@imran-irshad.io",
      subject: "Forget Password - Imran Irshad Portfolio APP",
      html: PasswordResetLink(token, user, ctx)
    };
    mailer.sendMail(mailOptions, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Mail sent to: " + user.email);
      }
    });
  }
};
