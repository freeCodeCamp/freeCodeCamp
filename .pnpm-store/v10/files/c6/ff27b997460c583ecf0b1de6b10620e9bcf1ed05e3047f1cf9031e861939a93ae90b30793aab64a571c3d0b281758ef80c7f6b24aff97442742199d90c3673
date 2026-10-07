"use strict";
exports.differenceInCalendarWeeks = differenceInCalendarWeeks;
var _index = require("./_lib/getTimezoneOffsetInMilliseconds.cjs");
var _index2 = require("./_lib/normalizeDates.cjs");
var _index3 = require("./constants.cjs");
var _index4 = require("./startOfWeek.cjs");

/**
 * The {@link differenceInCalendarWeeks} function options.
 */

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
function differenceInCalendarWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index2.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfWeek = (0, _index4.startOfWeek)(laterDate_, options);
  const earlierStartOfWeek = (0, _index4.startOfWeek)(earlierDate_, options);

  const laterTimestamp =
    +laterStartOfWeek -
    (0, _index.getTimezoneOffsetInMilliseconds)(laterStartOfWeek);
  const earlierTimestamp =
    +earlierStartOfWeek -
    (0, _index.getTimezoneOffsetInMilliseconds)(earlierStartOfWeek);

  return Math.round(
    (laterTimestamp - earlierTimestamp) / _index3.millisecondsInWeek,
  );
}
