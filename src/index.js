'use strict';

var Vue       = require('vue'),
    director  = require('director')
;

Vue.config("debug", true);

// component
Vue.component('top', require('./top/'));
Vue.component('login', require('./login/'));

// create App
require('insert-css')(require('./index.styl'));
var app = new Vue({
  el: '#app',
  className: "container",
  template: require('./index.html'),
  data: {
    view: '',
    name: "vue",
  }
});

Parse.initialize("QvIeb4Xn9a3HrGbgTVMIMfrtltKwGBvM4ycpMEBk", "2V0zGyKEJxyinKfrPMnxlcKGxJlQ7exCwBd6yTgS");

if (Parse.User.current()) {
  app.view = "top";
  Parse.User.logIn("my name", "my pass", {
    success: function(user) {
      app.name = user.get("username");
    },
    error: function(user, error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
} else {
  app.view = "login";
}


