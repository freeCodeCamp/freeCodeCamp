import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link getISOWeekYear} function options.
 */
export interface GetISOWeekYearOptions extends ContextOptions<Date> {}
/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
export declare function getISOWeekYear(
  date: DateArg<Date> & {},
  options?: GetISOWeekYearOptions | undefined,
): number;
