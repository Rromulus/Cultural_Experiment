var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var runSchema = new Schema({
	painting: Number,
	touch: Number,
	x_coord: Number,
	y_coord: Number
});

var Runs = mongoose.model('run', runSchema);

module.exports =  Runs;
