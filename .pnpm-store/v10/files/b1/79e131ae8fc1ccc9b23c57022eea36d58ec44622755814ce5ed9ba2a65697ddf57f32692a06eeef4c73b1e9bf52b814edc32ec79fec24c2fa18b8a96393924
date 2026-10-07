"use strict";
exports.differenceInQuarters = differenceInQuarters;
var _index = require("./_lib/getRoundingMethod.cjs");
var _index2 = require("./differenceInMonths.cjs");

/**
 * The {@link differenceInQuarters} function options.
 */

/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */
function differenceInQuarters(laterDate, earlierDate, options) {
  const diff =
    (0, _index2.differenceInMonths)(laterDate, earlierDate, options) / 3;
  return (0, _index.getRoundingMethod)(options?.roundingMethod)(diff);
}
