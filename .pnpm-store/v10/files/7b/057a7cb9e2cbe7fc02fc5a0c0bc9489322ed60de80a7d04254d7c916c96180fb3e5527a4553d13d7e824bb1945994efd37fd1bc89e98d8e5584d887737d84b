"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRFC3339;
var _index = _interopRequireDefault(require("../toDate/index.js"));
var _index2 = _interopRequireDefault(require("../isValid/index.js"));
var _index3 = _interopRequireDefault(require("../_lib/addLeadingZeros/index.js"));
var _index4 = _interopRequireDefault(require("../_lib/toInteger/index.js"));
/**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3} [options.fractionDigits=0] - number of digits after the decimal point after seconds
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.fractionDigits` must be between 0 and 3
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 2 digits of second fraction:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 2 })
 * //=> '2019-09-18T19:00:52.23Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 3 })
 * //=> '2019-09-18T19:00:52.234Z'
 */
function formatRFC3339(dirtyDate, options) {
  var _options$fractionDigi;
  if (arguments.length < 1) {
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  }
  var originalDate = (0, _index.default)(dirtyDate);
  if (!(0, _index2.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  }
  var fractionDigits = Number((_options$fractionDigi = options === null || options === void 0 ? void 0 : options.fractionDigits) !== null && _options$fractionDigi !== void 0 ? _options$fractionDigi : 0);

  // Test if fractionDigits is between 0 and 3 _and_ is not NaN
  if (!(fractionDigits >= 0 && fractionDigits <= 3)) {
    throw new RangeError('fractionDigits must be between 0 and 3 inclusively');
  }
  var day = (0, _index3.default)(originalDate.getDate(), 2);
  var month = (0, _index3.default)(originalDate.getMonth() + 1, 2);
  var year = originalDate.getFullYear();
  var hour = (0, _index3.default)(originalDate.getHours(), 2);
  var minute = (0, _index3.default)(originalDate.getMinutes(), 2);
  var second = (0, _index3.default)(originalDate.getSeconds(), 2);
  var fractionalSecond = '';
  if (fractionDigits > 0) {
    var milliseconds = originalDate.getMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, fractionDigits - 3));
    fractionalSecond = '.' + (0, _index3.default)(fractionalSeconds, fractionDigits);
  }
  var offset = '';
  var tzOffset = originalDate.getTimezoneOffset();
  if (tzOffset !== 0) {
    var absoluteOffset = Math.abs(tzOffset);
    var hourOffset = (0, _index3.default)((0, _index4.default)(absoluteOffset / 60), 2);
    var minuteOffset = (0, _index3.default)(absoluteOffset % 60, 2);
    // If less than 0, the sign is +, because it is ahead of time.
    var sign = tzOffset < 0 ? '+' : '-';
    offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
  } else {
    offset = 'Z';
  }
  return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second).concat(fractionalSecond).concat(offset);
}
module.exports = exports.default;