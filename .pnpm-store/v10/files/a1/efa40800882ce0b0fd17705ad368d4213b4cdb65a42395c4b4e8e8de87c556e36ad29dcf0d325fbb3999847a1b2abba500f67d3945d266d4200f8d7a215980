"use strict";
exports.isLastDayOfMonth = isLastDayOfMonth;
var _index = require("./endOfDay.cjs");
var _index2 = require("./endOfMonth.cjs");
var _index3 = require("./toDate.cjs");

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(date, options) {
  const _date = (0, _index3.toDate)(date, options?.in);
  return (
    +(0, _index.endOfDay)(_date, options) ===
    +(0, _index2.endOfMonth)(_date, options)
  );
}
