"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildFormatLongFn/index.js"));
//Source: https://www.unicode.org/cldr/charts/32/summary/gu.html
var dateFormats = {
  full: 'EEEE, d MMMM, y',
  // CLDR #1825
  long: 'd MMMM, y',
  // CLDR #1826
  medium: 'd MMM, y',
  // CLDR #1827
  short: 'd/M/yy' // CLDR #1828
};

var timeFormats = {
  full: 'hh:mm:ss a zzzz',
  // CLDR #1829
  long: 'hh:mm:ss a z',
  // CLDR #1830
  medium: 'hh:mm:ss a',
  // CLDR #1831
  short: 'hh:mm a' // CLDR #1832
};

var dateTimeFormats = {
  full: '{{date}} {{time}}',
  // CLDR #1833
  long: '{{date}} {{time}}',
  // CLDR #1834
  medium: '{{date}} {{time}}',
  // CLDR #1835
  short: '{{date}} {{time}}' // CLDR #1836
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