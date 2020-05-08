var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const sql = require('mssql');

var jsonParser = bodyParser.json();

var urlencondeParser = bodyParser.urlencoded({ extended: false })

var config = {
    user: 'react',
    password: 'react',
    server: 'DESKTOP-NPSHI85\\EVERTONESC',
    database: 'METALSOL_DESENV'
};

app.post('/api/users', jsonParser, async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;



        sql.connect(config, async (err) => {

            await new sql.Request().query(`SELECT COUNT (USU_ID) AS TESTE FROM USU_USUARIO WHERE USU_LOGIN = '${username}' 
            AND USU_SENHA = '${password}' AND _DELETE = 0`, (err, result) => {

                var teste = result.recordset[0].TESTE;
                // res.json('Resultado da query ' + teste);
                if (teste == 1) {
                    res.json('Login!')
                }
                else {
                    res.json('Usuario ou senha invalidos!')
                }

            })

        })

    }
    catch (ex) {
        console.log('message from catch is => ' + ex);
    }
});

// function execSQLQuery(sqlQry, res) {
//     sql.connect(config)
//     new sql.request()
//         .query(sqlQry)
//         .then(result => res.json(result.recordset))
//         .catch(err => res.json(err));
// }



// app.get('/teste', urlencondeParser, function (req, res) {

//     execSQLQuery('SELECT * FROM USU_USUARIO WHERE _DELETE = 0', res);

// });


var server = app.listen(3333, function () {
    console.log('Server is running..');
});
