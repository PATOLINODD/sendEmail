const { DAO } = require("../utils");

class AbstractFactoryDAO {
  constructor(modelDao) {
    this.modelDao = modelDao;
    this.daoUtils = new DAO(modelDao);
  }

  createQuerySELECT = () => {
    console.log("Entering in method AbstractFactoryDAO.createQuerySELECT");
    const query = `SELECT ${this.daoUtils.getFieldsKeys()} FROM ${
      this.modelDao.tableName
    }`;
    console.log("Query Result: \n", query);
    return query;
  };
  createQuerySELECTwhere = (where) => {
    console.log("Entering in method AbstractFactoryDAO.createQuerySELECTwhere");
    const query = `${this.createQuerySELECT()} WHERE ${where}`;
    console.log("Query Result: \n", query);
    return query;
  };
  createQueryINSERT = () => {
    console.log("Entering in method AbstractFactoryDAO.createQueryINSERT");
    const query = `INSERT INTO ${this.modelDao.tableName}
                    (${this.daoUtils.getFieldsKeys()}) 
                    VALUES 
                    (${this.daoUtils.getFieldsToFill()})`;
    console.log("Query Result: \n", query);
    return query;
  };
}

module.exports = AbstractFactoryDAO;
