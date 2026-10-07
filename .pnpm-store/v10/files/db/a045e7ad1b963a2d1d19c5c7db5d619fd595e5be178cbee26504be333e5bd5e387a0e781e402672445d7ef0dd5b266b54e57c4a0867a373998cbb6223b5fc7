import getTimezoneOffsetInMilliseconds from "../_lib/getTimezoneOffsetInMilliseconds/index.js";
import startOfISOWeek from "../startOfISOWeek/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
export default function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft);
  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight);
  var timestampLeft = startOfISOWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfISOWeekLeft);
  var timestampRight = startOfISOWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfISOWeekRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}