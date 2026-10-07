"use strict";
exports.isTomorrow = isTomorrow;
var _index = require("./addDays.cjs");
var _index2 = require("./constructNow.cjs");
var _index3 = require("./isSameDay.cjs");

/**
 * The {@link isTomorrow} function options.
 */

/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(date, options) {
  return (0, _index3.isSameDay)(
    date,
    (0, _index.addDays)((0, _index2.constructNow)(options?.in || date), 1),
    options,
  );
}
