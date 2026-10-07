"use strict";
exports.eachQuarterOfInterval = eachQuarterOfInterval;
var _index = require("./_lib/normalizeInterval.cjs");
var _index2 = require("./addQuarters.cjs");
var _index3 = require("./constructFrom.cjs");
var _index4 = require("./startOfQuarter.cjs");

/**
 * The {@link eachQuarterOfInterval} function options.
 */

/**
 * The {@link eachQuarterOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval
 * @param options - An object with options
 *
 * @returns The array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10),
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */
function eachQuarterOfInterval(interval, options) {
  const { start, end } = (0, _index.normalizeInterval)(options?.in, interval);

  let reversed = +start > +end;
  const endTime = reversed
    ? +(0, _index4.startOfQuarter)(start)
    : +(0, _index4.startOfQuarter)(end);
  let date = reversed
    ? (0, _index4.startOfQuarter)(end)
    : (0, _index4.startOfQuarter)(start);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+date <= endTime) {
    dates.push((0, _index3.constructFrom)(start, date));
    date = (0, _index2.addQuarters)(date, step);
  }

  return reversed ? dates.reverse() : dates;
}
