import requiredArgs from "../_lib/requiredArgs/index.js";
import { millisecondsInHour } from "../constants/index.js";
/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a full number of milliseconds.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted to milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to milliseconds:
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */
export default function hoursToMilliseconds(hours) {
  requiredArgs(1, arguments);
  return Math.floor(hours * millisecondsInHour);
}