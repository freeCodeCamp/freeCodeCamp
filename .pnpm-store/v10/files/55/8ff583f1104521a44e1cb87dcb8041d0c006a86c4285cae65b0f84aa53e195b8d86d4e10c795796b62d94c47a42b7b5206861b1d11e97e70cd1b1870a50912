"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextDay;
var _index = _interopRequireDefault(require("../addDays/index.js"));
var _index2 = _interopRequireDefault(require("../getDay/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {Day} day - day of the week
 * @returns {Date} - the date is the next day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */
function nextDay(date, day) {
  (0, _index3.default)(2, arguments);
  var delta = day - (0, _index2.default)(date);
  if (delta <= 0) delta += 7;
  return (0, _index.default)(date, delta);
}
module.exports = exports.default;