import requiredArgs from "../_lib/requiredArgs/index.js";
import getDay from "../getDay/index.js";
import subDays from "../subDays/index.js";
/**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {number} day - day of the week
 * @returns {Date} - the date is the previous day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * const result = previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * const result = previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */
export default function previousDay(date, day) {
  requiredArgs(2, arguments);
  var delta = getDay(date) - day;
  if (delta <= 0) delta += 7;
  return subDays(date, delta);
}