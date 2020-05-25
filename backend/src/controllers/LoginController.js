const sql = require('mssql');
const getSqlConn = require('../utils/getConnectionStr');
const sqlStr = require('../utils/sqlConnect');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let connectionString;

module.exports = {
    async index(req, res) {
        try {

            const { username } = req.body;
            const { password } = req.body;
            const dbkey = req.body.dbkey;

            getSqlConn.getConnectionStr(dbkey);
            connectionString = sqlStr.sqlConn;

            async function login(sqlConn) {
                let execQry = new sql.ConnectionPool(sqlConn)
                await execQry.connect();
                let resultSql = await execQry.request()
                    .query(`SELECT * FROM USU_USUARIO WHERE USU_LOGIN = '${username}'`)

                const result = resultSql.recordset[0];
                if (result == undefined) {
                    res.json('Check de Cod Db or user and password!')
                }
                else if (result.USU_SENHA == password) {
                    res.json('Welcome, ' + result.USU_NOME + '!')
                } else {
                    res.json('User or password incorrect!')
                }
            }
            login(connectionString);
        }
        catch (err) {

        }
    }
}
