"use strict";
exports.isSaturday = isSaturday;
var _index = require("./toDate.cjs");

/**
 * The {@link isSaturday} function options.
 */

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday(date, options) {
  return (0, _index.toDate)(date, options?.in).getDay() === 6;
}
