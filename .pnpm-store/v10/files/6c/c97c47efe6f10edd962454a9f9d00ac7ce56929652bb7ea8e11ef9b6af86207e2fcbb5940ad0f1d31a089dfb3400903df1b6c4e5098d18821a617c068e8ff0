import requiredArgs from "../_lib/requiredArgs/index.js";
import { daysInWeek } from "../constants/index.js";
/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param {number} weeks - number of weeks to be converted
 *
 * @returns {number} the number of weeks converted in days
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */
export default function weeksToDays(weeks) {
  requiredArgs(1, arguments);
  return Math.floor(weeks * daysInWeek);
}