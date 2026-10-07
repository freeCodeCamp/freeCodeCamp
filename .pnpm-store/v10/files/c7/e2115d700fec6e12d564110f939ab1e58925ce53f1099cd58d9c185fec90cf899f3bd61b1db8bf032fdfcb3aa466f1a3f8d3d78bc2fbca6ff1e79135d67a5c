"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildFormatLongFn/index.js"));
var dateFormats = {
  full: 'EEEE، do MMMM y',
  long: 'do MMMM y',
  medium: 'd MMM y',
  short: 'dd/MM/yyyy'
};
var timeFormats = {
  full: 'HH:mm:ss',
  long: 'HH:mm:ss',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'مع' {{time}}",
  long: "{{date}} 'مع' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
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