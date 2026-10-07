"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = daysToWeeks;
var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index2 = require("../constants/index.js");
/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * @param {number} days - number of days to be converted
 *
 * @returns {number} the number of days converted in weeks
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */
function daysToWeeks(days) {
  (0, _index.default)(1, arguments);
  var weeks = days / _index2.daysInWeek;
  return Math.floor(weeks);
}
module.exports = exports.default;