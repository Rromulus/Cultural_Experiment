var express = require('express');
var Runs = require('../models/run')
var router = express.Router();

router.post('/', function(req, res, next) {
    // read the post and set variables for database save:
    var r = new Runs({
        test: req.body.test,
        participant: req.body.participant,
        painting: req.body.painting,
        touch: req.body.touch,
        time: req.body.time,
        x_coord: req.body.x_coord,
        y_coord: req.body.y_coord
    });
    

    r.save()
    .then(function(doc) {
        console.log('saved');
        res.send('saved');
    }, function(err) {
        console.error(err);
        res.send(err.message);
    });
});

router.get('/', function(req, res, next) {
    // use model Runs, create query 'find one doc', execute query and then process the result in a function
    //Runs.findOne().exec().then(function(doc) {
     //   if (doc) {
            //something found
     //       res.send(doc)
      //  } else {
      //      res.send('no doc found')
      //  }
    //}, function(err) {
     //   console.error(err)
      //  res.send(err.message)
    //})


    Runs.find({}, function(err, docs) {
      if ( err ) {
        res.status(500).send(err);
      }
      res.status(200).json(docs);

    });


});

module.exports = router;
