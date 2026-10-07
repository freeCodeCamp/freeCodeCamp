import type { ContextOptions, DateArg, Interval } from "./types.js";
/**
 * The {@link clamp} function options.
 */
export interface ClampOptions<ContextDate extends Date = Date>
  extends ContextOptions<ContextDate> {}
/**
 * The {@link clamp} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */
export type ClampResult<
  DateType extends DateArg<Date>,
  IntervalType extends Interval,
  Options extends ClampOptions | undefined,
> =
  Options extends ClampOptions<infer DateType extends Date>
    ? DateType
    : DateType extends Date
      ? DateType
      : IntervalType["start"] extends Date
        ? IntervalType["start"]
        : IntervalType["end"] extends Date
          ? IntervalType["end"]
          : Date;
/**
 * @name clamp
 * @category Interval Helpers
 * @summary Return a date bounded by the start and the end of the given interval.
 *
 * @description
 * Clamps a date to the lower bound with the start of the interval and the upper
 * bound with the end of the interval.
 *
 * - When the date is less than the start of the interval, the start is returned.
 * - When the date is greater than the end of the interval, the end is returned.
 * - Otherwise the date is returned.
 *
 * @typeParam DateType - Date argument type.
 * @typeParam IntervalType - Interval argument type.
 * @typeParam Options - Options type.
 *
 * @param date - The date to be bounded
 * @param interval - The interval to bound to
 * @param options - An object with options
 *
 * @returns The date bounded by the start and the end of the interval
 *
 * @example
 * // What is Mar 21, 2021 bounded to an interval starting at Mar 22, 2021 and ending at Apr 01, 2021
 * const result = clamp(new Date(2021, 2, 21), {
 *   start: new Date(2021, 2, 22),
 *   end: new Date(2021, 3, 1),
 * })
 * //=> Mon Mar 22 2021 00:00:00
 */
export declare function clamp<
  DateType extends DateArg<Date>,
  IntervalType extends Interval,
  Options extends ClampOptions | undefined = undefined,
>(
  date: DateType,
  interval: IntervalType,
  options?: Options,
): ClampResult<DateType, IntervalType, Options>;
