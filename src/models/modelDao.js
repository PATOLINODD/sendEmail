class ModelDao {
  constructor(data, tableName) {
    this.data = {
      ...data,
      requestDate: Date.now()
    };
    this.tableName = tableName;
  }
}

module.exports = ModelDao
