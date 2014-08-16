require('insert-css')(require('./index.styl'));

var Vue = require('vue');

module.exports = Vue.extend({
  template: require('./index.html'),
  data: {
  },
});

