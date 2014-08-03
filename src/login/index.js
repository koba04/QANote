require('insert-css')(require('./index.styl'));

var Vue   = require('vue'),
    User  = require('../user')
;

module.exports = Vue.extend({
  template: require('./index.html'),
  data: {
    type:     'login',
    loginid:  '',
    password: '',
    email:    '',
    error:    ''
  },
  computed: {
    buttonValue: function() {
      return this.type === 'register' ? 'Register' : 'Login';
    },
    toggleValue: function() {
      return this.type === 'register' ? 'Login?' : 'Register?';
    }
  },
  methods: {
    toggleType: function() {
      this.type = (this.type === 'register' ? 'login' : 'register');
    },
    loginOrRegister: function() {
      this.error = '';
      this.type === 'register' ? this.register() : this.login();
    },
    login: function() {
      if (!this.loginid || !this.password) {
        this.error = "ID and Password is required";
        return;
      }

      User.login(this.loginid, this.password).then(
        function() {
          this.$parent.view = 'top';
        }.bind(this),
        function(error) {
          this.error = error.message;
        }.bind(this)
      );
    },
    register: function() {
      if (!this.loginid || !this.password || !this.email) {
        this.error = "ID and Password and Email is required";
        return;
      }

      User.register(this.loginid, this.password, this.email).then(
        function() {
          this.$parent.view = 'top';
        }.bind(this),
        function(error) {
          this.error = error.message;
        }.bind(this)
      );
    }
  }
});

