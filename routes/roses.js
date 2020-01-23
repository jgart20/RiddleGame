var express = require('express');
var router = express.Router();

var gunsRouter = require('./guns');

router.use('/guns',gunsRouter);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You have entered the Rose Pathway');
});

module.exports = router;