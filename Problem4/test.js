/**
 * Created by Muggi on 27-03-2015.
 */
var users = require('./model/users');
var joke = require('./model/Jokes');
users.createuser('masterdagon','fhtagn');
joke.addJoke("A day without sunshine is like, night.");
joke.addJoke("At what age is it appropriate to tell my dog that he's adopted?");
joke.addJoke("I intend to live forever, or die trying");

//users.removeuser('Masterdagon');

;