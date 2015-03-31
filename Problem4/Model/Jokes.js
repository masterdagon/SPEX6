/**
 * Created by Muggi on 25-03-2015.
 */
var mongoose = require('mongoose');
var db = require('./db');
var jokes = mongoose.model('joke');

function _getAllJokes(callback) {
    return jokes.find(function (err, data) {
        if (err) {
            return callback(err);
        }
        console.log("_getAllJokes contains : " + data);
        return callback(null,data);
    });
}


function _getRandomJoke(callback) {
    return jokes.find(function (err, data) {
        if (err) {
            return callback(err);

        }
        console.log("_getRandomJoke - data contains: " + data);
        var index = Math.floor(Math.random() * data.length);
        console.log("data with index: " + index + " : " + data[index].joke);
        return callback(null,data[index].joke);
    });


}

function _addJoke(joke) {
    jokes.create({
        joke: joke
    }, function (err, joke) {
        if (!err) {
            console.log('joke' + joke._id + " saved");
        }
    });
}

module.exports = {
    allJokes: _getAllJokes,
    getRandomJoke: _getRandomJoke,
    addJoke: _addJoke
}