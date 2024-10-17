var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = {
    host: 'localhost',
    user: 'root',
    password: 'gf5357485250',
    database:'node.js-test',
    port: 3306
};

/* GET home page. */
router.get('/', function(req, res, next) {
  dp.connect();
  dp.query('SELECT 12 + 34 AS result', function(err, rows, fields) {
    if (err) throw err;
    console.log('The result is: ', rows[0].result);
}); 
  res.render('index', { title: 'Express' });
});

module.exports = router;
