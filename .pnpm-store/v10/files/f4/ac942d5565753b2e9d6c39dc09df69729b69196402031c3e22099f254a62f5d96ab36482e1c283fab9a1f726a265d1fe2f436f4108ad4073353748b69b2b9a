'use strict';

const isWindows = process.platform === 'win32';
const colors = require('ansi-colors');
const utils = require('./utils');

const symbols = {
  ...colors.symbols,
  upDownDoubleArrow: '⇕',
  upDownDoubleArrow2: '⬍',
  upDownArrow: '↕',
  asterisk: '*',
  asterism: '⁂',
  bulletWhite: '◦',
  electricArrow: '⌁',
  ellipsisLarge: '⋯',
  ellipsisSmall: '…',
  fullBlock: '█',
  identicalTo: '≡',
  indicator: colors.symbols.check,
  leftAngle: '‹',
  mark: '※',
  minus: '−',
  multiplication: '×',
  obelus: '÷',
  percent: '%',
  pilcrow: '¶',
  pilcrow2: '❡',
  pencilUpRight: '✐',
  pencilDownRight: '✎',
  pencilRight: '✏',
  plus: '+',
  plusMinus: '±',
  pointRight: '☞',
  rightAngle: '›',
  section: '§',
  hexagon: { off: '⬡', on: '⬢', disabled: '⬢' },
  ballot: { on: '☑', off: '☐', disabled: '☒' },
  stars: { on: '★', off: '☆', disabled: '☆' },
  folder: { on: '▼', off: '▶', disabled: '▶' },
  prefix: {
    pending: colors.symbols.question,
    submitted: colors.symbols.check,
    cancelled: colors.symbols.cross
  },
  separator: {
    pending: colors.symbols.pointerSmall,
    submitted: colors.symbols.middot,
    cancelled: colors.symbols.middot
  },
  radio: {
    off: isWindows ? '( )' : '◯',
    on: isWindows ? '(*)' : '◉',
    disabled: isWindows ? '(|)' : 'Ⓘ'
  },
  numbers: ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫', '⑬', '⑭', '⑮', '⑯', '⑰', '⑱', '⑲', '⑳', '㉑', '㉒', '㉓', '㉔', '㉕', '㉖', '㉗', '㉘', '㉙', '㉚', '㉛', '㉜', '㉝', '㉞', '㉟', '㊱', '㊲', '㊳', '㊴', '㊵', '㊶', '㊷', '㊸', '㊹', '㊺', '㊻', '㊼', '㊽', '㊾', '㊿']
};

symbols.merge = options => {
  let result = utils.merge({}, colors.symbols, symbols, options.symbols);
  delete result.merge;
  return result;
};

module.exports = symbols;

