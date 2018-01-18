var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = [];
  var connection = mysql.createConnection({
    host     : 'product-db',
    user     : 'test',
    password : 'test',
    database : 'docker'
  });

  connection.connect();

  connection.query('SELECT * FROM products ORDER BY name ASC', function (error, results, fields) {
    if (error) {
      products.push(error.sqlMessage);
    } else {
      results.forEach(function (result) {
        products.push(result.name);
      });
    }

    res.json(products);
  });

  connection.end();
});

module.exports = router;
