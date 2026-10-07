"use strict";
exports.nextFriday = nextFriday;
var _index = require("./nextDay.cjs");

/**
 * The {@link nextFriday} function options.
 */

/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Friday
 *
 * @example
 * // When is the next Friday after Mar, 22, 2020?
 * const result = nextFriday(new Date(2020, 2, 22))
 * //=> Fri Mar 27 2020 00:00:00
 */
function nextFriday(date, options) {
  return (0, _index.nextDay)(date, 5, options);
}
