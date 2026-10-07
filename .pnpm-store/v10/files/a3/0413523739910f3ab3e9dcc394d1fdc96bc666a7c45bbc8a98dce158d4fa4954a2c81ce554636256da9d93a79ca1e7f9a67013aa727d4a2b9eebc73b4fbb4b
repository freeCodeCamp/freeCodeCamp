'use strict';

const isTerm = process.env.TERM_PROGRAM === 'Apple_Terminal';
const stripAnsi = require('strip-ansi');
const utils = require('./utils');
const ansi = module.exports = exports;
const ESC = '\u001b[';
const BEL = '\u0007';
let hidden = false;

const code = ansi.code = {
  bell: BEL,
  beep: BEL,
  beginning: `${ESC}G`,
  down: `${ESC}J`,
  esc: ESC,
  getPosition: `${ESC}6n`,
  hide: `${ESC}?25l`,
  line: `${ESC}2K`,
  lineEnd: `${ESC}K`,
  lineStart: `${ESC}1K`,
  restorePosition: ESC + (isTerm ? '8' : 'u'),
  savePosition: ESC + (isTerm ? '7' : 's'),
  screen: `${ESC}2J`,
  show: `${ESC}?25h`,
  up: `${ESC}1J`
};

const cursor = ansi.cursor = {
  get hidden() {
    return hidden;
  },

  hide() {
    hidden = true;
    return code.hide;
  },
  show() {
    hidden = false;
    return code.show;
  },

  forward: (count = 1) => `${ESC}${count}C`,
  backward: (count = 1) => `${ESC}${count}D`,
  nextLine: (count = 1) => `${ESC}E`.repeat(count),
  prevLine: (count = 1) => `${ESC}F`.repeat(count),

  up: (count = 1) => count ? `${ESC}${count}A` : '',
  down: (count = 1) => count ? `${ESC}${count}B` : '',
  right: (count = 1) => count ? `${ESC}${count}C` : '',
  left: (count = 1) => count ? `${ESC}${count}D` : '',

  to(x, y) {
    return y ? `${ESC}${y + 1};${x + 1}H` : `${ESC}${x + 1}G`;
  },

  move(x = 0, y = 0) {
    let res = '';
    res += (x < 0) ? cursor.left(-x) : (x > 0) ? cursor.right(x) : '';
    res += (y < 0) ? cursor.up(-y) : (y > 0) ? cursor.down(y) : '';
    return res;
  },
  strLen(str) {
    // to suport chinese
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) realLength += 1;
      else realLength += 2;
    }
    return realLength;
  },
  restore(state = {}) {
    let { after, cursor, initial, input, prompt, size, value } = state;
    initial = utils.isPrimitive(initial) ? String(initial) : '';
    input = utils.isPrimitive(input) ? String(input) : '';
    value = utils.isPrimitive(value) ? String(value) : '';

    if (size) {
      let codes = ansi.cursor.up(size) + ansi.cursor.to(this.strLen(prompt));
      let diff = input.length - cursor;
      if (diff > 0) {
        codes += ansi.cursor.left(diff);
      }
      return codes;
    }

    if (value || after) {
      let pos = (!input && !!initial) ? - this.strLen(initial) : -this.strLen(input) + cursor;
      if (after) pos -= this.strLen(after);
      if (input === '' && initial && !prompt.includes(initial)) {
        pos += this.strLen(initial);
      }
      return ansi.cursor.move(pos);
    }
  }
};

const erase = ansi.erase = {
  screen: code.screen,
  up: code.up,
  down: code.down,
  line: code.line,
  lineEnd: code.lineEnd,
  lineStart: code.lineStart,
  lines(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
      str += ansi.erase.line + (i < n - 1 ? ansi.cursor.up(1) : '');
    }
    if (n) str += ansi.code.beginning;
    return str;
  }
};

ansi.clear = (input = '', columns = process.stdout.columns) => {
  if (!columns) return erase.line + cursor.to(0);
  let width = str => [...stripAnsi(str)].length;
  let lines = input.split(/\r?\n/);
  let rows = 0;
  for (let line of lines) {
    rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / columns);
  }
  return (erase.line + cursor.prevLine()).repeat(rows - 1) + erase.line + cursor.to(0);
};
