'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util;

function _load_util() {
  return _util = require('./util.js');
}

class ProgressBar {
  constructor(total, stdout = process.stderr, callback) {
    this.stdout = stdout;
    this.total = total;
    this.chars = ProgressBar.bars[0];
    this.delay = 60;
    this.curr = 0;
    this._callback = callback;
    (0, (_util || _load_util()).clearLine)(stdout);
  }

  tick() {
    if (this.curr >= this.total) {
      return;
    }

    this.curr++;

    // schedule render
    if (!this.id) {
      this.id = setTimeout(() => this.render(), this.delay);
    }
  }

  cancelTick() {
    if (this.id) {
      clearTimeout(this.id);
      this.id = null;
    }
  }

  stop() {
    // "stop" by setting current to end so `tick` becomes noop
    this.curr = this.total;

    this.cancelTick();
    (0, (_util || _load_util()).clearLine)(this.stdout);
    if (this._callback) {
      this._callback(this);
    }
  }

  render() {
    // clear throttle
    this.cancelTick();

    let ratio = this.curr / this.total;
    ratio = Math.min(Math.max(ratio, 0), 1);

    // progress without bar
    let bar = ` ${this.curr}/${this.total}`;

    // calculate size of actual bar
    // $FlowFixMe: investigate process.stderr.columns flow error
    const availableSpace = Math.max(0, this.stdout.columns - bar.length - 3);
    const width = Math.min(this.total, availableSpace);
    const completeLength = Math.round(width * ratio);
    const complete = this.chars[0].repeat(completeLength);
    const incomplete = this.chars[1].repeat(width - completeLength);
    bar = `[${complete}${incomplete}]${bar}`;

    (0, (_util || _load_util()).toStartOfLine)(this.stdout);
    this.stdout.write(bar);
  }
}
exports.default = ProgressBar;
ProgressBar.bars = [['#', '-']];