import { constructFrom } from "./constructFrom.js";
import { constructNow } from "./constructNow.js";
import { isSameISOWeek } from "./isSameISOWeek.js";

/**
 * The {@link isThisISOWeek} function options.
 */

/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
export function isThisISOWeek(date, options) {
  return isSameISOWeek(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}

// Fallback for modularized imports:
export default isThisISOWeek;
