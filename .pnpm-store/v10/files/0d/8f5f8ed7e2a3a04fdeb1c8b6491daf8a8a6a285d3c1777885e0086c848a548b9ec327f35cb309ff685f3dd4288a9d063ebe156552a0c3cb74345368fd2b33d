import type { ContextOptions } from "./types.js";
/**
 * The {@link endOfTomorrow} function options.
 */
export interface EndOfTomorrowOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param options - The options
 * @returns The end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
export declare function endOfTomorrow<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(options?: EndOfTomorrowOptions<ResultDate> | undefined): ResultDate;
