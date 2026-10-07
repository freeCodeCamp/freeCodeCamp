"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEqual;
var _index = _interopRequireDefault(require("../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(dirtyLeftDate, dirtyRightDate) {
  (0, _index2.default)(2, arguments);
  var dateLeft = (0, _index.default)(dirtyLeftDate);
  var dateRight = (0, _index.default)(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}
module.exports = exports.default;