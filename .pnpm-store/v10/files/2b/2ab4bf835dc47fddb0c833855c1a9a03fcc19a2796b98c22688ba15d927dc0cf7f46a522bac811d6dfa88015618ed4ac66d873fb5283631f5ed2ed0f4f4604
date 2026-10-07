import toDate from "../toDate/index.js";
import differenceInCalendarISOWeekYears from "../differenceInCalendarISOWeekYears/index.js";
import compareAsc from "../compareAsc/index.js";
import subISOWeekYears from "../subISOWeekYears/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
export default function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarISOWeekYears(dateLeft, dateRight));
  dateLeft = subISOWeekYears(dateLeft, sign * difference);

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOWeekYearNotFull = Number(compareAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastISOWeekYearNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}