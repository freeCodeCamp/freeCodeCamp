"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['P', 'M'],
  abbreviated: ['PK', 'MK'],
  wide: ['Para Krishtit', 'Mbas Krishtit']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['4-mujori I', '4-mujori II', '4-mujori III', '4-mujori IV']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'S', 'M', 'P', 'M', 'Q', 'K', 'G', 'S', 'T', 'N', 'D'],
  abbreviated: ['Jan', 'Shk', 'Mar', 'Pri', 'Maj', 'Qer', 'Kor', 'Gus', 'Sht', 'Tet', 'Nën', 'Dhj'],
  wide: ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor']
};
var dayValues = {
  narrow: ['D', 'H', 'M', 'M', 'E', 'P', 'S'],
  short: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
  abbreviated: ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht'],
  wide: ['Dielë', 'Hënë', 'Martë', 'Mërkurë', 'Enjte', 'Premte', 'Shtunë']
};
var dayPeriodValues = {
  narrow: {
    am: 'p',
    pm: 'm',
    midnight: 'm',
    noon: 'd',
    morning: 'mëngjes',
    afternoon: 'dite',
    evening: 'mbrëmje',
    night: 'natë'
  },
  abbreviated: {
    am: 'PD',
    pm: 'MD',
    midnight: 'mesnëtë',
    noon: 'drek',
    morning: 'mëngjes',
    afternoon: 'mbasdite',
    evening: 'mbrëmje',
    night: 'natë'
  },
  wide: {
    am: 'p.d.',
    pm: 'm.d.',
    midnight: 'mesnëtë',
    noon: 'drek',
    morning: 'mëngjes',
    afternoon: 'mbasdite',
    evening: 'mbrëmje',
    night: 'natë'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'p',
    pm: 'm',
    midnight: 'm',
    noon: 'd',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë'
  },
  abbreviated: {
    am: 'PD',
    pm: 'MD',
    midnight: 'mesnatë',
    noon: 'drek',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë'
  },
  wide: {
    am: 'p.d.',
    pm: 'm.d.',
    midnight: 'mesnatë',
    noon: 'drek',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  if ((options === null || options === void 0 ? void 0 : options.unit) === 'hour') return String(number);
  if (number === 1) return number + '-rë';
  if (number === 4) return number + 't';
  return number + '-të';
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