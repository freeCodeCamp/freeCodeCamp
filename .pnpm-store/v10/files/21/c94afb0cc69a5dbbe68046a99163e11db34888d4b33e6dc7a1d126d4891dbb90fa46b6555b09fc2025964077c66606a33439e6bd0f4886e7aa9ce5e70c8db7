'use strict';

const readline = require('readline');
const combos = require('./combos');
const Queue = require('./queue');

/* eslint-disable no-control-regex */
const metaKeyCodeRe = /^(?:\x1b)([a-zA-Z0-9])$/;
const fnKeyRe = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/;
const keyName = {
  /* xterm/gnome ESC O letter */
  'OP': 'f1',
  'OQ': 'f2',
  'OR': 'f3',
  'OS': 'f4',
  /* xterm/rxvt ESC [ number ~ */
  '[11~': 'f1',
  '[12~': 'f2',
  '[13~': 'f3',
  '[14~': 'f4',
  /* from Cygwin and used in libuv */
  '[[A': 'f1',
  '[[B': 'f2',
  '[[C': 'f3',
  '[[D': 'f4',
  '[[E': 'f5',
  /* common */
  '[15~': 'f5',
  '[17~': 'f6',
  '[18~': 'f7',
  '[19~': 'f8',
  '[20~': 'f9',
  '[21~': 'f10',
  '[23~': 'f11',
  '[24~': 'f12',
  /* xterm ESC [ letter */
  '[A': 'up',
  '[B': 'down',
  '[C': 'right',
  '[D': 'left',
  '[E': 'clear',
  '[F': 'end',
  '[H': 'home',
  /* xterm/gnome ESC O letter */
  'OA': 'up',
  'OB': 'down',
  'OC': 'right',
  'OD': 'left',
  'OE': 'clear',
  'OF': 'end',
  'OH': 'home',
  /* xterm/rxvt ESC [ number ~ */
  '[1~': 'home',
  '[2~': 'insert',
  '[3~': 'delete',
  '[4~': 'end',
  '[5~': 'pageup',
  '[6~': 'pagedown',
  /* putty */
  '[[5~': 'pageup',
  '[[6~': 'pagedown',
  /* rxvt */
  '[7~': 'home',
  '[8~': 'end',
  /* rxvt keys with modifiers */
  '[a': 'up',
  '[b': 'down',
  '[c': 'right',
  '[d': 'left',
  '[e': 'clear',

  '[2$': 'insert',
  '[3$': 'delete',
  '[5$': 'pageup',
  '[6$': 'pagedown',
  '[7$': 'home',
  '[8$': 'end',

  'Oa': 'up',
  'Ob': 'down',
  'Oc': 'right',
  'Od': 'left',
  'Oe': 'clear',

  '[2^': 'insert',
  '[3^': 'delete',
  '[5^': 'pageup',
  '[6^': 'pagedown',
  '[7^': 'home',
  '[8^': 'end',
  /* misc. */
  '[Z': 'tab'
};

function isShiftKey(code) {
  return ['[a', '[b', '[c', '[d', '[e', '[2$', '[3$', '[5$', '[6$', '[7$', '[8$', '[Z'].includes(code);
}

function isCtrlKey(code) {
  return [ 'Oa', 'Ob', 'Oc', 'Od', 'Oe', '[2^', '[3^', '[5^', '[6^', '[7^', '[8^'].includes(code);
}

const keypress = (s = '', event = {}) => {
  let parts;
  let key = {
    name: event.name,
    ctrl: false,
    meta: false,
    shift: false,
    option: false,
    sequence: s,
    raw: s,
    ...event
  };

  if (Buffer.isBuffer(s)) {
    if (s[0] > 127 && s[1] === void 0) {
      s[0] -= 128;
      s = '\x1b' + String(s);
    } else {
      s = String(s);
    }
  } else if (s !== void 0 && typeof s !== 'string') {
    s = String(s);
  } else if (!s) {
    s = key.sequence || '';
  }

  key.sequence = key.sequence || s || key.name;

  if (s === '\r') {
    // carriage return
    key.raw = void 0;
    key.name = 'return';
  } else if (s === '\n') {
    // enter, should have been called linefeed
    key.name = 'enter';
  } else if (s === '\t') {
    // tab
    key.name = 'tab';
  } else if (s === '\b' || s === '\x7f' || s === '\x1b\x7f' || s === '\x1b\b') {
    // backspace or ctrl+h
    key.name = 'backspace';
    key.meta = s.charAt(0) === '\x1b';
  } else if (s === '\x1b' || s === '\x1b\x1b') {
    // escape key
    key.name = 'escape';
    key.meta = s.length === 2;
  } else if (s === ' ' || s === '\x1b ') {
    key.name = 'space';
    key.meta = s.length === 2;
  } else if (s <= '\x1a') {
    // ctrl+letter
    key.name = String.fromCharCode(s.charCodeAt(0) + 'a'.charCodeAt(0) - 1);
    key.ctrl = true;
  } else if (s.length === 1 && s >= '0' && s <= '9') {
    // number
    key.name = 'number';
  } else if (s.length === 1 && s >= 'a' && s <= 'z') {
    // lowercase letter
    key.name = s;
  } else if (s.length === 1 && s >= 'A' && s <= 'Z') {
    // shift+letter
    key.name = s.toLowerCase();
    key.shift = true;
  } else if ((parts = metaKeyCodeRe.exec(s))) {
    // meta+character key
    key.meta = true;
    key.shift = /^[A-Z]$/.test(parts[1]);
  } else if ((parts = fnKeyRe.exec(s))) {
    let segs = [...s];

    if (segs[0] === '\u001b' && segs[1] === '\u001b') {
      key.option = true;
    }

    // ansi escape sequence
    // reassemble the key code leaving out leading \x1b's,
    // the modifier key bitflag and any meaningless "1;" sequence
    let code = [parts[1], parts[2], parts[4], parts[6]].filter(Boolean).join('');
    let modifier = (parts[3] || parts[5] || 1) - 1;

    // Parse the key modifier
    key.ctrl = !!(modifier & 4);
    key.meta = !!(modifier & 10);
    key.shift = !!(modifier & 1);
    key.code = code;

    key.name = keyName[code];
    key.shift = isShiftKey(code) || key.shift;
    key.ctrl = isCtrlKey(code) || key.ctrl;
  }
  return key;
};

keypress.listen = (options = {}, onKeypress) => {
  let { stdin } = options;

  if (!stdin || (stdin !== process.stdin && !stdin.isTTY)) {
    throw new Error('Invalid stream passed');
  }

  let rl = readline.createInterface({ terminal: true, input: stdin });
  readline.emitKeypressEvents(stdin, rl);

  const queue = new Queue((buf, key) => onKeypress(buf, keypress(buf, key), rl));
  let isRaw = stdin.isRaw;

  if (stdin.isTTY) stdin.setRawMode(true);
  stdin.on('keypress', queue.enqueue);
  rl.resume();

  let off = () => {
    if (stdin.isTTY) stdin.setRawMode(isRaw);
    stdin.removeListener('keypress', queue.enqueue);
    queue.destroy();
    rl.pause();
    rl.close();
  };

  return off;
};

keypress.action = (buf, key, customActions) => {
  let obj = { ...combos, ...customActions };
  if (key.ctrl) {
    key.action = obj.ctrl[key.name];
    return key;
  }

  if (key.option && obj.option) {
    key.action = obj.option[key.name];
    return key;
  }

  if (key.shift) {
    key.action = obj.shift[key.name];
    return key;
  }

  key.action = obj.keys[key.name];
  return key;
};

module.exports = keypress;
