import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link endOfDecade} function options.
 */
export interface EndOfDecadeOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a decade
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */
export declare function endOfDecade<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfDecadeOptions<ResultDate> | undefined,
): ResultDate;
