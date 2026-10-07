"use strict";
exports.isSameQuarter = isSameQuarter;
var _index = require("./_lib/normalizeDates.cjs");
var _index2 = require("./startOfQuarter.cjs");

/**
 * The {@link isSameQuarter} function options.
 */

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same quarter (and year)
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameQuarter(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    +(0, _index2.startOfQuarter)(dateLeft_) ===
    +(0, _index2.startOfQuarter)(dateRight_)
  );
}
