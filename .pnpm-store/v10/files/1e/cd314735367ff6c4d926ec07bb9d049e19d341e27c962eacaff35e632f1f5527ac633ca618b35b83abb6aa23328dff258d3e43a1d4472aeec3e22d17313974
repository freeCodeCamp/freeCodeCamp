import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link lastDayOfMonth} function options.
 */
export interface LastDayOfMonthOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * const result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
export declare function lastDayOfMonth<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: LastDayOfMonthOptions<ResultDate> | undefined,
): ResultDate;
