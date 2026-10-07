import { normalizeInterval } from "./_lib/normalizeInterval.js";
import { constructFrom } from "./constructFrom.js";
import { eachDayOfInterval } from "./eachDayOfInterval.js";
import { isWeekend } from "./isWeekend.js";

/**
 * The {@link eachWeekendOfInterval} function options.
 */

/**
 * The {@link eachWeekendOfInterval} function result type.
 */

/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The given interval
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
export function eachWeekendOfInterval(interval, options) {
  const { start, end } = normalizeInterval(options?.in, interval);
  const dateInterval = eachDayOfInterval({ start, end }, options);
  const weekends = [];
  let index = 0;
  while (index < dateInterval.length) {
    const date = dateInterval[index++];
    if (isWeekend(date)) weekends.push(constructFrom(start, date));
  }
  return weekends;
}

// Fallback for modularized imports:
export default eachWeekendOfInterval;
