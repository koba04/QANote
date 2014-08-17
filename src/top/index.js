require('insert-css')(require('./index.styl'));

var Vue   = require('vue'),
    User  = require('../user')
;

module.exports = Vue.extend({
  template: require('./index.html'),
  data: {
    categories: [],
    category: ''
  },
  created: function() {
    if (!User.current()) {
      this.$parent.view = 'login';
      return;
    }
    User.fetchCategories().done(function(categories) {
      this.categories = categories.map(function(category) { return category.attributes });
    }.bind(this));
  },
  methods: {
    addCategory: function() {
      if (!this.category) return;
      User.addCategory(this.category).done(function(category) {
        this.categories.unshift(category.attributes);
      }.bind(this));
    }
  }
});

