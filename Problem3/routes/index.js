var express = require('express');
var router = express.Router();
var jokes = require('../Model/Jokes.js');
var bodyParser = require("body-parser");
var session = require("express-session");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Problem 2', userName : req.session.userName});
});

router.get('/joke', function (req, res, next) {
    res.render('joke.jade', {title: 'Random Joke', joke: jokes.getRandomJoke()});
});

router.get('/jokes', function (req, res, next) {
    res.render('jokes.jade', {title: 'All Jokes', joke: jokes.allJokes});
});

router.get('/addJoke', function (req, res, next) {
    res.render('addJoke.jade', {title: 'Add a Joke'});
});

router.post('/storeJoke', function (req, res, next) {
    jokes.addJoke(req.body.joke.toString());
    res.redirect('/addJoke');
});

router.get('/login', function (req, res, next) {
    res.render('login.jade', {title: 'Login'});
});

module.exports = router;
