"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatISODuration;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param {Duration} duration - the duration to format
 *
 * @returns {String} The ISO 8601 duration string
 * @throws {TypeError} Requires 1 argument
 * @throws {Error} Argument must be an object
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */
function formatISODuration(duration) {
  (0, _index.default)(1, arguments);
  if ((0, _typeof2.default)(duration) !== 'object') throw new Error('Duration must be an object');
  var _duration$years = duration.years,
    years = _duration$years === void 0 ? 0 : _duration$years,
    _duration$months = duration.months,
    months = _duration$months === void 0 ? 0 : _duration$months,
    _duration$days = duration.days,
    days = _duration$days === void 0 ? 0 : _duration$days,
    _duration$hours = duration.hours,
    hours = _duration$hours === void 0 ? 0 : _duration$hours,
    _duration$minutes = duration.minutes,
    minutes = _duration$minutes === void 0 ? 0 : _duration$minutes,
    _duration$seconds = duration.seconds,
    seconds = _duration$seconds === void 0 ? 0 : _duration$seconds;
  return "P".concat(years, "Y").concat(months, "M").concat(days, "DT").concat(hours, "H").concat(minutes, "M").concat(seconds, "S");
}
module.exports = exports.default;