'use strict';

const strip = require('./strip');

/**
 * @param {string} msg
 * @param {number} perLine
 */
module.exports = function (msg, perLine) {
  let lines = String(strip(msg) || '').split(/\r?\n/);

  if (!perLine) return lines.length;
  return lines.map(l => Math.ceil(l.length / perLine))
      .reduce((a, b) => a + b);
};
