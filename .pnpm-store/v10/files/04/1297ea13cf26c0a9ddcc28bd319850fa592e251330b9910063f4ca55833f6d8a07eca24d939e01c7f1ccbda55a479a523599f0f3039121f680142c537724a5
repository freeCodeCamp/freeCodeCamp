"use strict";
exports.isWithinInterval = isWithinInterval;
var _index = require("./toDate.cjs");

/**
 * The {@link isWithinInterval} function options.
 */

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param date - The date to check
 * @param interval - The interval to check
 * @param options - An object with options
 *
 * @returns The date is within the interval
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * // => true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * // => false
 *
 * @example
 * // For date equal to the interval start:
 * isWithinInterval(date, { start, end: date })
 * // => true
 *
 * @example
 * // For date equal to the interval end:
 * isWithinInterval(date, { start: date, end })
 * // => true
 */
function isWithinInterval(date, interval, options) {
  const time = +(0, _index.toDate)(date, options?.in);
  const [startTime, endTime] = [
    +(0, _index.toDate)(interval.start, options?.in),
    +(0, _index.toDate)(interval.end, options?.in),
  ].sort((a, b) => a - b);

  return time >= startTime && time <= endTime;
}
