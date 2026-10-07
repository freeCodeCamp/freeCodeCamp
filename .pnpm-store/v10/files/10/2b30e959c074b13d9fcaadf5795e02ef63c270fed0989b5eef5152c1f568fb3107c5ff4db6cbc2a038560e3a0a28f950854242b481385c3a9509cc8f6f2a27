"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subISOWeekYears;
var _index = _interopRequireDefault(require("../addISOWeekYears/index.js"));
var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
/**
 * @name subISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * const result = subISOWeekYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */
function subISOWeekYears(dirtyDate, dirtyAmount) {
  (0, _index2.default)(2, arguments);
  var amount = (0, _index3.default)(dirtyAmount);
  return (0, _index.default)(dirtyDate, -amount);
}
module.exports = exports.default;