import type { ContextOptions, Interval, StepOptions } from "./types.js";
/**
 * The {@link eachQuarterOfInterval} function options.
 */
export interface EachQuarterOfIntervalOptions<DateType extends Date = Date>
  extends StepOptions,
    ContextOptions<DateType> {}
/**
 * The {@link eachQuarterOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */
export type EachQuarterOfIntervalResult<
  IntervalType extends Interval,
  Options extends EachQuarterOfIntervalOptions | undefined,
> = Array<
  Options extends EachQuarterOfIntervalOptions<infer DateType>
    ? DateType
    : IntervalType["start"] extends Date
      ? IntervalType["start"]
      : IntervalType["end"] extends Date
        ? IntervalType["end"]
        : Date
>;
/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval
 * @param options - An object with options
 *
 * @returns The array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10),
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */
export declare function eachQuarterOfInterval<
  IntervalType extends Interval,
  Options extends EachQuarterOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachQuarterOfIntervalResult<IntervalType, Options>;
