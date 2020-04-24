var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'react',
        password: 'react',
        server: 'DESKTOP-0628S8B\\SQLEXPRESS', 
        database: 'METALSOL_TESTE2' 
    };

    // var config = {
    //     user: 'react',
    //     password: 'react',
    //     server: 'DESKTOP-0628S8B\\SQLEXPRESS', 
    //     database: 'METALSOL_TESTE2' 
    // };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select ORC_SOLICITANTE from ORCAMENTO', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});