"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = roundToNearestMinutes;
var _index = _interopRequireDefault(require("../toDate/index.js"));
var _index2 = require("../_lib/roundingMethods/index.js");
var _index3 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * @param {Date|Number} date - the date to round
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.nearestTo=1] - nearest number of minutes to round to. E.g. `15` to round to quarter hours.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Date} the new date rounded to the closest minute
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.nearestTo` must be between 1 and 30
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:07:30 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * // rounds up because given date is exactly between 12:00:00 and 12:15:00
 * //=> Thu Jul 10 2014 12:15:00
 */
function roundToNearestMinutes(dirtyDate, options) {
  var _options$nearestTo;
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only none provided present');
  }
  var nearestTo = (0, _index3.default)((_options$nearestTo = options === null || options === void 0 ? void 0 : options.nearestTo) !== null && _options$nearestTo !== void 0 ? _options$nearestTo : 1);
  if (nearestTo < 1 || nearestTo > 30) {
    throw new RangeError('`options.nearestTo` must be between 1 and 30');
  }
  var date = (0, _index.default)(dirtyDate);
  var seconds = date.getSeconds(); // relevant if nearestTo is 1, which is the default case
  var minutes = date.getMinutes() + seconds / 60;
  var roundingMethod = (0, _index2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod);
  var roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  var remainderMinutes = minutes % nearestTo;
  var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), roundedMinutes + addedMinutes);
}
module.exports = exports.default;