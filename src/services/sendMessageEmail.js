module.exports = function sendMessageEmail(clientEmail, transporter) {
  console.log('Entering in method sendMessageEmail');
  transporter.sendMail(
    {
      from: emailFrom,
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
