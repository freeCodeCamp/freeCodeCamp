"use strict";
exports.differenceInCalendarISOWeeks = differenceInCalendarISOWeeks;
var _index = require("./_lib/getTimezoneOffsetInMilliseconds.cjs");
var _index2 = require("./_lib/normalizeDates.cjs");
var _index3 = require("./constants.cjs");
var _index4 = require("./startOfISOWeek.cjs");

/**
 * The {@link differenceInCalendarISOWeeks} function options.
 */

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6),
 * );
 * //=> 3
 */
function differenceInCalendarISOWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index2.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );

  const startOfISOWeekLeft = (0, _index4.startOfISOWeek)(laterDate_);
  const startOfISOWeekRight = (0, _index4.startOfISOWeek)(earlierDate_);

  const timestampLeft =
    +startOfISOWeekLeft -
    (0, _index.getTimezoneOffsetInMilliseconds)(startOfISOWeekLeft);
  const timestampRight =
    +startOfISOWeekRight -
    (0, _index.getTimezoneOffsetInMilliseconds)(startOfISOWeekRight);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(
    (timestampLeft - timestampRight) / _index3.millisecondsInWeek,
  );
}
