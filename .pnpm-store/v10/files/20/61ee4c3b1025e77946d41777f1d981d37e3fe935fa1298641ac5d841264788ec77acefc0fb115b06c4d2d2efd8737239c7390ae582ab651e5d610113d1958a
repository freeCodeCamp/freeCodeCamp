import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link setISOWeek} function options.
 */
export interface SetISOWeekOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The `Date` type of the context function.
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
export declare function setISOWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  week: number,
  options?: SetISOWeekOptions<ResultDate>,
): ResultDate;
