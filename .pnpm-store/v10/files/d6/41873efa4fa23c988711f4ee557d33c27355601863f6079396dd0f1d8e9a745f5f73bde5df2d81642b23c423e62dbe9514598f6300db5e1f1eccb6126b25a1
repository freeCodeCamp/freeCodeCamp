"use strict";
exports.getWeeksInMonth = getWeeksInMonth;
var _index = require("./differenceInCalendarWeeks.cjs");
var _index2 = require("./lastDayOfMonth.cjs");
var _index3 = require("./startOfMonth.cjs");
var _index4 = require("./toDate.cjs");

/**
 * The {@link getWeeksInMonth} function options.
 */

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
function getWeeksInMonth(date, options) {
  const contextDate = (0, _index4.toDate)(date, options?.in);
  return (
    (0, _index.differenceInCalendarWeeks)(
      (0, _index2.lastDayOfMonth)(contextDate, options),
      (0, _index3.startOfMonth)(contextDate, options),
      options,
    ) + 1
  );
}
