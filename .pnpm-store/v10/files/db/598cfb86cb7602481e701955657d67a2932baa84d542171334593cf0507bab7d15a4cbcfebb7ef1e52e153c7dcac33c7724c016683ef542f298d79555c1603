"use strict";
exports.differenceInHours = differenceInHours;
var _index = require("./_lib/getRoundingMethod.cjs");
var _index2 = require("./_lib/normalizeDates.cjs");
var _index3 = require("./constants.cjs");

/**
 * The {@link differenceInHours} function options.
 */

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index2.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  const diff = (+laterDate_ - +earlierDate_) / _index3.millisecondsInHour;
  return (0, _index.getRoundingMethod)(options?.roundingMethod)(diff);
}
