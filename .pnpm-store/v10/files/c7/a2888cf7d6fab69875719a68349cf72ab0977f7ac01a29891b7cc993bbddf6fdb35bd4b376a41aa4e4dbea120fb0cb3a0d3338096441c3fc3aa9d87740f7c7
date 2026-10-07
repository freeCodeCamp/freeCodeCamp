import isSameDay from "../isSameDay/index.js";
import subDays from "../subDays/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
export default function isYesterday(dirtyDate) {
  requiredArgs(1, arguments);
  return isSameDay(dirtyDate, subDays(Date.now(), 1));
}