import requiredArgs from "../_lib/requiredArgs/index.js";
import { monthsInQuarter } from "../constants/index.js";
/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @param {number} quarters - number of quarters to be converted
 *
 * @returns {number} the number of quarters converted in months
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */
export default function quartersToMonths(quarters) {
  requiredArgs(1, arguments);
  return Math.floor(quarters * monthsInQuarter);
}