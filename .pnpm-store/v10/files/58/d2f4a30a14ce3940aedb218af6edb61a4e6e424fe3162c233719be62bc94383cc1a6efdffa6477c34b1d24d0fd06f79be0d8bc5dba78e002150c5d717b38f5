import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link getISODay} function options.
 */
export interface GetISODayOptions extends ContextOptions<Date> {}
/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
export declare function getISODay(
  date: DateArg<Date> & {},
  options?: GetISODayOptions,
): number;
