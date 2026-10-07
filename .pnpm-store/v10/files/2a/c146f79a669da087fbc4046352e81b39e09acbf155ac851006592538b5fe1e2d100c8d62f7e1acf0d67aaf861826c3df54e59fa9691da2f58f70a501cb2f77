import type {
  ContextOptions,
  DateArg,
  LocalizedOptions,
  WeekOptions,
} from "./types.js";
/**
 * The {@link differenceInCalendarWeeks} function options.
 */
export interface DifferenceInCalendarWeeksOptions
  extends LocalizedOptions<"options">,
    WeekOptions,
    ContextOptions<Date> {}
/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
export declare function differenceInCalendarWeeks(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarWeeksOptions | undefined,
): number;
