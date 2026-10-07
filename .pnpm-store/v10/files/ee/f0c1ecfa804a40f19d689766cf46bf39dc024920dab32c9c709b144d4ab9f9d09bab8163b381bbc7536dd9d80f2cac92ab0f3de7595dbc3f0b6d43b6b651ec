'use strict';

const ESC = '\x1B';
const CSI = `${ESC}[`;
const beep = '\u0007';

const cursor = {
  to(x, y) {
    if (!y) return `${CSI}${x + 1}G`;
    return `${CSI}${y + 1};${x + 1}H`;
  },
  move(x, y) {
    let ret = '';

    if (x < 0) ret += `${CSI}${-x}D`;
    else if (x > 0) ret += `${CSI}${x}C`;

    if (y < 0) ret += `${CSI}${-y}A`;
    else if (y > 0) ret += `${CSI}${y}B`;

    return ret;
  },
  up: (count = 1) => `${CSI}${count}A`,
  down: (count = 1) => `${CSI}${count}B`,
  forward: (count = 1) => `${CSI}${count}C`,
  backward: (count = 1) => `${CSI}${count}D`,
  nextLine: (count = 1) => `${CSI}E`.repeat(count),
  prevLine: (count = 1) => `${CSI}F`.repeat(count),
  left: `${CSI}G`,
  hide: `${CSI}?25l`,
  show: `${CSI}?25h`,
  save: `${ESC}7`,
  restore: `${ESC}8`
}

const scroll = {
  up: (count = 1) => `${CSI}S`.repeat(count),
  down: (count = 1) => `${CSI}T`.repeat(count)
}

const erase = {
  screen: `${CSI}2J`,
  up: (count = 1) => `${CSI}1J`.repeat(count),
  down: (count = 1) => `${CSI}J`.repeat(count),
  line: `${CSI}2K`,
  lineEnd: `${CSI}K`,
  lineStart: `${CSI}1K`,
  lines(count) {
    let clear = '';
    for (let i = 0; i < count; i++)
      clear += this.line + (i < count - 1 ? cursor.up() : '');
    if (count)
      clear += cursor.left;
    return clear;
  }
}

module.exports = { cursor, scroll, erase, beep };
