import type { ContextOptions } from "./types.js";
/**
 * The {@link endOfToday} function options.
 */
export interface EndOfTodayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param options - The options
 *
 * @returns The end of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
export declare function endOfToday<ResultDate extends Date = Date>(
  options?: EndOfTodayOptions<ResultDate>,
): ResultDate;
