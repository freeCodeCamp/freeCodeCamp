"use strict";
exports.isSameHour = isSameHour;
var _index = require("./_lib/normalizeDates.cjs");
var _index2 = require("./startOfHour.cjs");

/**
 * The {@link isSameHour} function options.
 */

/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour (and same day)?
 *
 * @description
 * Are the given dates in the same hour (and same day)?
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same hour (and same day)
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 5 September 06:00:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 5, 6, 0))
 * //=> false
 */
function isSameHour(dateLeft, dateRight, options) {
  const [dateLeft_, dateRight_] = (0, _index.normalizeDates)(
    options?.in,
    dateLeft,
    dateRight,
  );
  return (
    +(0, _index2.startOfHour)(dateLeft_) ===
    +(0, _index2.startOfHour)(dateRight_)
  );
}
