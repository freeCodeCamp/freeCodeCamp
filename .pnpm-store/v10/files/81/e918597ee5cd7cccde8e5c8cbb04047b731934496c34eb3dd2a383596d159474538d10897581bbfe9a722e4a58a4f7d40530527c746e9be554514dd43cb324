"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = weeksToDays;
var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index2 = require("../constants/index.js");
/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param {number} weeks - number of weeks to be converted
 *
 * @returns {number} the number of weeks converted in days
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */
function weeksToDays(weeks) {
  (0, _index.default)(1, arguments);
  return Math.floor(weeks * _index2.daysInWeek);
}
module.exports = exports.default;