const AbstractFactoryDAO = require('./abstractFactoryDAO');

module.exports = {
    getQueryFactory: (data) =>{
        return new AbstractFactoryDAO(data);
    }
}