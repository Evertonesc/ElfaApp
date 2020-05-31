const connectionStr = require('../database/dbConfig');
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
                console.log('Wrong Database Code!');
            }
            return getStr.sqlConn = dbConfig;
        }
        catch (err) {

        }
    }
}