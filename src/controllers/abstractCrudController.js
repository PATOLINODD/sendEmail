const { tables } = require("../models");

class AbstractCrudController {
  constructor() {
    this.result = null;
  }
  save = async (abstractDao) => {
    console.log(
      "ENTERING IN METHOD AbstractCrudController.save(data, table): ",
      __filename
    );
    try {
        this.result = await abstractDao.save();
    } catch (error) {
        this.result = error;
        this.result.statusCode = 500;
        console.error(this.result);
    }
};

list = async (abstracDao) => {
    console.log(
      "ENTERING IN METHOD AbstractCrudController.list(abstracDao): ",
      __filename
    );
    try {
      this.result = await abstracDao.list();
    } catch (error) {
      this.result = error;
      this.result.statusCode = 500;
      console.error(this.result);
    }
  };
}

module.exports = AbstractCrudController;
