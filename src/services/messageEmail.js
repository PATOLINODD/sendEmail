const nodemailer = require("nodemailer");
require("dotenv").config();

class MessageEmail {
  static createTransportMessage = () => {
    console.log("Entering in method createTransportMessage");
    return nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
      debug: true,
      logger: true,
    });
  };

  static sendMessageEmail = (clientEmail, transporter) => {
    console.log("Entering in method sendMessageEmail");
    transporter.sendMail(
      {
        from: `Patrick ${process.env.SMTP_EMAIL}`,
        to: "lucas.lima@aib2business.com",
        subject: `CONSULTORIA ${clientEmail.firstName}`,
        text: `
              nome: ${clientEmail.firstName} ${clientEmail.lastName}\n
              company: ${clientEmail.companyName}\n
              phone: ${clientEmail.phone}\n
              email: ${clientEmail.email}\n
              descitpion: ${clientEmail.description}\n
          `,
      },
      (error, info) => {
        if (error) {
          return console.log("Error ocurred!");
        }
        return console.log("all right!", info.response);
      }
    );
  };
}

module.exports = { MessageEmail };
