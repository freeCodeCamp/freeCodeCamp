import toDate from "../toDate/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
export default function isFirstDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getDate() === 1;
}