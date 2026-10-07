import requiredArgs from "../_lib/requiredArgs/index.js";
import { secondsInMinute } from "../constants/index.js";
/**
 * @name secondsToMinutes
 * @category Conversion Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert a number of seconds to a full number of minutes.
 *
 * @param {number} seconds - number of seconds to be converted
 *
 * @returns {number} the number of seconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToMinutes(119)
 * //=> 1
 */
export default function secondsToMinutes(seconds) {
  requiredArgs(1, arguments);
  var minutes = seconds / secondsInMinute;
  return Math.floor(minutes);
}