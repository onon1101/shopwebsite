var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const cors = require('cors');  
app.use(cors({  
    origin:['http://localhost:8080'],
    methods:['GET','POST','DELETE'],
}));
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
　next();　
});
const port = 3002

var mysql = require('mysql');
var dp = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database:'node.js-test',
    port: 3306
});


// dp.query('SELECT 12 + 34 AS result', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The result is: ', rows[0].result);
// }); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


var debug = require('debug')('my-application');
app.set('port', process.env.PORT || 3000);

// 啟動監聽
var server = app.listen(app.get('port'), function() {
debug('Express server listening on port ' + server.address().port);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
//  module.exports = app;
