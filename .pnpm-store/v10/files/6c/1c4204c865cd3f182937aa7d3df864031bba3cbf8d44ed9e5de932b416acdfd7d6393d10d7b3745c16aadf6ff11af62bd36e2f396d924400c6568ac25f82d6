import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link setYear} function options.
 */
export interface SetYearOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
export declare function setYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  year: number,
  options?: SetYearOptions<ResultDate> | undefined,
): ResultDate;
