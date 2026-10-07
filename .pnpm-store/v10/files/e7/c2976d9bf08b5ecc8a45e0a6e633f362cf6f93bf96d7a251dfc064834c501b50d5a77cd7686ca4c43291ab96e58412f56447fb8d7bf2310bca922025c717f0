"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['ab. J.C.', 'apr. J.C.'],
  abbreviated: ['ab. J.C.', 'apr. J.C.'],
  wide: ['abans Jèsus-Crist', 'après Jèsus-Crist']
};
var quarterValues = {
  narrow: ['T1', 'T2', 'T3', 'T4'],
  abbreviated: ['1èr trim.', '2nd trim.', '3en trim.', '4en trim.'],
  wide: ['1èr trimèstre', '2nd trimèstre', '3en trimèstre', '4en trimèstre']
};
var monthValues = {
  narrow: ['GN', 'FB', 'MÇ', 'AB', 'MA', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DC'],
  abbreviated: ['gen.', 'febr.', 'març', 'abr.', 'mai', 'junh', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'dec.'],
  wide: ['genièr', 'febrièr', 'març', 'abril', 'mai', 'junh', 'julhet', 'agost', 'setembre', 'octòbre', 'novembre', 'decembre']
};
var dayValues = {
  narrow: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  short: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  abbreviated: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  wide: ['dimenge', 'diluns', 'dimars', 'dimècres', 'dijòus', 'divendres', 'dissabte']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  },
  abbreviated: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  },
  wide: {
    am: 'ante meridiem',
    pm: 'post meridiem',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  var ordinal;
  switch (number) {
    case 1:
      ordinal = 'èr';
      break;
    case 2:
      ordinal = 'nd';
      break;
    default:
      ordinal = 'en';
  }

  // feminine for year, week, hour, minute, second
  if (unit === 'year' || unit === 'week' || unit === 'hour' || unit === 'minute' || unit === 'second') {
    ordinal += 'a';
  }
  return number + ordinal;
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