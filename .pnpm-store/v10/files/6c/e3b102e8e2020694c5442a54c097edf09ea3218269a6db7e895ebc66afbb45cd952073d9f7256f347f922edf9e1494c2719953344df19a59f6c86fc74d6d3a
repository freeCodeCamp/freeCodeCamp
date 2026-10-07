'use strict';

/**
 * @param {string} input
 * @return {[number, number, number][]}
 */
module.exports = function commentParser(input) {
  /** @type [number, number, number][] */
  const tokens = [];
  const length = input.length;
  let pos = 0;
  let next;

  while (pos < length) {
    next = input.indexOf('/*', pos);

    if (~next) {
      tokens.push([0, pos, next]);
      pos = next;

      next = input.indexOf('*/', pos + 2);
      tokens.push([1, pos + 2, next]);
      pos = next + 2;
    } else {
      tokens.push([0, pos, length]);
      pos = length;
    }
  }

  return tokens;
};
