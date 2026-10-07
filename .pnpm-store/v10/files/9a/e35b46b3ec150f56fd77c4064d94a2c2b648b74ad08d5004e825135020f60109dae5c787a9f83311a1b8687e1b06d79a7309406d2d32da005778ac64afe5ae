"use strict";
exports.getUnixTime = getUnixTime;
var _index = require("./toDate.cjs");

/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @param date - The given date
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */
function getUnixTime(date) {
  return Math.trunc(+(0, _index.toDate)(date) / 1000);
}
