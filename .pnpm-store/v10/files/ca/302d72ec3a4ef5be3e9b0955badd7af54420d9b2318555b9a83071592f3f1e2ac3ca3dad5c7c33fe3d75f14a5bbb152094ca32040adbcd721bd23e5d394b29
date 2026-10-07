"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInHours;
var _index = require("../constants/index.js");
var _index2 = _interopRequireDefault(require("../differenceInMilliseconds/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
var _index4 = require("../_lib/roundingMethods/index.js");
/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(dateLeft, dateRight, options) {
  (0, _index3.default)(2, arguments);
  var diff = (0, _index2.default)(dateLeft, dateRight) / _index.millisecondsInHour;
  return (0, _index4.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
module.exports = exports.default;