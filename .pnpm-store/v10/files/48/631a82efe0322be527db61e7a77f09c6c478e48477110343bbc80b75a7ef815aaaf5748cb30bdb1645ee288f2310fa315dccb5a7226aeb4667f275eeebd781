"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['př. n. l.', 'n. l.'],
  abbreviated: ['př. n. l.', 'n. l.'],
  wide: ['před naším letopočtem', 'našeho letopočtu']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. čtvrtletí', '2. čtvrtletí', '3. čtvrtletí', '4. čtvrtletí'],
  wide: ['1. čtvrtletí', '2. čtvrtletí', '3. čtvrtletí', '4. čtvrtletí']
};
var monthValues = {
  narrow: ['L', 'Ú', 'B', 'D', 'K', 'Č', 'Č', 'S', 'Z', 'Ř', 'L', 'P'],
  abbreviated: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
  wide: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
};
var formattingMonthValues = {
  narrow: ['L', 'Ú', 'B', 'D', 'K', 'Č', 'Č', 'S', 'Z', 'Ř', 'L', 'P'],
  abbreviated: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
  wide: ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince']
};
var dayValues = {
  narrow: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  short: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  abbreviated: ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob'],
  wide: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
};
var dayPeriodValues = {
  narrow: {
    am: 'dop.',
    pm: 'odp.',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'odp.',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  },
  wide: {
    am: 'dopoledne',
    pm: 'odpoledne',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'dop.',
    pm: 'odp.',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'odp.',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  },
  wide: {
    am: 'dopoledne',
    pm: 'odpoledne',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + '.';
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
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
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