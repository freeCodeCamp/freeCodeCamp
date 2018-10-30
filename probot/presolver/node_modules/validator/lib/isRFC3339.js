'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRFC3339;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */

var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;

var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;

var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp('[-+]' + timeHour.source + ':' + timeMinute.source);
var timeOffset = new RegExp('([zZ]|' + timeNumOffset.source + ')');

var partialTime = new RegExp(timeHour.source + ':' + timeMinute.source + ':' + timeSecond.source + timeSecFrac.source);

var fullDate = new RegExp(dateFullYear.source + '-' + dateMonth.source + '-' + dateMDay.source);
var fullTime = new RegExp('' + partialTime.source + timeOffset.source);

var rfc3339 = new RegExp(fullDate.source + '[ tT]' + fullTime.source);

function isRFC3339(str) {
  (0, _assertString2.default)(str);
  return rfc3339.test(str);
}
module.exports = exports['default'];