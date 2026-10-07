"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInBusinessDays;
var _index = _interopRequireDefault(require("../addDays/index.js"));
var _index2 = _interopRequireDefault(require("../differenceInCalendarDays/index.js"));
var _index3 = _interopRequireDefault(require("../isSameDay/index.js"));
var _index4 = _interopRequireDefault(require("../isValid/index.js"));
var _index5 = _interopRequireDefault(require("../isWeekend/index.js"));
var _index6 = _interopRequireDefault(require("../toDate/index.js"));
var _index7 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index8 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of business days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 30 November 2021 and 1 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 30),
 *   new Date(2021, 10, 1)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> -22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */
function differenceInBusinessDays(dirtyDateLeft, dirtyDateRight) {
  (0, _index7.default)(2, arguments);
  var dateLeft = (0, _index6.default)(dirtyDateLeft);
  var dateRight = (0, _index6.default)(dirtyDateRight);
  if (!(0, _index4.default)(dateLeft) || !(0, _index4.default)(dateRight)) return NaN;
  var calendarDifference = (0, _index2.default)(dateLeft, dateRight);
  var sign = calendarDifference < 0 ? -1 : 1;
  var weeks = (0, _index8.default)(calendarDifference / 7);
  var result = weeks * 5;
  dateRight = (0, _index.default)(dateRight, weeks * 7);

  // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
  while (!(0, _index3.default)(dateLeft, dateRight)) {
    // sign is used to account for both negative and positive differences
    result += (0, _index5.default)(dateRight) ? 0 : sign;
    dateRight = (0, _index.default)(dateRight, sign);
  }
  return result === 0 ? 0 : result;
}
module.exports = exports.default;