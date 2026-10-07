import requiredArgs from "../_lib/requiredArgs/index.js";
import { minutesInHour } from "../constants/index.js";
/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param {number} minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */
export default function minutesToHours(minutes) {
  requiredArgs(1, arguments);
  var hours = minutes / minutesInHour;
  return Math.floor(hours);
}