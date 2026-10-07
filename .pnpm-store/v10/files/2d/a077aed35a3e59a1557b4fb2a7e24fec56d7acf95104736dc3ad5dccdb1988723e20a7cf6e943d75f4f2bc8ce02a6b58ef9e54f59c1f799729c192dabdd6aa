import { constructNow } from "./constructNow.js";
import { isSameMinute } from "./isSameMinute.js";

/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * const result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */

export function isThisMinute(date) {
  return isSameMinute(date, constructNow(date));
}

// Fallback for modularized imports:
export default isThisMinute;
