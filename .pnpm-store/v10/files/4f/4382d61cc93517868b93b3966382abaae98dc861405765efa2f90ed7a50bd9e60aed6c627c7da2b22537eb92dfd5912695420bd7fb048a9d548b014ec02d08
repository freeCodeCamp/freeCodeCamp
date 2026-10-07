'use strict';

const readline = require('readline');

const _require = require('../util'),
      action = _require.action;

const EventEmitter = require('events');

const _require2 = require('sisteransi'),
      beep = _require2.beep,
      cursor = _require2.cursor;

const color = require('kleur');
/**
 * Base prompt skeleton
 * @param {Stream} [opts.stdin] The Readable stream to listen to
 * @param {Stream} [opts.stdout] The Writable stream to write readline data to
 */


class Prompt extends EventEmitter {
  constructor(opts = {}) {
    super();
    this.firstRender = true;
    this.in = opts.stdin || process.stdin;
    this.out = opts.stdout || process.stdout;

    this.onRender = (opts.onRender || (() => void 0)).bind(this);

    const rl = readline.createInterface({
      input: this.in,
      escapeCodeTimeout: 50
    });
    readline.emitKeypressEvents(this.in, rl);
    if (this.in.isTTY) this.in.setRawMode(true);
    const isSelect = ['SelectPrompt', 'MultiselectPrompt'].indexOf(this.constructor.name) > -1;

    const keypress = (str, key) => {
      let a = action(key, isSelect);

      if (a === false) {
        this._ && this._(str, key);
      } else if (typeof this[a] === 'function') {
        this[a](key);
      } else {
        this.bell();
      }
    };

    this.close = () => {
      this.out.write(cursor.show);
      this.in.removeListener('keypress', keypress);
      if (this.in.isTTY) this.in.setRawMode(false);
      rl.close();
      this.emit(this.aborted ? 'abort' : this.exited ? 'exit' : 'submit', this.value);
      this.closed = true;
    };

    this.in.on('keypress', keypress);
  }

  fire() {
    this.emit('state', {
      value: this.value,
      aborted: !!this.aborted,
      exited: !!this.exited
    });
  }

  bell() {
    this.out.write(beep);
  }

  render() {
    this.onRender(color);
    if (this.firstRender) this.firstRender = false;
  }

}

module.exports = Prompt;