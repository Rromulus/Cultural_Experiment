var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var runSchema = new Schema({
	test: Number,
	participant: Number,
	painting: Number,
	touch: Number,
	time: String,
	x_coord: Number,
	y_coord: Number
});

var Runs = mongoose.model('run', runSchema);

module.exports =  Runs;
