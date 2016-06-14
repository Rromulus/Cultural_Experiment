var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('start', { title: 'ejs' });
});

router.get('/description', function(req, res, next) {
  res.render('description', { title: 'ejs' });
});

router.get('/painting1', function(req, res, next) {
  res.render('painting1', { title: 'ejs' });
});

router.get('/painting2', function(req, res, next) {
  res.render('painting2', { title: 'ejs' });
});

router.get('/painting3', function(req, res, next) {
  res.render('painting3', { title: 'ejs' });
});

router.get('/painting4', function(req, res, next) {
  res.render('painting4', { title: 'ejs' });
});

router.get('/painting5', function(req, res, next) {
  res.render('painting5', { title: 'ejs' });
});

router.get('/painting6', function(req, res, next) {
  res.render('painting6', { title: 'ejs' });
});

router.get('/dot1', function(req, res, next) {
  res.render('dot1', { title: 'ejs' });
});

router.get('/dot2', function(req, res, next) {
  res.render('dot2', { title: 'ejs' });
});

router.get('/dot3', function(req, res, next) {
  res.render('dot3', { title: 'ejs' });
});

router.get('/dot4', function(req, res, next) {
  res.render('dot4', { title: 'ejs' });
});

router.get('/dot5', function(req, res, next) {
  res.render('dot5', { title: 'ejs' });
});

router.get('/dot6', function(req, res, next) {
  res.render('dot6', { title: 'ejs' });
});

router.get('/dot7', function(req, res, next) {
  res.render('dot7', { title: 'ejs' });
});


router.get('/end', function(req, res, next) {
  res.render('end', { title: 'ejs' });
});

module.exports = router;



