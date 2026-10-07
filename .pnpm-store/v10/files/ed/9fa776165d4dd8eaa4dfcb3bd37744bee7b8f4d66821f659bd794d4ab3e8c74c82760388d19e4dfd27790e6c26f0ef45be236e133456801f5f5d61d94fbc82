"use strict";
exports.eachWeekOfInterval = eachWeekOfInterval;
var _index = require("./_lib/normalizeInterval.cjs");
var _index2 = require("./addWeeks.cjs");
var _index3 = require("./constructFrom.cjs");
var _index4 = require("./startOfWeek.cjs");

/**
 * The {@link eachWeekOfInterval} function options.
 */

/**
 * The {@link eachWeekOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the interval start date,
 * then the end interval date. If a context function is passed, it uses the context function return type.
 */

/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of weeks from the week of the interval start to the week of the interval end
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */
function eachWeekOfInterval(interval, options) {
  const { start, end } = (0, _index.normalizeInterval)(options?.in, interval);

  let reversed = +start > +end;
  const startDateWeek = reversed
    ? (0, _index4.startOfWeek)(end, options)
    : (0, _index4.startOfWeek)(start, options);
  const endDateWeek = reversed
    ? (0, _index4.startOfWeek)(start, options)
    : (0, _index4.startOfWeek)(end, options);

  startDateWeek.setHours(15);
  endDateWeek.setHours(15);

  const endTime = +endDateWeek.getTime();
  let currentDate = startDateWeek;

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    currentDate.setHours(0);
    dates.push((0, _index3.constructFrom)(start, currentDate));
    currentDate = (0, _index2.addWeeks)(currentDate, step);
    currentDate.setHours(15);
  }

  return reversed ? dates.reverse() : dates;
}
