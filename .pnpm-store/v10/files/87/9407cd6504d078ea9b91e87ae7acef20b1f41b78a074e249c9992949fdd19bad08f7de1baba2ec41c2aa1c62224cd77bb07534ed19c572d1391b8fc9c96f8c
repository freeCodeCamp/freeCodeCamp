"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLastDayOfMonth;
var _index = _interopRequireDefault(require("../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../endOfDay/index.js"));
var _index3 = _interopRequireDefault(require("../endOfMonth/index.js"));
var _index4 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(dirtyDate) {
  (0, _index4.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  return (0, _index2.default)(date).getTime() === (0, _index3.default)(date).getTime();
}
module.exports = exports.default;