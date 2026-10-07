"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['C', 'O'],
  abbreviated: ['CC', 'OC'],
  wide: ['Cyn Crist', 'Ar ôl Crist']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Ch1', 'Ch2', 'Ch3', 'Ch4'],
  wide: ['Chwarter 1af', '2ail chwarter', '3ydd chwarter', '4ydd chwarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['I', 'Ch', 'Ma', 'E', 'Mi', 'Me', 'G', 'A', 'Md', 'H', 'T', 'Rh'],
  abbreviated: ['Ion', 'Chwe', 'Maw', 'Ebr', 'Mai', 'Meh', 'Gor', 'Aws', 'Med', 'Hyd', 'Tach', 'Rhag'],
  wide: ['Ionawr', 'Chwefror', 'Mawrth', 'Ebrill', 'Mai', 'Mehefin', 'Gorffennaf', 'Awst', 'Medi', 'Hydref', 'Tachwedd', 'Rhagfyr']
};
var dayValues = {
  narrow: ['S', 'Ll', 'M', 'M', 'I', 'G', 'S'],
  short: ['Su', 'Ll', 'Ma', 'Me', 'Ia', 'Gw', 'Sa'],
  abbreviated: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
  wide: ['dydd Sul', 'dydd Llun', 'dydd Mawrth', 'dydd Mercher', 'dydd Iau', 'dydd Gwener', 'dydd Sadwrn']
};
var dayPeriodValues = {
  narrow: {
    am: 'b',
    pm: 'h',
    midnight: 'hn',
    noon: 'hd',
    morning: 'bore',
    afternoon: 'prynhawn',
    evening: "gyda'r nos",
    night: 'nos'
  },
  abbreviated: {
    am: 'yb',
    pm: 'yh',
    midnight: 'hanner nos',
    noon: 'hanner dydd',
    morning: 'bore',
    afternoon: 'prynhawn',
    evening: "gyda'r nos",
    night: 'nos'
  },
  wide: {
    am: 'y.b.',
    pm: 'y.h.',
    midnight: 'hanner nos',
    noon: 'hanner dydd',
    morning: 'bore',
    afternoon: 'prynhawn',
    evening: "gyda'r nos",
    night: 'nos'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'b',
    pm: 'h',
    midnight: 'hn',
    noon: 'hd',
    morning: 'yn y bore',
    afternoon: 'yn y prynhawn',
    evening: "gyda'r nos",
    night: 'yn y nos'
  },
  abbreviated: {
    am: 'yb',
    pm: 'yh',
    midnight: 'hanner nos',
    noon: 'hanner dydd',
    morning: 'yn y bore',
    afternoon: 'yn y prynhawn',
    evening: "gyda'r nos",
    night: 'yn y nos'
  },
  wide: {
    am: 'y.b.',
    pm: 'y.h.',
    midnight: 'hanner nos',
    noon: 'hanner dydd',
    morning: 'yn y bore',
    afternoon: 'yn y prynhawn',
    evening: "gyda'r nos",
    night: 'yn y nos'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  if (number < 20) {
    switch (number) {
      case 0:
        return number + 'fed';
      case 1:
        return number + 'af';
      case 2:
        return number + 'ail';
      case 3:
      case 4:
        return number + 'ydd';
      case 5:
      case 6:
        return number + 'ed';
      case 7:
      case 8:
      case 9:
      case 10:
      case 12:
      case 15:
      case 18:
        return number + 'fed';
      case 11:
      case 13:
      case 14:
      case 16:
      case 17:
      case 19:
        return number + 'eg';
    }
  } else if (number >= 50 && number <= 60 || number === 80 || number >= 100) {
    return number + 'fed';
  }
  return number + 'ain';
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