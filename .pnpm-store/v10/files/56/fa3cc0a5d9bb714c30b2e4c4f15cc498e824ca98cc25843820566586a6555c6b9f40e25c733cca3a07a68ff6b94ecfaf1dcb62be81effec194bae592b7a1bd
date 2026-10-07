import { toDate } from "./toDate.js";

/**
 * The {@link getHours} function options.
 */

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
export function getHours(date, options) {
  return toDate(date, options?.in).getHours();
}

// Fallback for modularized imports:
export default getHours;
