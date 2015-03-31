/**
 * Created by Muggi on 27-03-2015.
 */

//var users = [
//    {userName: "", password : ""}
//]
//module.exports = function(userName,password){
//    var found = users.filter(function(user){
//        return user.userName === userName && user.password === password;
//    })
//    return found.length === 1 ? true : false;
//}

var mongoose = require('mongoose');
var db = require('./db');
var user = mongoose.model('user');

function _checkuser(userName, password, callback) {
    return user.find(function (err, data) {
        if (err) {
            return callback(err);
        }
        console.log("_chechuser data : " + data);
        var check = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == userName && data[i].password == password) {
                check = true
            }
        }
        return callback(null, check);
    });

}

function _createuser(userName, password) {
    user.create({
        name: userName,
        password: password
    }, function (err, user) {
        if (!err) {
            console.log('User' + user._id + " saved");
        }
    });
}

function _removeuser(username) {
    user.remove({name: username}, function (err) {
        console.log(err);
    });
    console.log('User removed');
}

module.exports = {
    checkuser: _checkuser,
    createuser: _createuser,
    removeuser: _removeuser
}
