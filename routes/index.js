var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('painting1', { title: 'ejs' });
   //play sound
  var player = require('play-sound')(opts = {});
  player.play('sound/beep-07.mp3', function(err){});
});

router.get('/painting2', function(req, res, next) {
  res.render('painting2', { title: 'ejs' });
});

router.get('/end', function(req, res, next) {
  res.render('end', { title: 'ejs' });
});

module.exports = router;



