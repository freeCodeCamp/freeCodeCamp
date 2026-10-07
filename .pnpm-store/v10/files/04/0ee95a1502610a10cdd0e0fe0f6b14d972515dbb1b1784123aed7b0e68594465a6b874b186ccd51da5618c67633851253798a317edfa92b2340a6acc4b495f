'use strict';
/**
 * Can unquote attribute detection from mothereff.in
 * Copyright Mathias Bynens <https://mathiasbynens.be/>
 * https://github.com/mathiasbynens/mothereff.in
 */
const escapes = /\\([0-9A-Fa-f]{1,6})[ \t\n\f\r]?/g;
const range =
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/;

/**
 * @param {string} value
 * @return {boolean}
 */
module.exports = function canUnquote(value) {
  if (value === '-' || value === '') {
    return false;
  }

  value = value.replace(escapes, 'a').replace(/\\./g, 'a');

  return !(range.test(value) || /^(?:-?\d|--)/.test(value));
};
