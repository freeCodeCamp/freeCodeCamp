"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysInYear;
var _index = _interopRequireDefault(require("../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../isLeapYear/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear(dirtyDate) {
  (0, _index3.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  if (String(new Date(date)) === 'Invalid Date') {
    return NaN;
  }
  return (0, _index2.default)(date) ? 366 : 365;
}
module.exports = exports.default;