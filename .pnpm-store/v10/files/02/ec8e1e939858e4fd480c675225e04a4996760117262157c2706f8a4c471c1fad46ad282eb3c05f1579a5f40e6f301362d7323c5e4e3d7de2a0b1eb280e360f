"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setHours;
var _index = _interopRequireDefault(require("../_lib/toInteger/index.js"));
var _index2 = _interopRequireDefault(require("../toDate/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));
/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours(dirtyDate, dirtyHours) {
  (0, _index3.default)(2, arguments);
  var date = (0, _index2.default)(dirtyDate);
  var hours = (0, _index.default)(dirtyHours);
  date.setHours(hours);
  return date;
}
module.exports = exports.default;