var express = require('express');
var Runs = require('../models/run')
var router = express.Router();

router.post('/', function(req, res, next) {
    // TODO: read the post and set variables for databse save
    var r = new Runs ({
      	painting: 1,
        touch: 1,
        x_coord: 123,
        y_coord: 123
    });

    r.save()
    .then(function(doc) {
        console.log('saved')
        res.send('saved!!')
    }, function(err) {
        console.error(err)
        res.send(err.message);
    });
});

router.get('/', function(req, res, next) {
    Runs.findOne().exec().then(function(doc) {
        if (doc) {
            //something found
            res.send(doc)
        } else {
            res.send('no doc found')
        }
    }, function(err) {
        console.error(err)
        res.send(err.message)
    })
});

module.exports = router;
