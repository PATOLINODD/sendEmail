const { sendEmailController } = require("../controllers");
module.exports = (app) => {
  app.post("/sendEmail", sendEmailController.sendEmail);
  app.get('/list', sendEmailController.listClient);
};
