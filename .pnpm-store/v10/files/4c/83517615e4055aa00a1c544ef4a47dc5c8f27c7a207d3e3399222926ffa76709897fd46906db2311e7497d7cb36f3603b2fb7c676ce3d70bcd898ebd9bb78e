"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sub;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _index = _interopRequireDefault(require("../subDays/index.js"));
var _index2 = _interopRequireDefault(require("../subMonths/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index4 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */
function sub(date, duration) {
  (0, _index3.default)(2, arguments);
  if (!duration || (0, _typeof2.default)(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0, _index4.default)(duration.years) : 0;
  var months = duration.months ? (0, _index4.default)(duration.months) : 0;
  var weeks = duration.weeks ? (0, _index4.default)(duration.weeks) : 0;
  var days = duration.days ? (0, _index4.default)(duration.days) : 0;
  var hours = duration.hours ? (0, _index4.default)(duration.hours) : 0;
  var minutes = duration.minutes ? (0, _index4.default)(duration.minutes) : 0;
  var seconds = duration.seconds ? (0, _index4.default)(duration.seconds) : 0;

  // Subtract years and months
  var dateWithoutMonths = (0, _index2.default)(date, months + years * 12);

  // Subtract weeks and days
  var dateWithoutDays = (0, _index.default)(dateWithoutMonths, days + weeks * 7);

  // Subtract hours, minutes and seconds
  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1000;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}
module.exports = exports.default;