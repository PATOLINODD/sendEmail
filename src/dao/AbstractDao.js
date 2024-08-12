const { getQueryFactory } = require("../factories");
const { Message } = require("../models");

class AbstractDAO {
  constructor(modelDao, db) {
    this.db = db;
    this.modelDao = modelDao;
  }

  save = async () => {
    console.log("Entering in method AbstractDAO.save \n", __filename);
    return new Promise((res, rej) => {
      const queryInsert = getQueryFactory(this.modelDao).createQueryINSERT();
      this.db.run(queryInsert, Object.values(this.modelDao.data), (err) => {
        if (err) {
          rej(
            new Message(
              `Couldn't insert the data into the table ${this.modelDao.tableName}: `,
              err
            )
          );
        } else {
          res(new Message("Data inserted successfuly!", this.modelDao.data));
        }
      });
    });
  };

  list = async () => {
    console.log("Entering in method AbstractDAO.list \n", __filename);
    return new Promise((res, rej) => {
      const querySelect = getQueryFactory(this.modelDao).createQuerySELECT();
      this.db.all(querySelect, [], (err, rows) => {
        if (err) {
          rej(new Message("Error to try list the rows: ", err));
        } else {
          res(new Message("List Successfuly", rows));
        }
      });
    });
  };
}

module.exports = AbstractDAO;
