import type { ContextOptions, Interval } from "./types.js";
/**
 * The {@link eachWeekendOfInterval} function options.
 */
export interface EachWeekendOfIntervalOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * The {@link eachWeekendOfInterval} function result type.
 */
export type EachWeekendOfIntervalResult<
  IntervalType extends Interval,
  Options extends EachWeekendOfIntervalOptions | undefined,
> = Array<
  Options extends EachWeekendOfIntervalOptions<infer DateType>
    ? DateType
    : IntervalType["start"] extends Date
      ? IntervalType["start"]
      : IntervalType["end"] extends Date
        ? IntervalType["end"]
        : Date
>;
/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The given interval
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
export declare function eachWeekendOfInterval<
  IntervalType extends Interval,
  Options extends EachWeekendOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachWeekendOfIntervalResult<IntervalType, Options>;
