"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameISOWeek;
var _index = _interopRequireDefault(require("../isSameWeek/index.js"));
var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */
function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
  (0, _index2.default)(2, arguments);
  return (0, _index.default)(dirtyDateLeft, dirtyDateRight, {
    weekStartsOn: 1
  });
}
module.exports = exports.default;