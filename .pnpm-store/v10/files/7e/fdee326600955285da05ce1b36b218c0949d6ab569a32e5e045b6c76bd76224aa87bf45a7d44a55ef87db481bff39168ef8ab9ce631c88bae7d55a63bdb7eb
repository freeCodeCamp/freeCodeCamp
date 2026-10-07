"use strict";
exports.getOverlappingDaysInIntervals = getOverlappingDaysInIntervals;
var _index = require("./_lib/getTimezoneOffsetInMilliseconds.cjs");
var _index2 = require("./constants.cjs");
var _index3 = require("./toDate.cjs");

/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals. It uses the time
 * between dates to calculate the number of days, rounding it up to include
 * partial days.
 *
 * Two equal 0-length intervals will result in 0. Two equal 1ms intervals will
 * result in 1.
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 * @param options - An object with options
 *
 * @returns The number of days that overlap in two time intervals
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> 0
 */

function getOverlappingDaysInIntervals(intervalLeft, intervalRight) {
  const [leftStart, leftEnd] = [
    +(0, _index3.toDate)(intervalLeft.start),
    +(0, _index3.toDate)(intervalLeft.end),
  ].sort((a, b) => a - b);
  const [rightStart, rightEnd] = [
    +(0, _index3.toDate)(intervalRight.start),
    +(0, _index3.toDate)(intervalRight.end),
  ].sort((a, b) => a - b);

  // Prevent NaN result if intervals don't overlap at all.
  const isOverlapping = leftStart < rightEnd && rightStart < leftEnd;
  if (!isOverlapping) return 0;

  // Remove the timezone offset to negate the DST effect on calculations.
  const overlapLeft = rightStart < leftStart ? leftStart : rightStart;
  const left =
    overlapLeft - (0, _index.getTimezoneOffsetInMilliseconds)(overlapLeft);
  const overlapRight = rightEnd > leftEnd ? leftEnd : rightEnd;
  const right =
    overlapRight - (0, _index.getTimezoneOffsetInMilliseconds)(overlapRight);

  // Ceil the number to include partial days too.
  return Math.ceil((right - left) / _index2.millisecondsInDay);
}
