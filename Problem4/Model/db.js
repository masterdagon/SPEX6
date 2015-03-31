/**
 * Created by Muggi on 27-03-2015.
 */
var mongoose = require('mongoose');
//var dbURI = 'mongodb://localhost/jokes2';
var dbURI = "mongodb://muggi:mana@ds039311.mongolab.com:39311/muggiman"

mongoose.connect(dbURI);

var JokeSchema = new mongoose.Schema({
    joke: String
});

var UserSchema = new mongoose.Schema({
    name: String,
    password: String
});

mongoose.model('user', UserSchema);

mongoose.model('joke', JokeSchema);