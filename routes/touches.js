var express = require('express');
var Runs = require('../models/run')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var r = new Runs ({
      	painting: 1,
        touch: 1,
        x_coord: 123,
        y_coord: 123
    });
    // r.save(function (err) {
    //     if (err) {
    //         console.error(err)
    //         res.send(err.message);
    //     } else {
    //         res.send('saved!!')
    //     }
    // });
    try {
        // console.log('before save', r)
    r.save()
        .then(function(doc) {
            console.log('saved')
            // res.send('saved!!')
        }, function(err) {
            console.error(err)
            // res.send(err.message);
        })
        .catch(function(err) {
            console.log(err)
        })
    } catch(e) {
        console.log(e)
    }
});
/* GET users listing. */
router.get('/bla', function(req, res, next) {

  res.send('respond with a resource');
});
module.exports = router;
