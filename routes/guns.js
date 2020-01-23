var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You have entered the Guns Pathway');
});

module.exports = router;