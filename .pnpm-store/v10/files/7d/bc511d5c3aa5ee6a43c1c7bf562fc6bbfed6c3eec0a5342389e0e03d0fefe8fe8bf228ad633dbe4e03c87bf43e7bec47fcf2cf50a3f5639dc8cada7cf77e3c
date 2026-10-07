"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addBusinessDays;
var _index = _interopRequireDefault(require("../isWeekend/index.js"));
var _index2 = _interopRequireDefault(require("../toDate/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
var _index4 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index5 = _interopRequireDefault(require("../isSunday/index.js"));
var _index6 = _interopRequireDefault(require("../isSaturday/index.js"));
/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the business days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
function addBusinessDays(dirtyDate, dirtyAmount) {
  (0, _index4.default)(2, arguments);
  var date = (0, _index2.default)(dirtyDate);
  var startedOnWeekend = (0, _index.default)(date);
  var amount = (0, _index3.default)(dirtyAmount);
  if (isNaN(amount)) return new Date(NaN);
  var hours = date.getHours();
  var sign = amount < 0 ? -1 : 1;
  var fullWeeks = (0, _index3.default)(amount / 5);
  date.setDate(date.getDate() + fullWeeks * 7);

  // Get remaining days not part of a full week
  var restDays = Math.abs(amount % 5);

  // Loops over remaining days
  while (restDays > 0) {
    date.setDate(date.getDate() + sign);
    if (!(0, _index.default)(date)) restDays -= 1;
  }

  // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day
  if (startedOnWeekend && (0, _index.default)(date) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if ((0, _index6.default)(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1));
    if ((0, _index5.default)(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2));
  }

  // Restore hours to avoid DST lag
  date.setHours(hours);
  return date;
}
module.exports = exports.default;