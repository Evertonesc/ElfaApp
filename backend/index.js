var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const sql = require('mssql');

var jsonParser = bodyParser.json();

var urlencondeParser = bodyParser.urlencoded({ extended: false })

const config = {
    user: 'react',
    password: 'react',
    server: 'DESKTOP-NPSHI85\\EVERTONESC',
    database: 'METALSOL_DESENV'
};

const config2 = {
    user: 'react',
    password: 'react',
    server: 'DESKTOP-NPSHI85\\EVERTONESC',
    database: 'teste'
};

let username;
let password;
let codDatabase;
var teste;

app.post('/login', jsonParser, async (req, res) => {
    try {

        username = req.body.username;
        password = req.body.password;
        codDatabase = req.body.codDb;
        var db = '';

        if (codDatabase == 244) {
            db = config;
            sql.connect(db, (err) => {

            })
        }
        else if (codDatabase == 248) {
            db = config2;
            sql.connect(db, (err) => {

            })
        }
        else {
            res.json('Cod is not reconized!')
        }

        sql.connect(db, async (err) => {

            new sql.Request().query(`SELECT * FROM USU_USUARIO WHERE USU_LOGIN = '${username}' 
            AND USU_SENHA = '${password}' AND _DELETE = 0`, (err, result) => {

                teste = result.recordset[0];
                if (teste.USU_LOGIN == username && teste.USU_SENHA == password) {
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

    res.json(`Bem vindo, ${teste.USU_NOME}`)

});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});