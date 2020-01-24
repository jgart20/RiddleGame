var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('blue', {name: 'Misa Thinka disa da bloooo route'});
});

module.exports = router;
