"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildFormatLongFn/index.js"));
// Source: https://www.unicode.org/cldr/charts/32/summary/te.html
// CLDR #1807 - #1811
var dateFormats = {
  full: 'd, MMMM y, EEEE',
  long: 'd MMMM, y',
  medium: 'd MMM, y',
  short: 'dd-MM-yy'
};

// CLDR #1807 - #1811
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};

// CLDR #1815 - #1818
var dateTimeFormats = {
  full: "{{date}} {{time}}'కి'",
  long: "{{date}} {{time}}'కి'",
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