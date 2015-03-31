/**
 * Created by Muggi on 27-03-2015.
 */

var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/jokes';



//mongoose.connect(dbURI);

var JokeSchema = new mongoose.Schema({
    joke: String
});

mongoose.model('joke', JokeSchema);
