"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = previousFriday;
var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index2 = _interopRequireDefault(require("../previousDay/index.js"));
/**
 * @name previousFriday
 * @category Weekday Helpers
 * @summary When is the previous Friday?
 *
 * @description
 * When is the previous Friday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Friday before Jun, 19, 2021?
 * const result = previousFriday(new Date(2021, 5, 19))
 * //=> Fri June 18 2021 00:00:00
 */
function previousFriday(date) {
  (0, _index.default)(1, arguments);
  return (0, _index2.default)(date, 5);
}
module.exports = exports.default;