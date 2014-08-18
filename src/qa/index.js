require('insert-css')(require('./index.styl'));

var Vue = require('vue'),
    Api = require('../api')
;

module.exports = Vue.extend({
  template: require('./index.html'),
  data: {
    QAList: [],
    category: '',
    question: '',
    answer: '',
  },
  created: function() {
    if (!Api.current()) {
      this.$parent.view = 'login';
      return;
    }
    this.category = this.$parent.category;
    Api.fetchQAList(this.category).done(function(QAList) {
      this.QAList = QAList.map(function(QA) { return QA.attributes });
    }.bind(this));
  },
  methods: {
    addQA: function() {
      if (!this.category || !this.question || !this.answer) return;
      Api.addQA({
        category: this.category,
        question: this.question,
        answer: this.answer,
      }).done(function(QA) {
        this.QAList.unshift(QA.attributes);
      }.bind(this));
    }
  },
});

