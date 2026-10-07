import toDate from "../toDate/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
export default function isThursday(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getDay() === 4;
}