"use strict";
exports.isThisISOWeek = isThisISOWeek;
var _index = require("./constructFrom.cjs");
var _index2 = require("./constructNow.cjs");
var _index3 = require("./isSameISOWeek.cjs");

/**
 * The {@link isThisISOWeek} function options.
 */

/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek(date, options) {
  return (0, _index3.isSameISOWeek)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}
