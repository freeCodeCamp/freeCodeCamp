import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link setMinutes} function options.
 */
export interface SetMinutesOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, returned from the context function, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param minutes - The minutes of the new date
 * @param options - An object with options
 *
 * @returns The new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
export declare function setMinutes<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  minutes: number,
  options?: SetMinutesOptions<ResultDate> | undefined,
): ResultDate;
