'use strict';

const Prompt = require('../prompt');
const { isPrimitive, hasColor } = require('../utils');

class BooleanPrompt extends Prompt {
  constructor(options) {
    super(options);
    this.cursorHide();
  }

  async initialize() {
    let initial = await this.resolve(this.initial, this.state);
    this.input = await this.cast(initial);
    await super.initialize();
  }

  dispatch(ch) {
    if (!this.isValue(ch)) return this.alert();
    this.input = ch;
    return this.submit();
  }

  format(value) {
    let { styles, state } = this;
    return !state.submitted ? styles.primary(value) : styles.success(value);
  }

  cast(input) {
    return this.isTrue(input);
  }

  isTrue(input) {
    return /^[ty1]/i.test(input);
  }

  isFalse(input) {
    return /^[fn0]/i.test(input);
  }

  isValue(value) {
    return isPrimitive(value) && (this.isTrue(value) || this.isFalse(value));
  }

  async hint() {
    if (this.state.status === 'pending') {
      let hint = await this.element('hint');
      if (!hasColor(hint)) {
        return this.styles.muted(hint);
      }
      return hint;
    }
  }

  async render() {
    let { input, size } = this.state;

    let prefix = await this.prefix();
    let sep = await this.separator();
    let msg = await this.message();
    let hint = this.styles.muted(this.default);

    let promptLine = [prefix, msg, hint, sep].filter(Boolean).join(' ');
    this.state.prompt = promptLine;

    let header = await this.header();
    let value = this.value = this.cast(input);
    let output = await this.format(value);
    let help = (await this.error()) || (await this.hint());
    let footer = await this.footer();

    if (help && !promptLine.includes(help)) output += ' ' + help;
    promptLine += ' ' + output;

    this.clear(size);
    this.write([header, promptLine, footer].filter(Boolean).join('\n'));
    this.restore();
  }

  set value(value) {
    super.value = value;
  }
  get value() {
    return this.cast(super.value);
  }
}

module.exports = BooleanPrompt;
