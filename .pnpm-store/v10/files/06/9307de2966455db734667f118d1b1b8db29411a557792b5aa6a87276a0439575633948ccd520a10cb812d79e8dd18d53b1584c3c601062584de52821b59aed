import getTime from "../getTime/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */
export default function getUnixTime(dirtyDate) {
  requiredArgs(1, arguments);
  return Math.floor(getTime(dirtyDate) / 1000);
}