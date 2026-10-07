"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intervalToDuration;
var _index = _interopRequireDefault(require("../compareAsc/index.js"));
var _index2 = _interopRequireDefault(require("../add/index.js"));
var _index3 = _interopRequireDefault(require("../differenceInDays/index.js"));
var _index4 = _interopRequireDefault(require("../differenceInHours/index.js"));
var _index5 = _interopRequireDefault(require("../differenceInMinutes/index.js"));
var _index6 = _interopRequireDefault(require("../differenceInMonths/index.js"));
var _index7 = _interopRequireDefault(require("../differenceInSeconds/index.js"));
var _index8 = _interopRequireDefault(require("../differenceInYears/index.js"));
var _index9 = _interopRequireDefault(require("../toDate/index.js"));
var _index10 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @param {Interval} interval - the interval to convert to duration
 *
 * @returns {Duration} The duration Object
 * @throws {TypeError} Requires 2 arguments
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */
function intervalToDuration(interval) {
  (0, _index10.default)(1, arguments);
  var start = (0, _index9.default)(interval.start);
  var end = (0, _index9.default)(interval.end);
  if (isNaN(start.getTime())) throw new RangeError('Start Date is invalid');
  if (isNaN(end.getTime())) throw new RangeError('End Date is invalid');
  var duration = {};
  duration.years = Math.abs((0, _index8.default)(end, start));
  var sign = (0, _index.default)(end, start);
  var remainingMonths = (0, _index2.default)(start, {
    years: sign * duration.years
  });
  duration.months = Math.abs((0, _index6.default)(end, remainingMonths));
  var remainingDays = (0, _index2.default)(remainingMonths, {
    months: sign * duration.months
  });
  duration.days = Math.abs((0, _index3.default)(end, remainingDays));
  var remainingHours = (0, _index2.default)(remainingDays, {
    days: sign * duration.days
  });
  duration.hours = Math.abs((0, _index4.default)(end, remainingHours));
  var remainingMinutes = (0, _index2.default)(remainingHours, {
    hours: sign * duration.hours
  });
  duration.minutes = Math.abs((0, _index5.default)(end, remainingMinutes));
  var remainingSeconds = (0, _index2.default)(remainingMinutes, {
    minutes: sign * duration.minutes
  });
  duration.seconds = Math.abs((0, _index7.default)(end, remainingSeconds));
  return duration;
}
module.exports = exports.default;