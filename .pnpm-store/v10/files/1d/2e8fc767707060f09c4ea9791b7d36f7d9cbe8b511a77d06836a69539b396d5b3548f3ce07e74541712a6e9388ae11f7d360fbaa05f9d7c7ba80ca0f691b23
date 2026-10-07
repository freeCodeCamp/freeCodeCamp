"use strict";
exports.subSeconds = subSeconds;
var _index = require("./addSeconds.cjs");

/**
 * The {@link subSeconds} function options.
 */

/**
 * Subtract the specified number of seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of seconds to be subtracted.
 * @param options - The options
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds(date, amount, options) {
  return (0, _index.addSeconds)(date, -amount, options);
}
