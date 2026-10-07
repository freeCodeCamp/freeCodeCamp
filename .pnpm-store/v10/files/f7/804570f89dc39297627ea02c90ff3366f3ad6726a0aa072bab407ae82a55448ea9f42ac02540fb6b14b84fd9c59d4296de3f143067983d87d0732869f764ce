"use strict";
exports.eachWeekendOfInterval = eachWeekendOfInterval;
var _index = require("./_lib/normalizeInterval.cjs");
var _index2 = require("./constructFrom.cjs");
var _index3 = require("./eachDayOfInterval.cjs");
var _index4 = require("./isWeekend.cjs");

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
function eachWeekendOfInterval(interval, options) {
  const { start, end } = (0, _index.normalizeInterval)(options?.in, interval);
  const dateInterval = (0, _index3.eachDayOfInterval)({ start, end }, options);
  const weekends = [];
  let index = 0;
  while (index < dateInterval.length) {
    const date = dateInterval[index++];
    if ((0, _index4.isWeekend)(date))
      weekends.push((0, _index2.constructFrom)(start, date));
  }
  return weekends;
}
