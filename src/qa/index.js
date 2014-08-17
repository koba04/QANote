require('insert-css')(require('./index.styl'));

var Vue   = require('vue'),
    User  = require('../user')
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
    if (!User.current()) {
      this.$parent.view = 'login';
      return;
    }
    this.category = this.$parent.category;
    User.fetchQAList(this.category).done(function(QAList) {
      this.QAList = QAList.map(function(QA) { return QA.attributes });
    }.bind(this));
  },
  methods: {
    addQA: function() {
      if (!this.category || !this.question || !this.answer) return;
      User.addQA({
        category: this.category,
        question: this.question,
        answer: this.answer,
      }).done(function(QA) {
        this.QAList.unshift(QA.attributes);
      }.bind(this));
    }
  },
});

