"use strict";
exports.isThisYear = isThisYear;
var _index = require("./constructFrom.cjs");
var _index2 = require("./constructNow.cjs");
var _index3 = require("./isSameYear.cjs");

/**
 * The {@link isThisYear} function options.
 */

/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear(date, options) {
  return (0, _index3.isSameYear)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}
