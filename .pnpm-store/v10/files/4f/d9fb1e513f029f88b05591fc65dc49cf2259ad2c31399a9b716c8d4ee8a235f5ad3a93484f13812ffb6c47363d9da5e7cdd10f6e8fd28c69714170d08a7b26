'use strict';

const AuthPrompt = require('../types/auth');

function defaultAuthenticate(value, state) {
  if (value.username === this.options.username && value.password === this.options.password) {
    return true;
  }
  return false;
}

const factory = (authenticate = defaultAuthenticate) => {
  const choices = [
    { name: 'username', message: 'username' },
    {
      name: 'password',
      message: 'password',
      format(input) {
        if (this.options.showPassword) {
          return input;
        }
        let color = this.state.submitted ? this.styles.primary : this.styles.muted;
        return color(this.symbols.asterisk.repeat(input.length));
      }
    }
  ];

  class BasicAuthPrompt extends AuthPrompt.create(authenticate) {
    constructor(options) {
      super({ ...options, choices });
    }

    static create(authenticate) {
      return factory(authenticate);
    }
  }

  return BasicAuthPrompt;
};

module.exports = factory();
