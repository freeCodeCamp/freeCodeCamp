"use strict";
exports.previousWednesday = previousWednesday;
var _index = require("./previousDay.cjs");

/**
 * The {@link previousWednesday} function options.
 */

/**
 * @name previousWednesday
 * @category Weekday Helpers
 * @summary When is the previous Wednesday?
 *
 * @description
 * When is the previous Wednesday?
 *
 * @typeParam DateType - The Date type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Wednesday
 *
 * @example
 * // When is the previous Wednesday before Jun, 18, 2021?
 * const result = previousWednesday(new Date(2021, 5, 18))
 * //=> Wed June 16 2021 00:00:00
 */
function previousWednesday(date, options) {
  return (0, _index.previousDay)(date, 3, options);
}
