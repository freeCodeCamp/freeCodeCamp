'use strict';
const parseTrbl = require('./parseTrbl.js');

/** @type {(v: string | [string, string, string, string]) => string} */
module.exports = (v) => {
  const value = parseTrbl(v);

  if (value[3] === value[1]) {
    value.pop();

    if (value[2] === value[0]) {
      value.pop();

      if (value[0] === value[1]) {
        value.pop();
      }
    }
  }

  return value.join(' ');
};
