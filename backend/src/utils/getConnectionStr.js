const connectionStr = require('../config/dbConfig');
const getStr = require('../utils/sqlConnect');
let dbConfig = '';

module.exports = {
    getConnectionStr(dbKey) {
        try {
            if (dbKey == 244) {
                dbConfig = connectionStr.dbConfig1;
            } else if (dbKey == 360) {
                dbConfig = connectionStr.dbConfig2;
            }
            else {
                console.log('Coddb does not exist!')
            } 
            return getStr.sqlConn = dbConfig;                    
        }
        catch (err) {

        }
    }
}