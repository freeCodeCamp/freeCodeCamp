"use strict";
exports.eachWeekendOfMonth = eachWeekendOfMonth;
var _index = require("./eachWeekendOfInterval.cjs");
var _index2 = require("./endOfMonth.cjs");
var _index3 = require("./startOfMonth.cjs");

/**
 * The {@link eachWeekendOfMonth} function options.
 */

/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The given month
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * const result = eachWeekendOfMonth(new Date(2022, 1, 1))
 * //=> [
 * //   Sat Feb 05 2022 00:00:00,
 * //   Sun Feb 06 2022 00:00:00,
 * //   Sat Feb 12 2022 00:00:00,
 * //   Sun Feb 13 2022 00:00:00,
 * //   Sat Feb 19 2022 00:00:00,
 * //   Sun Feb 20 2022 00:00:00,
 * //   Sat Feb 26 2022 00:00:00,
 * //   Sun Feb 27 2022 00:00:00
 * // ]
 */
function eachWeekendOfMonth(date, options) {
  const start = (0, _index3.startOfMonth)(date, options);
  const end = (0, _index2.endOfMonth)(date, options);
  return (0, _index.eachWeekendOfInterval)({ start, end }, options);
}
