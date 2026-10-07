import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link startOfDecade} options.
 */
export interface StartOfDecadeOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a decade
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */
export declare function startOfDecade<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfDecadeOptions<ResultDate> | undefined,
): ResultDate;
