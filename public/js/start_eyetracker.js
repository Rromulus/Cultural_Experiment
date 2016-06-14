var id= localStorage.getItem("id");
    id = Number(id);

var PythonShell = require('python-shell');

var options = {
  args: id
};
 
var pyshell = new PythonShell('js/RunEyeTracker.py',options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution 
  console.log('results: %j', results);
});

pyshell.send('hello');

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement) 
  console.log(message);
});