"use strict";
exports.isToday = isToday;
var _index = require("./constructFrom.cjs");
var _index2 = require("./constructNow.cjs");
var _index3 = require("./isSameDay.cjs");

/**
 * The {@link isToday} function options.
 */

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date, options) {
  return (0, _index3.isSameDay)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}
