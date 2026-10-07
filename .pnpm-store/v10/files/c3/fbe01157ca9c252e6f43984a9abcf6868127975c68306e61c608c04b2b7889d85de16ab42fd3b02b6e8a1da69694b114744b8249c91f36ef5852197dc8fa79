"use strict";
exports.isYesterday = isYesterday;
var _index = require("./constructFrom.cjs");
var _index2 = require("./constructNow.cjs");
var _index3 = require("./isSameDay.cjs");
var _index4 = require("./subDays.cjs");

/**
 * The {@link isYesterday} function options.
 */

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday(date, options) {
  return (0, _index3.isSameDay)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index4.subDays)((0, _index2.constructNow)(options?.in || date), 1),
  );
}
