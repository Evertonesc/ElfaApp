const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sql = require('mssql');
var sqlConnect = require('../database/connection');

var jsonParser = bodyParser.json();
var urlencondeParser = bodyParser.urlencoded({ extended: false })

let username;
let password;
let codDatabase;
var result;

app.post('/login', jsonParser, async (req, res) => {
    try {

        username = req.body.username;
        password = req.body.password;
        codDatabase = req.body.codDb;
        var db = '';

        if (codDatabase == 244) {
            db = sqlConnect.dbConfig1;
            sql.connect(db, (err) => {
                console.dir(err);
            })
        }
        else if (codDatabase == 361) {
            db = sqlConnect.dbConfig2;
            sql.connect(db, (err) => {
                console.dir(err);
            })
        }
        else if (codDatabase == 448) {
            db = connection.dbConfig3
            sql.connect(db, (err) => {
                console.dir(err);
            })
        }
        else {
            res.json('Cod is not reconized!')
        }

        sql.connect(db, async (err) => {

            await new sql.Request().query(`SELECT * FROM USU_USUARIO WHERE USU_LOGIN = '${username}' 
            AND USU_SENHA = '${password}' AND _DELETE = 0`, (err, result) => {

                result = result.recordset[0];
                if (result.USU_LOGIN == username && result.USU_SENHA == password) {
                    res.redirect('../home')
                }
                else {
                    res.json('User os password incorrect!')
                }
            })
        })
    }
    catch (ex) {
        res.json('message from catch is => ' + ex);
    }
});

app.get('/home', urlencondeParser, function (req, res) {

    res.json(`Bem vindo, ${result.USU_NOME}`)

});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});