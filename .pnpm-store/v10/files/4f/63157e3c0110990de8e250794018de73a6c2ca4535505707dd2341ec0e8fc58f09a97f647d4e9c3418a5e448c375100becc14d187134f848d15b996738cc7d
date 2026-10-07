import type {
  ContextOptions,
  DateArg,
  LocalizedOptions,
  WeekOptions,
} from "./types.js";
/**
 * The {@link getWeeksInMonth} function options.
 */
export interface GetWeeksInMonthOptions
  extends LocalizedOptions<"options">,
    WeekOptions,
    ContextOptions<Date> {}
/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
export declare function getWeeksInMonth(
  date: DateArg<Date> & {},
  options?: GetWeeksInMonthOptions | undefined,
): number;
