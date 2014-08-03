require('insert-css')(require('./index.styl'));

var Vue = require('vue'),
    User      = require('../user')
;

module.exports = Vue.extend({
  template: require('./index.html'),
  created: function() {
    if (!User.current()) this.$parent.view = 'login';
  }
});

