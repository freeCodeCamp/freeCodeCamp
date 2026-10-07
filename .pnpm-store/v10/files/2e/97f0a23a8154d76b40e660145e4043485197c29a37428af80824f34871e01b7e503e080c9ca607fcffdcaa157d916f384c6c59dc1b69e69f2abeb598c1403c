"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addSeconds;
var _index = _interopRequireDefault(require("../_lib/toInteger/index.js"));
var _index2 = _interopRequireDefault(require("../addMilliseconds/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds(dirtyDate, dirtyAmount) {
  (0, _index3.default)(2, arguments);
  var amount = (0, _index.default)(dirtyAmount);
  return (0, _index2.default)(dirtyDate, amount * 1000);
}
module.exports = exports.default;