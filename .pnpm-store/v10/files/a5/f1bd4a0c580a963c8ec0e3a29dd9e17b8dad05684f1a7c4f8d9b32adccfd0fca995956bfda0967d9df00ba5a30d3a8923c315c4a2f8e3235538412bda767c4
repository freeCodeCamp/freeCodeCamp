import type { DateArg, RoundingOptions } from "./types.js";
/**
 * The {@link differenceInSeconds} function options.
 */
export interface DifferenceInSecondsOptions extends RoundingOptions {}
/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
export declare function differenceInSeconds(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInSecondsOptions,
): number;
