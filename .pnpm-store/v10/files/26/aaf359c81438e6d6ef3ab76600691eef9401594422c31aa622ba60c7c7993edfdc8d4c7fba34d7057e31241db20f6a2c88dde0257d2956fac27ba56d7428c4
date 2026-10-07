"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['aK', 'pK'],
  abbreviated: ['a.K.E.', 'p.K.E.'],
  wide: ['antaŭ Komuna Erao', 'Komuna Erao']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1-a kvaronjaro', '2-a kvaronjaro', '3-a kvaronjaro', '4-a kvaronjaro']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'M', 'Ĵ', 'V', 'S'],
  short: ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa'],
  abbreviated: ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab'],
  wide: ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'noktomezo',
    noon: 'tagmezo',
    morning: 'matene',
    afternoon: 'posttagmeze',
    evening: 'vespere',
    night: 'nokte'
  },
  abbreviated: {
    am: 'a.t.m.',
    pm: 'p.t.m.',
    midnight: 'noktomezo',
    noon: 'tagmezo',
    morning: 'matene',
    afternoon: 'posttagmeze',
    evening: 'vespere',
    night: 'nokte'
  },
  wide: {
    am: 'antaŭtagmeze',
    pm: 'posttagmeze',
    midnight: 'noktomezo',
    noon: 'tagmezo',
    morning: 'matene',
    afternoon: 'posttagmeze',
    evening: 'vespere',
    night: 'nokte'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + '-a';
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
      return Number(quarter) - 1;
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
    defaultWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;