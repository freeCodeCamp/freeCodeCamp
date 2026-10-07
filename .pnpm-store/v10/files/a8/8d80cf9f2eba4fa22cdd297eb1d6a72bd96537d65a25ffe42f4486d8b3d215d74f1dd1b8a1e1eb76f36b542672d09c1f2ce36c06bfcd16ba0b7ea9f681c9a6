'use strict';

const stripAnsi = require('strip-ansi');
const SelectPrompt = require('./select');
const placeholder = require('../placeholder');

class FormPrompt extends SelectPrompt {
  constructor(options) {
    super({ ...options, multiple: true });
    this.type = 'form';
    this.initial = this.options.initial;
    this.align = [this.options.align, 'right'].find(v => v != null);
    this.emptyError = '';
    this.values = {};
  }

  async reset(first) {
    await super.reset();
    if (first === true) this._index = this.index;
    this.index = this._index;
    this.values = {};
    this.choices.forEach(choice => choice.reset && choice.reset());
    return this.render();
  }

  dispatch(char) {
    return !!char && this.append(char);
  }

  append(char) {
    let choice = this.focused;
    if (!choice) return this.alert();
    let { cursor, input } = choice;
    choice.value = choice.input = input.slice(0, cursor) + char + input.slice(cursor);
    choice.cursor++;
    return this.render();
  }

  delete() {
    let choice = this.focused;
    if (!choice || choice.cursor <= 0) return this.alert();
    let { cursor, input } = choice;
    choice.value = choice.input = input.slice(0, cursor - 1) + input.slice(cursor);
    choice.cursor--;
    return this.render();
  }

  deleteForward() {
    let choice = this.focused;
    if (!choice) return this.alert();
    let { cursor, input } = choice;
    if (input[cursor] === void 0) return this.alert();
    let str = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
    choice.value = choice.input = str;
    return this.render();
  }

  right() {
    let choice = this.focused;
    if (!choice) return this.alert();
    if (choice.cursor >= choice.input.length) return this.alert();
    choice.cursor++;
    return this.render();
  }

  left() {
    let choice = this.focused;
    if (!choice) return this.alert();
    if (choice.cursor <= 0) return this.alert();
    choice.cursor--;
    return this.render();
  }

  space(ch, key) {
    return this.dispatch(ch, key);
  }

  number(ch, key) {
    return this.dispatch(ch, key);
  }

  next() {
    let ch = this.focused;
    if (!ch) return this.alert();
    let { initial, input } = ch;
    if (initial && initial.startsWith(input) && input !== initial) {
      ch.value = ch.input = initial;
      ch.cursor = ch.value.length;
      return this.render();
    }
    return super.next();
  }

  prev() {
    let ch = this.focused;
    if (!ch) return this.alert();
    if (ch.cursor === 0) return super.prev();
    ch.value = ch.input = '';
    ch.cursor = 0;
    return this.render();
  }

  separator() {
    return '';
  }

  format(value) {
    return !this.state.submitted ? super.format(value) : '';
  }

  pointer() {
    return '';
  }

  indicator(choice) {
    return choice.input ? '⦿' : '⊙';
  }

  async choiceSeparator(choice, i) {
    let sep = await this.resolve(choice.separator, this.state, choice, i) || ':';
    return sep ? ' ' + this.styles.disabled(sep) : '';
  }

  async renderChoice(choice, i) {
    await this.onChoice(choice, i);

    let { state, styles } = this;
    let { cursor, initial = '', name, input = '' } = choice;
    let { muted, submitted, primary, danger } = styles;

    let focused = this.index === i;
    let validate = choice.validate || (() => true);
    let sep = await this.choiceSeparator(choice, i);
    let msg = choice.message;

    if (this.align === 'right') msg = msg.padStart(this.longest + 1, ' ');
    if (this.align === 'left') msg = msg.padEnd(this.longest + 1, ' ');

    // re-populate the form values (answers) object
    let value = this.values[name] = (input || initial);
    let color = input ? 'success' : 'dark';

    if ((await validate.call(choice, value, this.state)) !== true) {
      color = 'danger';
    }

    let style = styles[color];
    let indicator = style(await this.indicator(choice, i)) + (choice.pad || '');

    let indent = this.indent(choice);
    let line = () => [indent, indicator, msg + sep, input ].filter(Boolean).join(' ');

    if (state.submitted) {
      msg = stripAnsi(msg);
      input = submitted(input);

      return line();
    }

    if (choice.format) {
      input = await choice.format.call(this, input, choice, i);
    } else {
      let color = this.styles.muted;
      let options = { input, initial, pos: cursor, showCursor: focused, color };
      input = placeholder(this, options);
    }

    if (!this.isValue(input)) {
      input = this.styles.muted(this.symbols.ellipsis);
    }

    if (choice.result) {
      this.values[name] = await choice.result.call(this, value, choice, i);
    }

    if (focused) {
      msg = primary(msg);
    }

    if (choice.error) {
      input += (input ? ' ' : '') + danger(choice.error.trim());
    } else if (choice.hint) {
      input += (input ? ' ' : '') + muted(choice.hint.trim());
    }

    return line();
  }

  async submit() {
    this.value = this.values;
    return super.base.submit.call(this);
  }
}

module.exports = FormPrompt;
