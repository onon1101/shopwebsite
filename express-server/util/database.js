const port = 3000

var mysql = require('mysql');

var dp = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database:'node.js-test',
    port: 3306
});

