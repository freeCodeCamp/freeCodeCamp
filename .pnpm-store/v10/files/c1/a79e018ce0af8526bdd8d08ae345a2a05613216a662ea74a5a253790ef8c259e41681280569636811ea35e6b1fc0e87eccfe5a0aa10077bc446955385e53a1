import { toDate } from "./toDate.js";

/**
 * The {@link isTuesday} function options.
 */

/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
export function isTuesday(date, options) {
  return toDate(date, options?.in).getDay() === 2;
}

// Fallback for modularized imports:
export default isTuesday;
