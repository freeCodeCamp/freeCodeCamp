"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInISOWeekYears;
var _index = _interopRequireDefault(require("../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../differenceInCalendarISOWeekYears/index.js"));
var _index3 = _interopRequireDefault(require("../compareAsc/index.js"));
var _index4 = _interopRequireDefault(require("../subISOWeekYears/index.js"));
var _index5 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
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
function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  (0, _index5.default)(2, arguments);
  var dateLeft = (0, _index.default)(dirtyDateLeft);
  var dateRight = (0, _index.default)(dirtyDateRight);
  var sign = (0, _index3.default)(dateLeft, dateRight);
  var difference = Math.abs((0, _index2.default)(dateLeft, dateRight));
  dateLeft = (0, _index4.default)(dateLeft, sign * difference);

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOWeekYearNotFull = Number((0, _index3.default)(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastISOWeekYearNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}
module.exports = exports.default;