const express = require('express');
const app = express();


const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('index.html');
})


app.get('/about', function (req, res) {
    res.render('about.html');
})

const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    database: 'my_db'
})

app.get('/db', function (req, res) {

})