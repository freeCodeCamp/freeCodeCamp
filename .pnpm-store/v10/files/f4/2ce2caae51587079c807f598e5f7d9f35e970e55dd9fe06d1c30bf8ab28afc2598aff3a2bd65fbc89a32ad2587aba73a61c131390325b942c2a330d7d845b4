"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isThisSecond;
var _index = _interopRequireDefault(require("../isSameSecond/index.js"));
var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * const result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
function isThisSecond(dirtyDate) {
  (0, _index2.default)(1, arguments);
  return (0, _index.default)(Date.now(), dirtyDate);
}
module.exports = exports.default;