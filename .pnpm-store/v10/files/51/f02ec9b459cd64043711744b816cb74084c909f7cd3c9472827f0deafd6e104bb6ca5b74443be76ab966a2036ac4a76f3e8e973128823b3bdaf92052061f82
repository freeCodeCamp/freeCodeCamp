'use strict';

const hint = '(Use <shift>+<up/down> to sort)';
const Prompt = require('./select');

class Sort extends Prompt {
  constructor(options) {
    super({ ...options, reorder: false, sort: true, multiple: true });
    this.state.hint = [this.options.hint, hint].find(this.isValue.bind(this));
  }

  indicator() {
    return '';
  }

  async renderChoice(choice, i) {
    let str = await super.renderChoice(choice, i);
    let sym = this.symbols.identicalTo + ' ';
    let pre = (this.index === i && this.sorting) ? this.styles.muted(sym) : '  ';
    if (this.options.drag === false) pre = '';
    if (this.options.numbered === true) {
      return pre + `${i + 1} - ` + str;
    }
    return pre + str;
  }

  get selected() {
    return this.choices;
  }

  submit() {
    this.value = this.choices.map(choice => choice.value);
    return super.submit();
  }
}

module.exports = Sort;
