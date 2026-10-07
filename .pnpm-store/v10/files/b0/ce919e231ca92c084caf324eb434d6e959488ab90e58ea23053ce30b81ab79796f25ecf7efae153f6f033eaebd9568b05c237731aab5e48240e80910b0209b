import { constructFrom } from "./constructFrom.js";
import { constructNow } from "./constructNow.js";
import { isSameYear } from "./isSameYear.js";

/**
 * The {@link isThisYear} function options.
 */

/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
export function isThisYear(date, options) {
  return isSameYear(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}

// Fallback for modularized imports:
export default isThisYear;
