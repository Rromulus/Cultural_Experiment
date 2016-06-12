var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('start', { title: 'ejs' });
});

router.get('/painting1', function(req, res, next) {
  res.render('painting1', { title: 'ejs' });
});

router.get('/painting2', function(req, res, next) {
  res.render('painting2', { title: 'ejs' });
});

router.get('/end', function(req, res, next) {
  res.render('end', { title: 'ejs' });
});

module.exports = router;



