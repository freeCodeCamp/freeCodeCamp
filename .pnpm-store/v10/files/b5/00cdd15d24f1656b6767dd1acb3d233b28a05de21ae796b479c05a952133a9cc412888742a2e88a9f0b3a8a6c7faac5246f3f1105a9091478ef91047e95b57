"use strict";
exports.getISOWeek = getISOWeek;
var _index = require("./constants.cjs");
var _index2 = require("./startOfISOWeek.cjs");
var _index3 = require("./startOfISOWeekYear.cjs");
var _index4 = require("./toDate.cjs");

/**
 * The {@link getISOWeek} function options.
 */

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date, options) {
  const _date = (0, _index4.toDate)(date, options?.in);
  const diff =
    +(0, _index2.startOfISOWeek)(_date) -
    +(0, _index3.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _index.millisecondsInWeek) + 1;
}
