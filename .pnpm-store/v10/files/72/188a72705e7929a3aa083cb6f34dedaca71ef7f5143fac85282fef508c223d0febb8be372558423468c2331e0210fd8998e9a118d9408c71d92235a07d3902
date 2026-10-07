"use strict";
exports.getDaysInYear = getDaysInYear;
var _index = require("./isLeapYear.cjs");
var _index2 = require("./toDate.cjs");

/**
 * The {@link getDaysInYear} function options.
 */

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear(date, options) {
  const _date = (0, _index2.toDate)(date, options?.in);
  if (Number.isNaN(+_date)) return NaN;
  return (0, _index.isLeapYear)(_date) ? 366 : 365;
}
