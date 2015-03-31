/**
 * Created by Muggi on 27-03-2015.
 */

var users = [
    {userName: "Masterdagon", password : "cthulhu fhtagn"}
]
module.exports = function(userName,password){
    var found = users.filter(function(user){
        return user.userName === userName && user.password === password;
    })
    return found.length === 1 ? true : false;
}
