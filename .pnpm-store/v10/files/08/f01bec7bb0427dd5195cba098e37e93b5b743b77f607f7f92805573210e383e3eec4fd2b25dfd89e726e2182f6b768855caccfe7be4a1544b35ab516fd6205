import { eachWeekendOfInterval } from "./eachWeekendOfInterval.js";
import { endOfYear } from "./endOfYear.js";
import { startOfYear } from "./startOfYear.js";

/**
 * The {@link eachWeekendOfYear} function options.
 */

/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The given year
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * const result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */
export function eachWeekendOfYear(date, options) {
  const start = startOfYear(date, options);
  const end = endOfYear(date, options);
  return eachWeekendOfInterval({ start, end }, options);
}

// Fallback for modularized imports:
export default eachWeekendOfYear;
