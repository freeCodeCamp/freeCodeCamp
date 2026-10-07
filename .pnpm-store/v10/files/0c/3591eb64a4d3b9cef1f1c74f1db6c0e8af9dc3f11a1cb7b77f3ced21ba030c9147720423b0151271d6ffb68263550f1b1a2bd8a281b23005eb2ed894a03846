"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildFormatLongFn/index.js"));
var dateFormats = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017
  full: "EEEE, 'ngày' d MMMM 'năm' y",
  // ngày 25 tháng 08 năm 2017
  long: "'ngày' d MMMM 'năm' y",
  // 25 thg 08 năm 2017
  medium: "d MMM 'năm' y",
  // 25/08/2017
  short: 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
  full: '{{date}} {{time}}',
  // ngày 25 tháng 08 năm 2017 23:25
  long: '{{date}} {{time}}',
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
};
var formatLong = {
  date: (0, _index.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0, _index.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0, _index.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
var _default = formatLong;
exports.default = _default;
module.exports = exports.default;