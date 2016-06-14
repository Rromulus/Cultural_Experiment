var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

router.post('/', function(req, res, next) {
    var id = req.body.id;

    console.log("Got the following id: ", id);

    var options = {
      args: id
    };

    var pyshell = new PythonShell('./bin/scripts/RunEyeTracker.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });

    res.send("got it");
});

module.exports = router;
