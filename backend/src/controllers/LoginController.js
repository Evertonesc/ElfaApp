const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = express.Router();
const sql = require('mssql');
var sqlConnect = require('../database/connection');

var jsonParser = bodyParser.json();
var urlencondeParser = bodyParser.urlencoded({ extended: true })

app.use(jsonParser);
app.use(urlencondeParser);

app.post('/login', (req, res) => {
    try {

        let pool1;
        const dbCod = req.body.dbCod;
        const username = req.body.username;
        const password = req.body.password;
        if (dbCod == 244) {
            pool1 = new sql.ConnectionPool(sqlConnect.dbConfig1)
        }
        else if (dbCod == 360) {
            pool1 = new sql.ConnectionPool(sqlConnect.dbConfig2)
        }
        else if (dbCod == 422) {
            pool1 = new sql.ConnectionPool(sqlConnect.dbConfig3)
        }
        const pool1Connect = pool1.connect();

        async function loginFunction() {
            await pool1Connect;

            const request = pool1.request();
            const result = await request.query(`select * from usu_usuario where usu_login = '${username}' and usu_senha = '${password}'`)
            var resultRecords = result.recordset;

            if(resultRecords[0].USU_LOGIN == username && resultRecords[0].USU_SENHA == password){
                res.json('Welcome, ' + resultRecords[0].USU_NOME)
            }
            else{
                res.json(err)
            }

            // return resultRecords;
        }

        loginFunction();
    }
    catch (err) {
        console.error(err)
    }
})

app.get('/home', (req, res) => {
    try {

    }
    catch (err) {
        console.error(err)
    }
})

var server = app.listen(5000, function () {
    console.log('Running...')
})