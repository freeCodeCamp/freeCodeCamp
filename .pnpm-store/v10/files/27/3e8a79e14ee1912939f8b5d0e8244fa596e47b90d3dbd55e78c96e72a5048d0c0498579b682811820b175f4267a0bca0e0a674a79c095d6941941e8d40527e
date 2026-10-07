import { constructFrom } from "./constructFrom.js";
import { constructNow } from "./constructNow.js";
import { isSameWeek } from "./isSameWeek.js";

/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
export function isThisWeek(date, options) {
  return isSameWeek(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
    options,
  );
}

// Fallback for modularized imports:
export default isThisWeek;
