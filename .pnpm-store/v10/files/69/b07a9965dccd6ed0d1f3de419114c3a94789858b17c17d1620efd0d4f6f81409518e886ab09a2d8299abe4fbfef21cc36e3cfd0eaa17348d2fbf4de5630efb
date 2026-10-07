"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['Q', 'W'],
  abbreviated: ['QK', 'WK'],
  wide: ['qabel Kristu', 'wara Kristu']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1. kwart', '2. kwart', '3. kwart', '4. kwart']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'Ġ', 'L', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', 'Ġun', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Diċ'],
  wide: ['Jannar', 'Frar', 'Marzu', 'April', 'Mejju', 'Ġunju', 'Lulju', 'Awwissu', 'Settembru', 'Ottubru', 'Novembru', 'Diċembru']
};
var dayValues = {
  narrow: ['Ħ', 'T', 'T', 'E', 'Ħ', 'Ġ', 'S'],
  short: ['Ħa', 'Tn', 'Tl', 'Er', 'Ħa', 'Ġi', 'Si'],
  abbreviated: ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'],
  wide: ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'nofsillejl',
    noon: 'nofsinhar',
    morning: 'għodwa',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'lejl'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nofsillejl',
    noon: 'nofsinhar',
    morning: 'għodwa',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'lejl'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'nofsillejl',
    noon: 'nofsinhar',
    morning: 'għodwa',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'lejl'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: 'filgħodu',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'billejl'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: 'filgħodu',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'billejl'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: 'filgħodu',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'billejl'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + 'º';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;