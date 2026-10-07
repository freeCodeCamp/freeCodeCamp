import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link addYears} function options.
 */
export interface AddYearsOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
export declare function addYears<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddYearsOptions<ResultDate> | undefined,
): ResultDate;
