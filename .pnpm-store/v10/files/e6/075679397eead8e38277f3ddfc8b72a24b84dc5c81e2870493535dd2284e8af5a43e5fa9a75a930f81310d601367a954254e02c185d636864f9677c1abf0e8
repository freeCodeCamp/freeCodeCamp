"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = millisecondsToSeconds;
var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index2 = require("../constants/index.js");
/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param {number} milliseconds - number of milliseconds to be converted
 *
 * @returns {number} the number of milliseconds converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 1000 miliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */
function millisecondsToSeconds(milliseconds) {
  (0, _index.default)(1, arguments);
  var seconds = milliseconds / _index2.millisecondsInSecond;
  return Math.floor(seconds);
}
module.exports = exports.default;