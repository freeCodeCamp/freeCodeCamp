'use strict';

const FormPrompt = require('../prompts/form');

const defaultAuthenticate = () => {
  throw new Error('expected prompt to have a custom authenticate method');
};

const factory = (authenticate = defaultAuthenticate) => {

  class AuthPrompt extends FormPrompt {
    constructor(options) {
      super(options);
    }

    async submit() {
      this.value = await authenticate.call(this, this.values, this.state);
      super.base.submit.call(this);
    }

    static create(authenticate) {
      return factory(authenticate);
    }
  }

  return AuthPrompt;
};

module.exports = factory();
