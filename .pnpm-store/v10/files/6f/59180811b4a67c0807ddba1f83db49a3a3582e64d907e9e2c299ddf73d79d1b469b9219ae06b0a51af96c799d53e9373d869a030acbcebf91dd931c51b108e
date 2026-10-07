'use strict';

const BooleanPrompt = require('../types/boolean');

class ConfirmPrompt extends BooleanPrompt {
  constructor(options) {
    super(options);
    this.default = this.options.default || (this.initial ? '(Y/n)' : '(y/N)');
  }
}

module.exports = ConfirmPrompt;

