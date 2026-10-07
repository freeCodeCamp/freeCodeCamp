import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link previousTuesday} function options.
 */
export interface PreviousTuesdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name previousTuesday
 * @category Weekday Helpers
 * @summary When is the previous Tuesday?
 *
 * @description
 * When is the previous Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Tuesday
 *
 * @example
 * // When is the previous Tuesday before Jun, 18, 2021?
 * const result = previousTuesday(new Date(2021, 5, 18))
 * //=> Tue June 15 2021 00:00:00
 */
export declare function previousTuesday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: PreviousTuesdayOptions<ResultDate> | undefined,
): ResultDate;
