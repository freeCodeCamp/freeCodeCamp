import toInteger from "../_lib/toInteger/index.js";
import toDate from "../toDate/index.js";
import setMonth from "../setMonth/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
export default function setQuarter(dirtyDate, dirtyQuarter) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var quarter = toInteger(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return setMonth(date, date.getMonth() + diff * 3);
}