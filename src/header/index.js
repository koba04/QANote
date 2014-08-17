require('insert-css')(require('./index.styl'));

var Vue = require('vue');

module.exports = Vue.extend({
  template: require('./index.html'),
  data: {
    description: "",
  },
  created: function() {
    this.updateDescription(this.$parent.view);
    this.$parent.$watch('view', function(value) {
      this.updateDescription(value);
    }.bind(this));
  },
  methods: {
    updateDescription: function(view) {
      switch (view) {
        case "top":
          this.description = "Category";
          break;
        case "qa":
          this.description = this.$parent.category;
          break;
      }
    }
  }
});

