const { AbstractDao } = require("../dao");
const { tables, ModelDao, Message } = require("../models");
const { MessageEmail } = require("../services");
const AbstractCrudController = require("./abstractCrudController");
const { db } = require("../../connectDB");

class SendEmailController extends AbstractCrudController {
  sendEmail = async (req, res) => {
    console.log(
      "ENTERING IN METHOD SendEmailController.sendEmail(req, res): ",
      __filename
    );
    try {
      const clientEmail = new ModelDao(req.body, tables.DOR_CLIENTE);
      const clientDao = new AbstractDao(clientEmail, db);
      const transporter = MessageEmail.createTransportMessage();
      MessageEmail.sendMessageEmail(clientEmail.data, transporter);
      await this.save(clientDao);

      res.json(this.result);
    } catch (error) {
      console.error(error);
    }
  };

  listClient = async (req, res) => {
    console.log(
      "ENTERING IN METHOD SendEmailController.listClient(req, res)",
      __filename
    );
    try {
      const model = new ModelDao(
        {
          clientid: "",
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          companyName: "",
          description: "",
        },
        tables.DOR_CLIENTE
      );
      await this.list(new AbstractDao(model, db));

      res.json(this.result);
    } catch (error) {
      console.error(error);
    } 
  };
}

module.exports = new SendEmailController();
