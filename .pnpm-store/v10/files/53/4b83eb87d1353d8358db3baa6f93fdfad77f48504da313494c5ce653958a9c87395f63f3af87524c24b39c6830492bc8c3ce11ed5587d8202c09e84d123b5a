'use strict';
const { unit } = require('postcss-value-parser');
const { colord, extend } = require('colord');
const namesPlugin = require('colord/plugins/names');

extend([/** @type {any} */ (namesPlugin)]);

/* Code derived from https://github.com/pigcan/is-color-stop */

const lengthUnits = new Set([
  'PX',
  'IN',
  'CM',
  'MM',
  'EM',
  'REM',
  'POINTS',
  'PC',
  'EX',
  'CH',
  'VW',
  'VH',
  'VMIN',
  'VMAX',
  '%',
]);

/**
 * @param {string} input
 * @return {boolean}
 */
function isCSSLengthUnit(input) {
  return lengthUnits.has(input.toUpperCase());
}
/**
 * @param {string|undefined} str
 * @return {boolean}
 */
function isStop(str) {
  if (str) {
    let stop = false;
    const node = unit(str);
    if (node) {
      const number = Number(node.number);
      if (number === 0 || (!isNaN(number) && isCSSLengthUnit(node.unit))) {
        stop = true;
      }
    } else {
      stop = /^calc\(\S+\)$/g.test(str);
    }
    return stop;
  }
  return true;
}
/**
 * @param {string} color
 * @param {string} [stop]
 * @return {boolean}
 */
module.exports = function isColorStop(color, stop) {
  return colord(color).isValid() && isStop(stop);
};
