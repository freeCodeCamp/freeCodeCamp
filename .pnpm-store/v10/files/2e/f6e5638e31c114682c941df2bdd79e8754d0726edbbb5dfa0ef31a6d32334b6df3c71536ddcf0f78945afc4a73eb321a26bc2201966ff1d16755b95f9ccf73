"use strict";
exports.getQuarter = getQuarter;
var _index = require("./toDate.cjs");

/**
 * The {@link getQuarter} function options.
 */

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2));
 * //=> 3
 */
function getQuarter(date, options) {
  const _date = (0, _index.toDate)(date, options?.in);
  const quarter = Math.trunc(_date.getMonth() / 3) + 1;
  return quarter;
}
