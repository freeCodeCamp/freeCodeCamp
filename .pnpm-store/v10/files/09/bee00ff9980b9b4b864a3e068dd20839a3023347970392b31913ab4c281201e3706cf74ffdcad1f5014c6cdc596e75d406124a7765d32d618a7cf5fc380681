"use strict";
exports.startOfDecade = startOfDecade;
var _index = require("./toDate.cjs");

/**
 * The {@link startOfDecade} options.
 */

/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a decade
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */
function startOfDecade(date, options) {
  // TODO: Switch to more technical definition in of decades that start with 1
  // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
  // change, so it can only be done in 4.0.
  const _date = (0, _index.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const decade = Math.floor(year / 10) * 10;
  _date.setFullYear(decade, 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
