import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link previousFriday} function options.
 */
export interface PreviousFridayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name previousFriday
 * @category Weekday Helpers
 * @summary When is the previous Friday?
 *
 * @description
 * When is the previous Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Friday
 *
 * @example
 * // When is the previous Friday before Jun, 19, 2021?
 * const result = previousFriday(new Date(2021, 5, 19))
 * //=> Fri June 18 2021 00:00:00
 */
export declare function previousFriday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: PreviousFridayOptions<ResultDate> | undefined,
): ResultDate;
