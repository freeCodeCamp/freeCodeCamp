"use strict";
exports.isFirstDayOfMonth = isFirstDayOfMonth;
var _index = require("./toDate.cjs");

/**
 * The {@link isFirstDayOfMonth} function options.
 */

/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth(date, options) {
  return (0, _index.toDate)(date, options?.in).getDate() === 1;
}
