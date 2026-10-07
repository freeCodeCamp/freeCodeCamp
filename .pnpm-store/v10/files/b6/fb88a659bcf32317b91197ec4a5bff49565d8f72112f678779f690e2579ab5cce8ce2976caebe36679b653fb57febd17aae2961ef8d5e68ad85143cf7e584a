"use strict";
exports.isThisMonth = isThisMonth;
var _index = require("./constructFrom.cjs");
var _index2 = require("./constructNow.cjs");
var _index3 = require("./isSameMonth.cjs");

/**
 * The {@link isThisMonth} function options.
 */

/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth(date, options) {
  return (0, _index3.isSameMonth)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}
