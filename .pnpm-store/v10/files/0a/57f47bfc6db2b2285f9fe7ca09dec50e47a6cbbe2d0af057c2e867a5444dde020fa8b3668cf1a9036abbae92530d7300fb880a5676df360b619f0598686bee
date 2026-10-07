'use strict';

const Select = require('./select');

const highlight = (input, color) => {
  const regex = input ? new RegExp(input, 'ig') : /$^/;

  return str => {
    return input ? str.replace(regex, match => color(match)) : str;
  };
};

class AutoComplete extends Select {
  constructor(options) {
    super(options);
    this.cursorShow();
  }

  moveCursor(n) {
    this.state.cursor += n;
  }

  dispatch(ch) {
    return this.append(ch);
  }

  space(ch) {
    return this.options.multiple ? super.space(ch) : this.append(ch);
  }

  append(ch) {
    let { cursor, input } = this.state;
    this.input = input.slice(0, cursor) + ch + input.slice(cursor);
    this.moveCursor(1);
    return this.complete();
  }

  delete() {
    let { cursor, input } = this.state;
    if (!input) return this.alert();
    this.input = input.slice(0, cursor - 1) + input.slice(cursor);
    this.moveCursor(-1);
    return this.complete();
  }

  deleteForward() {
    let { cursor, input } = this.state;
    if (input[cursor] === void 0) return this.alert();
    this.input = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
    return this.complete();
  }

  number(ch) {
    return this.append(ch);
  }

  async complete() {
    this.completing = true;
    this.choices = await this.suggest(this.input, this.state._choices);
    this.state.limit = void 0; // allow getter/setter to reset limit
    this.index = Math.min(Math.max(this.visible.length - 1, 0), this.index);
    await this.render();
    this.completing = false;
  }

  suggest(input = this.input, choices = this.state._choices) {
    if (typeof this.options.suggest === 'function') {
      return this.options.suggest.call(this, input, choices);
    }
    let str = input.toLowerCase();
    return choices.filter(ch => ch.message.toLowerCase().includes(str));
  }

  pointer() {
    return '';
  }

  format() {
    if (!this.focused) return this.input;

    if (this.options.multiple && this.state.submitted) {
      return this.selected.map(ch => this.styles.primary(ch.message)).join(', ');
    }

    if (this.state.submitted) {
      let value = this.value = this.input = this.focused.value;
      return this.styles.primary(value);
    }

    return this.input;
  }

  async render() {
    if (this.state.status !== 'pending') return super.render();
    const hl = this.options.highlight || this.styles.complement;

    const style = (input, color) => {
      if (!input) return input;
      if (hl.stack) return hl(input);
      return hl.call(this, input);
    };

    const color = highlight(this.input, style);
    const choices = this.choices;
    this.choices = choices.map(ch => ({ ...ch, message: color(ch.message) }));
    await super.render();
    this.choices = choices;
  }

  submit() {
    if (this.options.multiple) {
      this.value = this.selected.map(ch => ch.name);
    }
    return super.submit();
  }
}

module.exports = AutoComplete;
