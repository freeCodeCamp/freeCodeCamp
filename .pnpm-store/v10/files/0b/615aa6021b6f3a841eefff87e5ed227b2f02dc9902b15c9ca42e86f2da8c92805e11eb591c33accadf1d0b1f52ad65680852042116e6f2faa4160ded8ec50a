'use strict';
const parseWsc = require('./parseWsc.js');
const minifyTrbl = require('./minifyTrbl.js');
const { isValidWsc } = require('./validateWsc.js');

const defaults = ['medium', 'none', 'currentcolor'];

/** @type {(v: string) => string} */
module.exports = (v) => {
  const values = parseWsc(v);

  if (!isValidWsc(values)) {
    return minifyTrbl(v);
  }

  const value = [...values, '']
    .reduceRight((prev, cur, i, arr) => {
      if (
        cur === undefined ||
        (cur.toLowerCase() === defaults[i] &&
          (!i || (arr[i - 1] || '').toLowerCase() !== cur.toLowerCase()))
      ) {
        return prev;
      }

      return cur + ' ' + prev;
    })
    .trim();

  return minifyTrbl(value || 'none');
};
