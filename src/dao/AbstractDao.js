const sqlite3Offline = require("sqlite3-offline-next").verbose();
const { dbPath } = require("../../connectDB");

const { getQueryFactory } = require("../factories");
const { Message } = require("../models");

class AbstractDAO {
  constructor(modelDao) {
    this.db = new sqlite3Offline.Database(dbPath, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("CONNECTED TO DATABASE");
      }
    });
    this.modelDao = modelDao;
  }

  save = async () => {
    console.log("Entering in method AbstractDAO.save \n", __filename);
    return new Promise((res, rej) => {
      try {
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
      } catch (error) {
        console.error(error);
      } finally {
        this.db.close((err) => {
          if (err) console.error(err);
        });
      }
    });
  };

  list = async () => {
    console.log("Entering in method AbstractDAO.list \n", __filename);
    return new Promise((res, rej) => {
      try {
        const querySelect = getQueryFactory(this.modelDao).createQuerySELECT();
        this.db.all(querySelect, [], (err, rows) => {
          if (err) {
            rej(new Message("Error to try list the rows: ", err));
          } else {
            res(new Message("List Successfuly", rows));
          }
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.db.close((err) => {
          if (err) console.error(err);
        });
      }
    });
  };
}

module.exports = AbstractDAO;
