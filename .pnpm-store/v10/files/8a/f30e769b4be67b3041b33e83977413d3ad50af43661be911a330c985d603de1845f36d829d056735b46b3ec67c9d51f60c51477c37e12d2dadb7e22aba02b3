import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link subMinutes} function options.
 */
export interface SubMinutesOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the minutes subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * const result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
export declare function subMinutes<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: SubMinutesOptions<ResultDate> | undefined,
): ResultDate;
