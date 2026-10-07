import { toDate } from "./toDate.js";

/**
 * The {@link isMonday} function options.
 */

/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * const result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
export function isMonday(date, options) {
  return toDate(date, options?.in).getDay() === 1;
}

// Fallback for modularized imports:
export default isMonday;
