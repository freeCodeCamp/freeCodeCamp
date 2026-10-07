import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link nextTuesday} function options.
 */
export interface NextTuesdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Tuesday
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */
export declare function nextTuesday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: NextTuesdayOptions<ResultDate>,
): ResultDate;
