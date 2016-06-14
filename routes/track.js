var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');
var pyshell;

router.post('/', function(req, res, next) {
    var id = req.body.id;
    var options = {
      args: id
    };

    pyshell = new PythonShell('./bin/scripts/RunEyeTracker.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });

    console.log("Got the following id: ", id);

    pyshell.send('hello');

    // logging to node console
    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
    });

    res.send("started tracking");
});

router.post('/stop', function(req, res, next) {
    if (!pyshell) console.log("tried stopping, but wasnt running anyhow");
    console.log("should stop");

    pyshell.send('stop');

    pyshell.end(function (err) {
        if (err) console.log(err);
        console.log("stopped python shell");
    });

    res.send("stopped tracking");
});


module.exports = router;
