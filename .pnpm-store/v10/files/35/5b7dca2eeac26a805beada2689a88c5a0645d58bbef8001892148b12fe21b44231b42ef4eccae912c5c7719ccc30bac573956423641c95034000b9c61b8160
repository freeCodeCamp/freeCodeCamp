'use strict';

const Prompt = require('../prompt');
const keypress = require('../keypress');
const placeholder = require('../placeholder');
const { isPrimitive } = require('../utils');

class StringPrompt extends Prompt {
  constructor(options) {
    super(options);
    this.initial = isPrimitive(this.initial) ? String(this.initial) : '';
    if (this.initial) this.cursorHide();
    this.state.prevCursor = 0;
    this.state.clipboard = [];
    this.keypressTimeout =
      this.options.keypressTimeout !== undefined
        ? this.options.keypressTimeout
        : null;
  }

  async keypress(input, key = input ? keypress(input, {}) : {}) {
    const now = Date.now();
    const elapsed = now - this.lastKeypress;
    this.lastKeypress = now;

    const isEnterKey = key.name === 'return' || key.name === 'enter';
    let prev = this.state.prevKeypress;
    let append;
    this.state.prevKeypress = key;

    if (this.keypressTimeout != null && isEnterKey) {
      if (elapsed < this.keypressTimeout) {
        return this.submit();
      }

      this.state.multilineBuffer = this.state.multilineBuffer || '';
      this.state.multilineBuffer += input;
      append = true;
      prev = null;
    }

    if (append || (this.options.multiline && isEnterKey)) {
      if (!prev || prev.name !== 'return') {
        return this.append('\n', key);
      }
    }

    return super.keypress(input, key);
  }

  moveCursor(n) {
    this.cursor += n;
  }

  reset() {
    this.input = this.value = '';
    this.cursor = 0;
    return this.render();
  }

  dispatch(ch, key) {
    if (!ch || key.ctrl || key.code) return this.alert();
    this.append(ch);
  }

  append(ch) {
    let { cursor, input } = this.state;
    this.input = `${input}`.slice(0, cursor) + ch + `${input}`.slice(cursor);
    this.moveCursor(String(ch).length);
    this.render();
  }

  insert(str) {
    this.append(str);
  }

  delete() {
    let { cursor, input } = this.state;
    if (cursor <= 0) return this.alert();
    this.input = `${input}`.slice(0, cursor - 1) + `${input}`.slice(cursor);
    this.moveCursor(-1);
    this.render();
  }

  deleteForward() {
    let { cursor, input } = this.state;
    if (input[cursor] === void 0) return this.alert();
    this.input = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
    this.render();
  }

  cutForward() {
    let pos = this.cursor;
    if (this.input.length <= pos) return this.alert();
    this.state.clipboard.push(this.input.slice(pos));
    this.input = this.input.slice(0, pos);
    this.render();
  }

  cutLeft() {
    let pos = this.cursor;
    if (pos === 0) return this.alert();
    let before = this.input.slice(0, pos);
    let after = this.input.slice(pos);
    let words = before.split(' ');
    this.state.clipboard.push(words.pop());
    this.input = words.join(' ');
    this.cursor = this.input.length;
    this.input += after;
    this.render();
  }

  paste() {
    if (!this.state.clipboard.length) return this.alert();
    this.insert(this.state.clipboard.pop());
    this.render();
  }

  toggleCursor() {
    if (this.state.prevCursor) {
      this.cursor = this.state.prevCursor;
      this.state.prevCursor = 0;
    } else {
      this.state.prevCursor = this.cursor;
      this.cursor = 0;
    }
    this.render();
  }

  first() {
    this.cursor = 0;
    this.render();
  }

  last() {
    this.cursor = this.input.length - 1;
    this.render();
  }

  next() {
    let init = this.initial != null ? String(this.initial) : '';
    if (!init || !init.startsWith(this.input)) return this.alert();
    this.input = this.initial;
    this.cursor = this.initial.length;
    this.render();
  }

  prev() {
    if (!this.input) return this.alert();
    this.reset();
  }

  backward() {
    return this.left();
  }

  forward() {
    return this.right();
  }

  right() {
    if (this.cursor >= this.input.length) return this.alert();
    this.moveCursor(1);
    return this.render();
  }

  left() {
    if (this.cursor <= 0) return this.alert();
    this.moveCursor(-1);
    return this.render();
  }

  isValue(value) {
    return !!value;
  }

  async format(input = this.value) {
    let initial = await this.resolve(this.initial, this.state);
    if (!this.state.submitted) {
      return placeholder(this, { input, initial, pos: this.cursor });
    }
    return this.styles.submitted(input || initial);
  }

  async render() {
    let size = this.state.size;

    let prefix = await this.prefix();
    let separator = await this.separator();
    let message = await this.message();

    let prompt = [prefix, message, separator].filter(Boolean).join(' ');
    this.state.prompt = prompt;

    let header = await this.header();
    let output = await this.format();
    let help = (await this.error()) || (await this.hint());
    let footer = await this.footer();

    if (help && !output.includes(help)) output += ' ' + help;
    prompt += ' ' + output;

    this.clear(size);
    this.write([header, prompt, footer].filter(Boolean).join('\n'));
    this.restore();
  }
}

module.exports = StringPrompt;
