import { toDate } from "./toDate.js";

/**
 * The {@link setSeconds} function options.
 */

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date, with context support.
 *
 * @description
 * Set the seconds to the given date, with an optional context for time zone specification.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param seconds - The seconds of the new date
 * @param options - An object with options
 *
 * @returns The new date with the seconds set
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
export function setSeconds(date, seconds, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(seconds);
  return _date;
}

// Fallback for modularized imports:
export default setSeconds;
