import toInteger from "../_lib/toInteger/index.js";
import toDate from "../toDate/index.js";
import startOfISOWeekYear from "../startOfISOWeekYear/index.js";
import differenceInCalendarDays from "../differenceInCalendarDays/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeekYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
export default function setISOWeekYear(dirtyDate, dirtyISOWeekYear) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeekYear = toInteger(dirtyISOWeekYear);
  var diff = differenceInCalendarDays(date, startOfISOWeekYear(date));
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  date = startOfISOWeekYear(fourthOfJanuary);
  date.setDate(date.getDate() + diff);
  return date;
}