"use strict";
exports.isThisMinute = isThisMinute;
var _index = require("./constructNow.cjs");
var _index2 = require("./isSameMinute.cjs");

/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * const result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */

function isThisMinute(date) {
  return (0, _index2.isSameMinute)(date, (0, _index.constructNow)(date));
}
