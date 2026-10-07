import { constructFrom } from "./constructFrom.js";
import { constructNow } from "./constructNow.js";
import { isSameDay } from "./isSameDay.js";

/**
 * The {@link isToday} function options.
 */

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
export function isToday(date, options) {
  return isSameDay(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}

// Fallback for modularized imports:
export default isToday;
