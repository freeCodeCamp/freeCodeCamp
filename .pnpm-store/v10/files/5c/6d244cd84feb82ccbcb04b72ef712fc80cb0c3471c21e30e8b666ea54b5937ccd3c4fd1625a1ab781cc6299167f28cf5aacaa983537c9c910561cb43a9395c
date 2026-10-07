import { constructFrom } from "./constructFrom.js";
import { constructNow } from "./constructNow.js";

/**
 * The {@link startOfTomorrow} function options.
 */

/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @returns The start of tomorrow
 *
 * @description
 * Return the start of tomorrow.
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
export function startOfTomorrow(options) {
  const now = constructNow(options?.in);
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const date = constructFrom(options?.in, 0);
  date.setFullYear(year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

// Fallback for modularized imports:
export default startOfTomorrow;
