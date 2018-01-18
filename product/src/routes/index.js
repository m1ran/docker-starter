var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(['Test 1', 'Test 2', 'Test 3', 'Test 4'])
});

module.exports = router;
