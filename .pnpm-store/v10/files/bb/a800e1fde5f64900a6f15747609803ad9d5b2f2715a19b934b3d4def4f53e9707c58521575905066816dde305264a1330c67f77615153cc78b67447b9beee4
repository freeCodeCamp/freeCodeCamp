"use strict";
exports.isFriday = isFriday;
var _index = require("./toDate.cjs");

/**
 * The {@link isFriday} function options.
 */

/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * const result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday(date, options) {
  return (0, _index.toDate)(date, options?.in).getDay() === 5;
}
