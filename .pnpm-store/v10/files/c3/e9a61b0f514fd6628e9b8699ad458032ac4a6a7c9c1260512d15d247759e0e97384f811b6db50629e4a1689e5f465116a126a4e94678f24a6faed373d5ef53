import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link isSameHour} function options.
 */
export interface IsSameHourOptions extends ContextOptions<Date> {}
/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour (and same day)?
 *
 * @description
 * Are the given dates in the same hour (and same day)?
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same hour (and same day)
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 5 September 06:00:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 5, 6, 0))
 * //=> false
 */
export declare function isSameHour(
  dateLeft: DateArg<Date> & {},
  dateRight: DateArg<Date> & {},
  options?: IsSameHourOptions | undefined,
): boolean;
