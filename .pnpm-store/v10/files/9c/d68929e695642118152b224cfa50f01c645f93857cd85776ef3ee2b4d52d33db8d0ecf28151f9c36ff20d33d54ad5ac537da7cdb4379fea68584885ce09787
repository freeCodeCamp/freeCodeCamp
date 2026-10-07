import { toDate } from "./toDate.js";

/**
 * The {@link isWeekend} function options.
 */

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend? A weekend is either Saturday (`6`) or Sunday (`0`).
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
export function isWeekend(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 0 || day === 6;
}

// Fallback for modularized imports:
export default isWeekend;
