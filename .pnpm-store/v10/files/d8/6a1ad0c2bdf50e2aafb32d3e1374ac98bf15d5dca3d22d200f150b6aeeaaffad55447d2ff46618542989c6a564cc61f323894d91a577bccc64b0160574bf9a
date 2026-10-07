import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link nextWednesday} function options.
 */
export interface NextWednesdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Wednesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Wednesday
 *
 * @example
 * // When is the next Wednesday after Mar, 22, 2020?
 * const result = nextWednesday(new Date(2020, 2, 22))
 * //=> Wed Mar 25 2020 00:00:00
 */
export declare function nextWednesday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: NextWednesdayOptions<ResultDate> | undefined,
): ResultDate;
