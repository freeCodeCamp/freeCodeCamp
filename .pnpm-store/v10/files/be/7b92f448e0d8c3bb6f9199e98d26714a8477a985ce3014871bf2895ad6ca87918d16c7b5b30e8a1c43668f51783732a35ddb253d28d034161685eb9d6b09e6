import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link endOfHour} function options.
 */
export interface EndOfHourOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
export declare function endOfHour<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfHourOptions<ResultDate> | undefined,
): ResultDate;
