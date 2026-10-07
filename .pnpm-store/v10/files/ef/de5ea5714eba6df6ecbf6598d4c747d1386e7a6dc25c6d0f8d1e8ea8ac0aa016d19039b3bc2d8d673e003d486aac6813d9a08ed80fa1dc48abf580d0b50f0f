"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = min;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _index = _interopRequireDefault(require("../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} - the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */
function min(dirtyDatesArray) {
  (0, _index2.default)(1, arguments);
  var datesArray;
  // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;
    // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if ((0, _typeof2.default)(dirtyDatesArray) === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }
  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0, _index.default)(dirtyDate);
    if (result === undefined || result > currentDate || isNaN(currentDate.getDate())) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}
module.exports = exports.default;