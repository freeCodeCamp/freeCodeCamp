import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link lastDayOfDecade} function options.
 */
export interface LastDayOfDecadeOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type; inferred from arguments or specified by context.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The last day of a decade
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * const result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */
export declare function lastDayOfDecade<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: LastDayOfDecadeOptions<ResultDate> | undefined,
): ResultDate;
