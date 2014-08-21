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
      this.QAList = QAList.map(function(QA) {
        var data = QA.attributes;
        data.isShow = false;
        return data;
      });
    }.bind(this));
  },
  methods: {
    toggleQA: function(e) {
      e.targetVM.isShow = !e.targetVM.isShow;
    },
    toggleAllQA: function(e) {
      var isShow = e.target.checked;
      this.QAList.map(function(QA) {
        QA.isShow = isShow;
      });
    },
    addQA: function() {
      if (!this.category || !this.question || !this.answer) return;
      Api.addQA({
        category: this.category,
        question: this.question,
        answer: this.answer,
      }).done(function(QA) {
        var data = QA.attributes;
        data.isShow = true;
        this.QAList.unshift(data);
      }.bind(this));
    }
  },
});

