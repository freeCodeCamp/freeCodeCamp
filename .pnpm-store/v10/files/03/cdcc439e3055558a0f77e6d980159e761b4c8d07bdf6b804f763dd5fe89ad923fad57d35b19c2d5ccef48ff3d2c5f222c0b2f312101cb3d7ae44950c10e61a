'use strict';

const { define, width } = require('./utils');

class State {
  constructor(prompt) {
    let options = prompt.options;
    define(this, '_prompt', prompt);
    this.type = prompt.type;
    this.name = prompt.name;
    this.message = '';
    this.header = '';
    this.footer = '';
    this.error = '';
    this.hint = '';
    this.input = '';
    this.cursor = 0;
    this.index = 0;
    this.lines = 0;
    this.tick = 0;
    this.prompt = '';
    this.buffer = '';
    this.width = width(options.stdout || process.stdout);
    Object.assign(this, options);
    this.name = this.name || this.message;
    this.message = this.message || this.name;
    this.symbols = prompt.symbols;
    this.styles = prompt.styles;
    this.required = new Set();
    this.cancelled = false;
    this.submitted = false;
  }

  clone() {
    let state = { ...this };
    state.status = this.status;
    state.buffer = Buffer.from(state.buffer);
    delete state.clone;
    return state;
  }

  set color(val) {
    this._color = val;
  }
  get color() {
    let styles = this.prompt.styles;
    if (this.cancelled) return styles.cancelled;
    if (this.submitted) return styles.submitted;
    let color = this._color || styles[this.status];
    return typeof color === 'function' ? color : styles.pending;
  }

  set loading(value) {
    this._loading = value;
  }
  get loading() {
    if (typeof this._loading === 'boolean') return this._loading;
    if (this.loadingChoices) return 'choices';
    return false;
  }

  get status() {
    if (this.cancelled) return 'cancelled';
    if (this.submitted) return 'submitted';
    return 'pending';
  }
}

module.exports = State;
