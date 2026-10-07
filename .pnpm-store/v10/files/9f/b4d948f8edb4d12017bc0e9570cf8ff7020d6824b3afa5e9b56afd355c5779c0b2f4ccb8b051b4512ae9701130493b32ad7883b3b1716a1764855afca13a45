import type { ContextOptions, Interval, StepOptions } from "./types.js";
/**
 * The {@link eachHourOfInterval} function options.
 */
export interface EachHourOfIntervalOptions<DateType extends Date = Date>
  extends StepOptions,
    ContextOptions<DateType> {}
/**
 * The {@link eachHourOfInterval} function result type.
 * Resolves to the appropriate date type based on inputs.
 */
export type EachHourOfIntervalResult<
  IntervalType extends Interval,
  Options extends EachHourOfIntervalOptions | undefined,
> = Array<
  Options extends EachHourOfIntervalOptions<infer DateType>
    ? DateType
    : IntervalType["start"] extends Date
      ? IntervalType["start"]
      : IntervalType["end"] extends Date
        ? IntervalType["end"]
        : Date
>;
/**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of hours from the hour of the interval start to the hour of the interval end
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * const result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * });
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */
export declare function eachHourOfInterval<
  IntervalType extends Interval,
  Options extends EachHourOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachHourOfIntervalResult<IntervalType, Options>;
