"use strict";
exports.isSameISOWeek = isSameISOWeek;
var _index = require("./isSameWeek.cjs");

/**
 * The {@link isSameISOWeek} function options.
 */

/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week (and year)
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */
function isSameISOWeek(laterDate, earlierDate, options) {
  return (0, _index.isSameWeek)(laterDate, earlierDate, {
    ...options,
    weekStartsOn: 1,
  });
}
