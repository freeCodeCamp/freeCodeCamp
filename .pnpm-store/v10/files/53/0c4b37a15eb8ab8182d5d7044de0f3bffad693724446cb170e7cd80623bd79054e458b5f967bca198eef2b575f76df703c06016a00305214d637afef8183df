"use strict";
exports.differenceInCalendarQuarters = differenceInCalendarQuarters;
var _index = require("./_lib/normalizeDates.cjs");
var _index2 = require("./getQuarter.cjs");

/**
 * The {@link differenceInCalendarQuarters} function options.
 */

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const quartersDiff =
    (0, _index2.getQuarter)(laterDate_) - (0, _index2.getQuarter)(earlierDate_);

  return yearsDiff * 4 + quartersDiff;
}
