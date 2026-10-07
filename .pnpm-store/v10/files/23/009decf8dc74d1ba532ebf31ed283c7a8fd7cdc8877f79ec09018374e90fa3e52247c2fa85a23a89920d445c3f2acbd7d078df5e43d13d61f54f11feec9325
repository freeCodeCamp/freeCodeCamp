"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subDays;
var _index = _interopRequireDefault(require("../addDays/index.js"));
var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(dirtyDate, dirtyAmount) {
  (0, _index2.default)(2, arguments);
  var amount = (0, _index3.default)(dirtyAmount);
  return (0, _index.default)(dirtyDate, -amount);
}
module.exports = exports.default;