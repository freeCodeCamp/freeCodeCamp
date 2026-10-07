"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = add;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _index = _interopRequireDefault(require("../addDays/index.js"));
var _index2 = _interopRequireDefault(require("../addMonths/index.js"));
var _index3 = _interopRequireDefault(require("../toDate/index.js"));
var _index4 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index5 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0, _index4.default)(2, arguments);
  if (!duration || (0, _typeof2.default)(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0, _index5.default)(duration.years) : 0;
  var months = duration.months ? (0, _index5.default)(duration.months) : 0;
  var weeks = duration.weeks ? (0, _index5.default)(duration.weeks) : 0;
  var days = duration.days ? (0, _index5.default)(duration.days) : 0;
  var hours = duration.hours ? (0, _index5.default)(duration.hours) : 0;
  var minutes = duration.minutes ? (0, _index5.default)(duration.minutes) : 0;
  var seconds = duration.seconds ? (0, _index5.default)(duration.seconds) : 0;

  // Add years and months
  var date = (0, _index3.default)(dirtyDate);
  var dateWithMonths = months || years ? (0, _index2.default)(date, months + years * 12) : date;

  // Add weeks and days
  var dateWithDays = days || weeks ? (0, _index.default)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}
module.exports = exports.default;