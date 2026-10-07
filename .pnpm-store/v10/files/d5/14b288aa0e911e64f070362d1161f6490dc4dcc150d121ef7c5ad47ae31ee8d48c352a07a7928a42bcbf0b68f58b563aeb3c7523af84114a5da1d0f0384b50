'use strict';

const StringPrompt = require('../types/string');

class ListPrompt extends StringPrompt {
  constructor(options = {}) {
    super(options);
    this.sep = this.options.separator || /, */;
    this.initial = options.initial || '';
  }

  split(input = this.value) {
    return input ? String(input).split(this.sep) : [];
  }

  format() {
    let style = this.state.submitted ? this.styles.primary : val => val;
    return this.list.map(style).join(', ');
  }

  async submit(value) {
    let result = this.state.error || await this.validate(this.list, this.state);
    if (result !== true) {
      this.state.error = result;
      return super.submit();
    }
    this.value = this.list;
    return super.submit();
  }

  get list() {
    return this.split();
  }
}

module.exports = ListPrompt;
