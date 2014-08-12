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

User.prototype.fetchCategories = function() {
  var user = this.current();
  var Categories = Parse.Object.extend("Categories");
  var query = new Parse.Query(Categories);
  query.equalTo("user", user);
  return query.find();
};

User.prototype.addCategory = function(category) {
  var user = this.current();
  var Categories = Parse.Object.extend("Categories");
  var categories = new Categories();
  categories.setACL(new Parse.ACL(user));
  categories.set("user", user);
  categories.set("name", category);
  return categories.save();
};

module.exports = new User();
