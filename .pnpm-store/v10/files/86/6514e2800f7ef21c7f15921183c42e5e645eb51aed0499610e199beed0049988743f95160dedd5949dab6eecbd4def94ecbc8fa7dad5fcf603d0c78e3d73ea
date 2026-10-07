import { normalizeInterval } from "./_lib/normalizeInterval.js";
import { addMinutes } from "./addMinutes.js";
import { constructFrom } from "./constructFrom.js";

/**
 * The {@link eachMinuteOfInterval} function options.
 */

/**
 * The {@link eachMinuteOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of minutes from the minute of the interval start to the minute of the interval end
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */
export function eachMinuteOfInterval(interval, options) {
  const { start, end } = normalizeInterval(options?.in, interval);
  // Set to the start of the minute
  start.setSeconds(0, 0);

  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  let date = reversed ? end : start;

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date = addMinutes(date, step);
  }

  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
export default eachMinuteOfInterval;
