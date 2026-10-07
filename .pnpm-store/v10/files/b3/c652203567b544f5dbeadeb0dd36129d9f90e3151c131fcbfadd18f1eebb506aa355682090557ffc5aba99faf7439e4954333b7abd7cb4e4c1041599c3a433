import { constructNow } from "./constructNow.js";
import { isSameHour } from "./isSameHour.js";
import { toDate } from "./toDate.js";

/**
 * The {@link isThisHour} function options.
 */

/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
export function isThisHour(date, options) {
  return isSameHour(
    toDate(date, options?.in),
    constructNow(options?.in || date),
  );
}

// Fallback for modularized imports:
export default isThisHour;
