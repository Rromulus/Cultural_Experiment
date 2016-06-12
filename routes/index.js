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

router.get('/painting7', function(req, res, next) {
  res.render('painting7', { title: 'ejs' });
});

router.get('/painting8', function(req, res, next) {
  res.render('painting8', { title: 'ejs' });
});

router.get('/end', function(req, res, next) {
  res.render('end', { title: 'ejs' });
});

module.exports = router;



