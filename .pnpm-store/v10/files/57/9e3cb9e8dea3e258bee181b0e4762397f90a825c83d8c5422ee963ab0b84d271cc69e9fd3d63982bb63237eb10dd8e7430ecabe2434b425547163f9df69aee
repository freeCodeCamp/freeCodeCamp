import type {
  ContextOptions,
  DateArg,
  LocalizedOptions,
  WeekOptions,
} from "./types.js";
/**
 * The {@link getWeekOfMonth} function options.
 */
export interface GetWeekOfMonthOptions
  extends LocalizedOptions<"options">,
    WeekOptions,
    ContextOptions<Date> {}
/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The week of month
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export declare function getWeekOfMonth(
  date: DateArg<Date> & {},
  options?: GetWeekOfMonthOptions,
): number;
