"use strict";
exports.differenceInCalendarDays = differenceInCalendarDays;
var _index = require("./_lib/getTimezoneOffsetInMilliseconds.cjs");
var _index2 = require("./_lib/normalizeDates.cjs");
var _index3 = require("./constants.cjs");
var _index4 = require("./startOfDay.cjs");

/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index2.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = (0, _index4.startOfDay)(laterDate_);
  const earlierStartOfDay = (0, _index4.startOfDay)(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay -
    (0, _index.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay -
    (0, _index.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(
    (laterTimestamp - earlierTimestamp) / _index3.millisecondsInDay,
  );
}
