"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['aC', 'dC'],
  abbreviated: ['a.C.', 'd.C.'],
  wide: ['avanti Cristo', 'dopo Cristo']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
};
var monthValues = {
  narrow: ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  wide: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
  short: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  abbreviated: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  wide: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato']
};
var dayPeriodValues = {
  narrow: {
    am: 'm.',
    pm: 'p.',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'm.',
    pm: 'p.',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return String(number);
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