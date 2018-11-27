var express = require('express');
var app = express();
var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'mysql',
    password : ''
  });
  
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/registrar/', function (req, res) {
    connection.connect();
    let data = req.body;
    connection.query(`INSERT INTO items (id,nombre,precio,stock) VALUES(DEFAULT,${data.nombre},${data.precio},${data-stock})`, function(err, rows, fields) {
        if (err) throw err;
        
      });
      connection.end();
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
