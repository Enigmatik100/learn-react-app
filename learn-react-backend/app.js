const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const produitRouter = require('./routes/produits.routes')
const app = express();

app.use(cors());
app.use(bodyparser.json());

const connexionDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_boutique'
});

connexionDb.connect();
//connexionDb.query('use db_boutique');
app.use('/', (req, res) => {
    res.end('OK');
});
app.use('/produits', produitRouter(connexionDb));

module.express = app;