'use strict';

var Vue       = require('vue'),
    director  = require('director')
;

// create App
require('insert-css')(require('./index.styl'));
var app = new Vue({
  el: '#app',
  className: "container",
  template: require('./index.html'),
  data: {
    name: "vue",
  }
});

Parse.initialize("QvIeb4Xn9a3HrGbgTVMIMfrtltKwGBvM4ycpMEBk", "2V0zGyKEJxyinKfrPMnxlcKGxJlQ7exCwBd6yTgS");

Parse.User.logIn("my name", "my pass", {
  success: function(user) {
    app.name = user.get("username");
  },
  error: function(user, error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

