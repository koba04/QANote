require('insert-css')(require('./index.styl'));

var Vue = require('vue'),
    Api = require('../api')
;

module.exports = Vue.extend({
  template: require('./index.html'),
  data: {
    categories: [],
    category: ''
  },
  created: function() {
    if (!Api.current()) {
      this.$parent.view = 'login';
      return;
    }
    Api.fetchCategories().done(function(categories) {
      this.categories = categories.map(function(category) { return category.attributes });
    }.bind(this));
  },
  methods: {
    addCategory: function() {
      if (!this.category) return;
      Api.addCategory(this.category).done(function(category) {
        this.categories.unshift(category.attributes);
      }.bind(this));
    }
  }
});

