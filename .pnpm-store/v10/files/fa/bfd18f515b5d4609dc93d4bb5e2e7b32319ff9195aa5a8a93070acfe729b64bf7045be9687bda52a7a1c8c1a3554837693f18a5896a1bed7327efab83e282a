"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameISOWeekYear;
var _index = _interopRequireDefault(require("../startOfISOWeekYear/index.js"));
var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * const result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */
function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight) {
  (0, _index2.default)(2, arguments);
  var dateLeftStartOfYear = (0, _index.default)(dirtyDateLeft);
  var dateRightStartOfYear = (0, _index.default)(dirtyDateRight);
  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}
module.exports = exports.default;