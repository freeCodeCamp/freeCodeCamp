import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link nextThursday} function options.
 */
export interface NextThursdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Thursday
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * const result = nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */
export declare function nextThursday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: NextThursdayOptions<ResultDate> | undefined,
): ResultDate;
