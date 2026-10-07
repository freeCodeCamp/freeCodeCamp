"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minutesToSeconds;
var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index2 = require("../constants/index.js");
/**
 * @name minutesToSeconds
 * @category Conversion Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert a number of minutes to a full number of seconds.
 *
 * @param { number } minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 minutes to seconds
 * const result = minutesToSeconds(2)
 * //=> 120
 */
function minutesToSeconds(minutes) {
  (0, _index.default)(1, arguments);
  return Math.floor(minutes * _index2.secondsInMinute);
}
module.exports = exports.default;