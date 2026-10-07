import { nextDay } from "./nextDay.js";

/**
 * The {@link nextSunday} function options.
 */

/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned if a context is provided.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Sunday
 *
 * @example
 * // When is the next Sunday after March 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */
export function nextSunday(date, options) {
  return nextDay(date, 0, options);
}

// Fallback for modularized imports:
export default nextSunday;
