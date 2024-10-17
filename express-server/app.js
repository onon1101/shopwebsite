var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const port = 3000

var mysql = require('mysql');
var dp = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database:'node.js-test',
    port: 3306
});

dp.connect();
dp.query('SELECT 12 + 34 AS result', function(err, rows, fields) {
    if (err) throw err;
    console.log('The result is: ', rows[0].result);
}); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  
module.exports = app;
