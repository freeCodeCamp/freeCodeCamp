'use strict';

const BooleanPrompt = require('../types/boolean');

class TogglePrompt extends BooleanPrompt {
  async initialize() {
    await super.initialize();
    this.value = this.initial = this.resolve(this.options.initial);
    this.disabled = this.options.disabled || 'no';
    this.enabled = this.options.enabled || 'yes';
    await this.render();
  }

  reset() {
    this.value = this.initial;
    this.render();
  }

  delete() {
    this.alert();
  }

  toggle() {
    this.value = !this.value;
    this.render();
  }

  enable() {
    if (this.value === true) return this.alert();
    this.value = true;
    this.render();
  }
  disable() {
    if (this.value === false) return this.alert();
    this.value = false;
    this.render();
  }

  up() {
    this.toggle();
  }
  down() {
    this.toggle();
  }
  right() {
    this.toggle();
  }
  left() {
    this.toggle();
  }
  next() {
    this.toggle();
  }
  prev() {
    this.toggle();
  }

  dispatch(ch = '', key) {
    switch (ch.toLowerCase()) {
      case ' ':
        return this.toggle();
      case '1':
      case 'y':
      case 't':
        return this.enable();
      case '0':
      case 'n':
      case 'f':
        return this.disable();
      default: {
        return this.alert();
      }
    }
  }

  format() {
    let active = str => this.styles.primary.underline(str);
    let value = [
      this.value ? this.disabled : active(this.disabled),
      this.value ? active(this.enabled) : this.enabled
    ];
    return value.join(this.styles.muted(' / '));
  }

  async render() {
    let { size } = this.state;

    let header = await this.header();
    let prefix = await this.prefix();
    let separator = await this.separator();
    let message = await this.message();

    let output = await this.format();
    let help = (await this.error()) || (await this.hint());
    let footer = await this.footer();

    let prompt = [prefix, message, separator, output].join(' ');
    this.state.prompt = prompt;

    if (help && !prompt.includes(help)) prompt += ' ' + help;

    this.clear(size);
    this.write([header, prompt, footer].filter(Boolean).join('\n'));
    this.write(this.margin[2]);
    this.restore();
  }
}

module.exports = TogglePrompt;
