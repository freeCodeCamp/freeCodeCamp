import { getRoundingMethod } from "./_lib/getRoundingMethod.js";
import { constructFrom } from "./constructFrom.js";
import { toDate } from "./toDate.js";

/**
 * The {@link roundToNearestHours} function options.
 */

/**
 * @name roundToNearestHours
 * @category Hour Helpers
 * @summary Rounds the given date to the nearest hour
 *
 * @description
 * Rounds the given date to the nearest hour (or number of hours).
 * Rounds up when the given date is exactly between the nearest round hours.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest hour
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56))
 * //=> Thu Jul 10 2014 13:00:00
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 6 })
 * //=> Thu Jul 10 2014 12:00:00
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 8 })
 * //=> Thu Jul 10 2014 16:00:00
 *
 * @example
 * // Floor (rounds down) 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 1, 23, 45), { roundingMethod: 'ceil' })
 * //=> Thu Jul 10 2014 02:00:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:34:56 to nearest quarter hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { roundingMethod: 'floor', nearestTo: 8 })
 * //=> Thu Jul 10 2014 08:00:00
 */
export function roundToNearestHours(date, options) {
  const nearestTo = options?.nearestTo ?? 1;

  if (nearestTo < 1 || nearestTo > 12)
    return constructFrom(options?.in || date, NaN);

  const date_ = toDate(date, options?.in);
  const fractionalMinutes = date_.getMinutes() / 60;
  const fractionalSeconds = date_.getSeconds() / 60 / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1000 / 60 / 60;
  const hours =
    date_.getHours() +
    fractionalMinutes +
    fractionalSeconds +
    fractionalMilliseconds;

  const method = options?.roundingMethod ?? "round";
  const roundingMethod = getRoundingMethod(method);

  const roundedHours = roundingMethod(hours / nearestTo) * nearestTo;

  date_.setHours(roundedHours, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
export default roundToNearestHours;
