import { toDate } from "./toDate.js";

/**
 * The {@link getYear} function options.
 */

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
export function getYear(date, options) {
  return toDate(date, options?.in).getFullYear();
}

// Fallback for modularized imports:
export default getYear;
