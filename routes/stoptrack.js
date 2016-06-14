var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

router.post('/', function(req, res, next) {
    var id = req.body.id;

    console.log("Got the following id: ", id);

    var options = {
      args: id
    };

    var pyshell = new PythonShell('./bin/scripts/stop.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });

    pyshell.send('hello');

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
    });

    res.send("got it");
});

module.exports = router;
