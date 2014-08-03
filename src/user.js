'use strict';

function User() {
  Parse.initialize("QvIeb4Xn9a3HrGbgTVMIMfrtltKwGBvM4ycpMEBk", "2V0zGyKEJxyinKfrPMnxlcKGxJlQ7exCwBd6yTgS");
};

User.prototype.current = function() {
  return Parse.User.current();
}

User.prototype.login = function(id, pass) {
  return Parse.User.logIn(id, pass);
};

User.prototype.register = function(id, pass, email) {
  var user = new Parse.User();
  user.set("username", id);
  user.set("password", pass);
  user.set("email",   email);
  return user.signUp();
};

module.exports = new User();
