"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachWeekOfInterval;
var _index = _interopRequireDefault(require("../addWeeks/index.js"));
var _index2 = _interopRequireDefault(require("../startOfWeek/index.js"));
var _index3 = _interopRequireDefault(require("../toDate/index.js"));
var _index4 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date[]} the array with starts of weeks from the week of the interval start to the week of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be 0, 1, ..., 6
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */
function eachWeekOfInterval(dirtyInterval, options) {
  (0, _index4.default)(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = (0, _index3.default)(interval.start);
  var endDate = (0, _index3.default)(interval.end);
  var endTime = endDate.getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }
  var startDateWeek = (0, _index2.default)(startDate, options);
  var endDateWeek = (0, _index2.default)(endDate, options);

  // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
  startDateWeek.setHours(15);
  endDateWeek.setHours(15);
  endTime = endDateWeek.getTime();
  var weeks = [];
  var currentWeek = startDateWeek;
  while (currentWeek.getTime() <= endTime) {
    currentWeek.setHours(0);
    weeks.push((0, _index3.default)(currentWeek));
    currentWeek = (0, _index.default)(currentWeek, 1);
    currentWeek.setHours(15);
  }
  return weeks;
}
module.exports = exports.default;