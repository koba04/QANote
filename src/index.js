'use strict';

var Vue       = require('vue'),
    director  = require('director')
;

// Vue.config("debug", true);

// component
Vue.component('top', require('./top/'));
Vue.component('login', require('./login/'));
Vue.component('qa', require('./qa/'));

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

var router = new director.Router();
router.on(':category', function(category) {
  console.log(category);
  app.view = 'qa';
});
router.on('', function() {
  console.log('top');
  app.view = 'top';
});
router.init();

