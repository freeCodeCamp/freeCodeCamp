"use strict";
exports.nextDay = nextDay;
var _index = require("./addDays.cjs");
var _index2 = require("./getDay.cjs");

/**
 * The {@link nextDay} function options.
 */

/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to check
 * @param day - Day of the week
 * @param options - An object with options
 *
 * @returns The date is the next day of the week
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */
function nextDay(date, day, options) {
  let delta = day - (0, _index2.getDay)(date, options);
  if (delta <= 0) delta += 7;

  return (0, _index.addDays)(date, delta, options);
}
