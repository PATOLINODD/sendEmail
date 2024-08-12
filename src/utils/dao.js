class DAO {
    constructor(modelDao){
        this.modelDao = modelDao;
    }
    getFieldsKeys = () =>{
        return Object.keys(this.modelDao.data);
    }
    getFieldsToFill(){
        return "?,".repeat(this.getFieldsKeys().length).replace(/,(?!\?)/, "").split(',').join(', ');
    }
    getFieldsValues(){
        return Object.values(this.modelDao.data);
    }
}

module.exports = DAO;