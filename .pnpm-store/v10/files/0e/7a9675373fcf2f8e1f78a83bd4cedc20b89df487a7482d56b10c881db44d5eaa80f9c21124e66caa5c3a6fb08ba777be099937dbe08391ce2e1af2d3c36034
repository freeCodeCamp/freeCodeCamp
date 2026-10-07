import { constructFrom } from "./constructFrom.js";
import { constructNow } from "./constructNow.js";
import { isSameDay } from "./isSameDay.js";
import { subDays } from "./subDays.js";

/**
 * The {@link isYesterday} function options.
 */

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
export function isYesterday(date, options) {
  return isSameDay(
    constructFrom(options?.in || date, date),
    subDays(constructNow(options?.in || date), 1),
  );
}

// Fallback for modularized imports:
export default isYesterday;
