"use strict";
exports.isLeapYear = isLeapYear;
var _index = require("./toDate.cjs");

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear(date, options) {
  const _date = (0, _index.toDate)(date, options?.in);
  const year = _date.getFullYear();
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
