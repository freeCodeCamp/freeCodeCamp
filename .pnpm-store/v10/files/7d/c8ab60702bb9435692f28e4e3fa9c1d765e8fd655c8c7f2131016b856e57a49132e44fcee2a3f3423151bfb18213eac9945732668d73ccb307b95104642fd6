"use strict";
exports.isSunday = isSunday;
var _index = require("./toDate.cjs");

/**
 * The {@link isSunday} function options.
 */

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday(date, options) {
  return (0, _index.toDate)(date, options?.in).getDay() === 0;
}
