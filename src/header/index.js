require('insert-css')(require('./index.styl'));

var Vue = require('vue');

module.exports = Vue.extend({
  template: require('./index.html'),
  data: {
    description: "",
  },
  created: function() {
    if (this.$parent.view === "top") {
      this.description = "Categories";
    }
  },
});

