"use strict";
exports.differenceInSeconds = differenceInSeconds;
var _index = require("./_lib/getRoundingMethod.cjs");
var _index2 = require("./differenceInMilliseconds.cjs");

/**
 * The {@link differenceInSeconds} function options.
 */

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff =
    (0, _index2.differenceInMilliseconds)(laterDate, earlierDate) / 1000;
  return (0, _index.getRoundingMethod)(options?.roundingMethod)(diff);
}
