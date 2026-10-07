import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link subMilliseconds} function options.
 */
export interface SubMillisecondsOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * Subtract the specified number of milliseconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the milliseconds subtracted
 */
export declare function subMilliseconds<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: SubMillisecondsOptions<ResultDate> | undefined,
): ResultDate;
