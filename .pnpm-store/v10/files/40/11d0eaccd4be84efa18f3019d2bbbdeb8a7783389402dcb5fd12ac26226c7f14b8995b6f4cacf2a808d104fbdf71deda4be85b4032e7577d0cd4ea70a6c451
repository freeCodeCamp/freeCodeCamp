'use strict';

const StringPrompt = require('./string');

class NumberPrompt extends StringPrompt {
  constructor(options = {}) {
    super({ style: 'number', ...options });
    this.min = this.isValue(options.min) ? this.toNumber(options.min) : -Infinity;
    this.max = this.isValue(options.max) ? this.toNumber(options.max) : Infinity;
    this.delay = options.delay != null ? options.delay : 1000;
    this.float = options.float !== false;
    this.round = options.round === true || options.float === false;
    this.major = options.major || 10;
    this.minor = options.minor || 1;
    this.initial = options.initial != null ? options.initial : '';
    this.input = String(this.initial);
    this.cursor = this.input.length;
    this.cursorShow();
  }

  append(ch) {
    if (!/[-+.]/.test(ch) || (ch === '.' && this.input.includes('.'))) {
      return this.alert('invalid number');
    }
    return super.append(ch);
  }

  number(ch) {
    return super.append(ch);
  }

  next() {
    if (this.input && this.input !== this.initial) return this.alert();
    if (!this.isValue(this.initial)) return this.alert();
    this.input = this.initial;
    this.cursor = String(this.initial).length;
    return this.render();
  }

  up(number) {
    let step = number || this.minor;
    let num = this.toNumber(this.input);
    if (num > this.max + step) return this.alert();
    this.input = `${num + step}`;
    return this.render();
  }

  down(number) {
    let step = number || this.minor;
    let num = this.toNumber(this.input);
    if (num < this.min - step) return this.alert();
    this.input = `${num - step}`;
    return this.render();
  }

  shiftDown() {
    return this.down(this.major);
  }

  shiftUp() {
    return this.up(this.major);
  }

  format(input = this.input) {
    if (typeof this.options.format === 'function') {
      return this.options.format.call(this, input);
    }
    return this.styles.info(input);
  }

  toNumber(value = '') {
    return this.float ? +value : Math.round(+value);
  }

  isValue(value) {
    return /^[-+]?[0-9]+((\.)|(\.[0-9]+))?$/.test(value);
  }

  submit() {
    let value = [this.input, this.initial].find(v => this.isValue(v));
    this.value = this.toNumber(value || 0);
    return super.submit();
  }
}

module.exports = NumberPrompt;
