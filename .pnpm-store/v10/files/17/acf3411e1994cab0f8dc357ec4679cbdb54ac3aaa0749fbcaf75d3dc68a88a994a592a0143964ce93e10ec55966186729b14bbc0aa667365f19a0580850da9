"use strict";
exports.differenceInCalendarYears = differenceInCalendarYears;
var _index = require("./_lib/normalizeDates.cjs");

/**
 * The {@link differenceInCalendarYears} function options.
 */

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * );
 * //=> 2
 */
function differenceInCalendarYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}
