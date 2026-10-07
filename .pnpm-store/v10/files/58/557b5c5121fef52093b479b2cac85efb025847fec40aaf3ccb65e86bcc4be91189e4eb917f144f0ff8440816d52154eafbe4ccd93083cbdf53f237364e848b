import toDate from "../toDate/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
export default function isTuesday(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getDay() === 2;
}