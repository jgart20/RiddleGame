var express = require('express');
var router = express.Router();

var redRouter = require('./red');
router.use('/red', redRouter);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the Thorns pathway');
  res.render('thorns', {name: 'PrickyBoi'})
});

module.exports = router;