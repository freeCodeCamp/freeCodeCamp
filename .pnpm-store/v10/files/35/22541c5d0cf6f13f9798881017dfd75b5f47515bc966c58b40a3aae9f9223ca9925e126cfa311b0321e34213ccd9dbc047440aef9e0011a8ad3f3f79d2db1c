import type { ContextOptions, DateArg, NormalizedInterval } from "./types.js";
/**
 * The {@link interval} function options.
 */
export interface IntervalOptions<ContextDate extends Date = Date>
  extends ContextOptions<ContextDate> {
  /** Asserts that the interval is positive (start is after the end). */
  assertPositive?: boolean;
}
/**
 * The {@link interval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the start argument,
 * then the end interval date. If a context function is passed, it uses the context
 * function return type.
 */
export type IntervalResult<
  StartDate extends DateArg<Date>,
  EndDate extends DateArg<Date>,
  Options extends IntervalOptions | undefined = undefined,
> = NormalizedInterval<
  Options extends IntervalOptions<infer DateType extends Date>
    ? DateType
    : StartDate extends Date
      ? StartDate
      : EndDate extends Date
        ? EndDate
        : Date
>;
/**
 * @name interval
 * @category Interval Helpers
 * @summary Creates an interval object and validates its values.
 *
 * @description
 * Creates a normalized interval object and validates its values. If the interval is invalid, an exception is thrown.
 *
 * @typeParam StartDate - Start date type.
 * @typeParam EndDate - End date type.
 * @typeParam Options - Options type.
 *
 * @param start - The start of the interval.
 * @param end - The end of the interval.
 * @param options - The options object.
 *
 * @throws `Start date is invalid` when `start` is invalid.
 * @throws `End date is invalid` when `end` is invalid.
 * @throws `End date must be after start date` when end is before `start` and `options.assertPositive` is true.
 *
 * @returns The normalized and validated interval object.
 */
export declare function interval<
  StartDate extends DateArg<Date>,
  EndDate extends DateArg<Date>,
  Options extends IntervalOptions | undefined = undefined,
>(
  start: StartDate,
  end: EndDate,
  options?: Options,
): IntervalResult<StartDate, EndDate, Options>;
