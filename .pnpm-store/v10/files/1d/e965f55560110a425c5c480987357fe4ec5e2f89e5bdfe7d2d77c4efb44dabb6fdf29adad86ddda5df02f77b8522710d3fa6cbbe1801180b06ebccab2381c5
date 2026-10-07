import requiredArgs from "../_lib/requiredArgs/index.js";
import { monthsInQuarter } from "../constants/index.js";
/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param {number} months - number of months to be converted.
 *
 * @returns {number} the number of months converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */
export default function monthsToQuarters(months) {
  requiredArgs(1, arguments);
  var quarters = months / monthsInQuarter;
  return Math.floor(quarters);
}