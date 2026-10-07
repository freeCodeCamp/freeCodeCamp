import isSameYear from "../isSameYear/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
export default function isThisYear(dirtyDate) {
  requiredArgs(1, arguments);
  return isSameYear(dirtyDate, Date.now());
}