'use strict';

var Vue       = require('vue'),
    director  = require('director')
;

// Vue.config("debug", true);

// component
Vue.component('top', require('./top/'));
Vue.component('login', require('./login/'));

// create App
require('insert-css')(require('./index.styl'));
var app = new Vue({
  el: '#app',
  className: "container",
  template: require('./index.html'),
  components: {
    header: require('./header/'),
  },
  data: {
    view: 'top',
    name: "vue",
  }
});


