import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link setMonth} function options.
 */
export interface SetMonthOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
export declare function setMonth<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  month: number,
  options?: SetMonthOptions<ResultDate> | undefined,
): ResultDate;
