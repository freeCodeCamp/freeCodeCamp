import toDate from "../toDate/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
export default function isSaturday(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getDay() === 6;
}