import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link endOfMinute} function options.
 */
export interface EndOfMinuteOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone or the provided context.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
export declare function endOfMinute<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfMinuteOptions<ResultDate> | undefined,
): ResultDate;
