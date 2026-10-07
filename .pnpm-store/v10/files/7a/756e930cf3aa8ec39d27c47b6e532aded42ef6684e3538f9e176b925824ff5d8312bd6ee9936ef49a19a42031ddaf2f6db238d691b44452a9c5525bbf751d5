import { addMilliseconds } from "./addMilliseconds.js";

/**
 * The {@link subMilliseconds} function options.
 */

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
export function subMilliseconds(date, amount, options) {
  return addMilliseconds(date, -amount, options);
}

// Fallback for modularized imports:
export default subMilliseconds;
