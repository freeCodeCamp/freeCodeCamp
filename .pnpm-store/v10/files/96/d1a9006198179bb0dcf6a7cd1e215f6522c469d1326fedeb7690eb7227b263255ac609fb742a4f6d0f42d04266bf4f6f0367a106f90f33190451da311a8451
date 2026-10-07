import type { ContextOptions, DateArg, RoundingOptions } from "./types.js";
/**
 * The {@link differenceInQuarters} function options.
 */
export interface DifferenceInQuartersOptions
  extends RoundingOptions,
    ContextOptions<Date> {}
/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */
export declare function differenceInQuarters(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInQuartersOptions | undefined,
): number;
