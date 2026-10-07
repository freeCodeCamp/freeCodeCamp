import { constructFrom } from "./constructFrom.js";
import { constructNow } from "./constructNow.js";
import { isSameMonth } from "./isSameMonth.js";

/**
 * The {@link isThisMonth} function options.
 */

/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
export function isThisMonth(date, options) {
  return isSameMonth(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}

// Fallback for modularized imports:
export default isThisMonth;
