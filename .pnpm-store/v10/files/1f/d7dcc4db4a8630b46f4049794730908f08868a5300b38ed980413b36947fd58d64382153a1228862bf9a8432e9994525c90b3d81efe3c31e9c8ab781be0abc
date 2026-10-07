'use strict';
const { list } = require('postcss');
const { isWidth, isStyle, isColor } = require('./validateWsc.js');

const none = /^\s*(none|medium)(\s+none(\s+(none|currentcolor))?)?\s*$/i;

/* Approximate https://drafts.csswg.org/css-values-4/#typedef-dashed-ident */
// eslint-disable-next-line no-control-regex
const varRE = /--(\w|-|[^\x00-\x7F])+/g;
/** @type {(v: string) => string} */
const toLower = (v) => {
  let match;
  let lastIndex = 0;
  let result = '';
  varRE.lastIndex = 0;
  while ((match = varRE.exec(v)) !== null) {
    if (match.index > lastIndex) {
      result += v.substring(lastIndex, match.index).toLowerCase();
    }
    result += match[0];
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < v.length) {
    result += v.substring(lastIndex).toLowerCase();
  }
  if (result === '') {
    return v;
  }
  return result;
};

/**
 * @param {string} value
 * @return {[string, string, string]}
 */
module.exports = function parseWsc(value) {
  if (none.test(value)) {
    return ['medium', 'none', 'currentcolor'];
  }

  let width, style, color;

  const values = list.space(value);
  if (
    values.length > 1 &&
    isStyle(values[1]) &&
    values[0].toLowerCase() === 'none'
  ) {
    values.unshift();
    width = '0';
  }

  /** @type {string[]} */
  const unknown = [];

  values.forEach((v) => {
    if (isStyle(v)) {
      style = toLower(v);
    } else if (isWidth(v)) {
      width = toLower(v);
    } else if (isColor(v)) {
      color = toLower(v);
    } else {
      unknown.push(v);
    }
  });

  if (unknown.length) {
    if (!width && style && color) {
      width = unknown.pop();
    }

    if (width && !style && color) {
      style = unknown.pop();
    }

    if (width && style && !color) {
      color = unknown.pop();
    }
  }

  return /** @type {[string, string, string]} */ ([width, style, color]);
};
