import requiredArgs from "../_lib/requiredArgs/index.js";
import { minutesInHour } from "../constants/index.js";
/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */
export default function hoursToMinutes(hours) {
  requiredArgs(1, arguments);
  return Math.floor(hours * minutesInHour);
}