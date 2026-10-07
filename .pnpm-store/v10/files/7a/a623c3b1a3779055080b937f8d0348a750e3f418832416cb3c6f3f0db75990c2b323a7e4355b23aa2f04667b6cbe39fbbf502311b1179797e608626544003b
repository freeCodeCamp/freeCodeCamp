import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link differenceInCalendarISOWeeks} function options.
 */
export interface DifferenceInCalendarISOWeeksOptions
  extends ContextOptions<Date> {}
/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6),
 * );
 * //=> 3
 */
export declare function differenceInCalendarISOWeeks(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarISOWeeksOptions | undefined,
): number;
