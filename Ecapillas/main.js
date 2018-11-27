var express = require('express');
var app = express();
var pgp = require("pg-promise")();
app.use(express.json())
app.use(express.urlencoded({extended:false}));
const Sequelize = require('sequelize');
const sequelize = new Sequelize('noedb', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
})

const item = sequelize.define('items', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: Sequelize.TEXT,
    precio:Sequelize.FLOAT,
    stock:Sequelize.INTEGER
  },
  {
    timestamps: false
  }
  );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/registrar/', function (req, res) {
    const data = req.body
    console.log(data);
    item.create(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
