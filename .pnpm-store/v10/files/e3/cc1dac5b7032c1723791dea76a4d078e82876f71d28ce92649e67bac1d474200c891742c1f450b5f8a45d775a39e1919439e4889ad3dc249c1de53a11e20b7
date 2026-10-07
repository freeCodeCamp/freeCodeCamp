import { toDate } from "./toDate.js";

/**
 * The {@link isWednesday} function options.
 */

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
export function isWednesday(date, options) {
  return toDate(date, options?.in).getDay() === 3;
}

// Fallback for modularized imports:
export default isWednesday;
