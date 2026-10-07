"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildFormatLongFn/index.js"));
var dateFormats = {
  full: 'EEEE, do MMMM, y',
  // CLDR #1787
  long: 'do MMMM, y',
  // CLDR #1788
  medium: 'd MMM, y',
  // CLDR #1789
  short: 'dd/MM/yyyy' // CLDR #1790
};

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  // CLDR #1791
  long: 'h:mm:ss a z',
  // CLDR #1792
  medium: 'h:mm:ss a',
  // CLDR #1793
  short: 'h:mm a' // CLDR #1794
};

var dateTimeFormats = {
  full: "{{date}} 'को' {{time}}",
  // CLDR #1795
  long: "{{date}} 'को' {{time}}",
  // CLDR #1796
  medium: '{{date}}, {{time}}',
  // CLDR #1797
  short: '{{date}}, {{time}}' // CLDR #1798
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