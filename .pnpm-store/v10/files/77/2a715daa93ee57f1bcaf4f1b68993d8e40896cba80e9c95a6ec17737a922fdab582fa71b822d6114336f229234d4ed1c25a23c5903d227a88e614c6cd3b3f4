import requiredArgs from "../_lib/requiredArgs/index.js";
import { secondsInHour } from "../constants/index.js";
/**
 * @name secondsToHours
 * @category Conversion Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert a number of seconds to a full number of hours.
 *
 * @param {number} seconds - number of seconds to be converted
 *
 * @returns {number} the number of seconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 7200 seconds into hours
 * const result = secondsToHours(7200)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToHours(7199)
 * //=> 1
 */
export default function secondsToHours(seconds) {
  requiredArgs(1, arguments);
  var hours = seconds / secondsInHour;
  return Math.floor(hours);
}