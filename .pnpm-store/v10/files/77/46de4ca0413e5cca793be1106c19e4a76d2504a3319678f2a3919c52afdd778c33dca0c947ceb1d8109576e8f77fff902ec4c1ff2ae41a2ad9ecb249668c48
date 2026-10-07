"use strict";
exports.getDaysInMonth = getDaysInMonth;
var _index = require("./constructFrom.cjs");
var _index2 = require("./toDate.cjs");

/**
 * The {@link getDaysInMonth} function options.
 */

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(date, options) {
  const _date = (0, _index2.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = (0, _index.constructFrom)(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
