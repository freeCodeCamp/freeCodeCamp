import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link previousSaturday} function options.
 */
export interface PreviousSaturdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name previousSaturday
 * @category Weekday Helpers
 * @summary When is the previous Saturday?
 *
 * @description
 * When is the previous Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Saturday
 *
 * @example
 * // When is the previous Saturday before Jun, 20, 2021?
 * const result = previousSaturday(new Date(2021, 5, 20))
 * //=> Sat June 19 2021 00:00:00
 */
export declare function previousSaturday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: PreviousSaturdayOptions<ResultDate> | undefined,
): ResultDate;
