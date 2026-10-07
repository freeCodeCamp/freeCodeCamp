import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link isSameISOWeekYear} function options.
 */
export interface IsSameISOWeekYearOptions extends ContextOptions<Date> {}
/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * const result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */
export declare function isSameISOWeekYear(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: IsSameISOWeekYearOptions | undefined,
): boolean;
