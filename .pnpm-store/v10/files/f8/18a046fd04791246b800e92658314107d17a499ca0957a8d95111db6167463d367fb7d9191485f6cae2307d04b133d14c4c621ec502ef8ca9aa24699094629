import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link previousThursday} function options.
 */
export interface PreviousThursdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name previousThursday
 * @category Weekday Helpers
 * @summary When is the previous Thursday?
 *
 * @description
 * When is the previous Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Thursday
 *
 * @example
 * // When is the previous Thursday before Jun, 18, 2021?
 * const result = previousThursday(new Date(2021, 5, 18))
 * //=> Thu June 17 2021 00:00:00
 */
export declare function previousThursday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: PreviousThursdayOptions<ResultDate> | undefined,
): ResultDate;
