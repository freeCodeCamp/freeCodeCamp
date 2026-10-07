"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['fvt', 'vt'],
  abbreviated: ['f.v.t.', 'v.t.'],
  wide: ['før vesterlandsk tidsregning', 'vesterlandsk tidsregning']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. kvt.', '2. kvt.', '3. kvt.', '4. kvt.'],
  wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
  wide: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
};

// Note that 'Days - abbreviated - Formatting' has periods at the end.
// https://www.unicode.org/cldr/charts/32/summary/da.html#1760
// This makes grammatical sense in danish, as most abbreviations have periods.
var dayValues = {
  narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  short: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
  abbreviated: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
  wide: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'midnat',
    noon: 'middag',
    morning: 'morgen',
    afternoon: 'eftermiddag',
    evening: 'aften',
    night: 'nat'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnat',
    noon: 'middag',
    morning: 'morgen',
    afternoon: 'eftermiddag',
    evening: 'aften',
    night: 'nat'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnat',
    noon: 'middag',
    morning: 'morgen',
    afternoon: 'eftermiddag',
    evening: 'aften',
    night: 'nat'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'midnat',
    noon: 'middag',
    morning: 'om morgenen',
    afternoon: 'om eftermiddagen',
    evening: 'om aftenen',
    night: 'om natten'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnat',
    noon: 'middag',
    morning: 'om morgenen',
    afternoon: 'om eftermiddagen',
    evening: 'om aftenen',
    night: 'om natten'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnat',
    noon: 'middag',
    morning: 'om morgenen',
    afternoon: 'om eftermiddagen',
    evening: 'om aftenen',
    night: 'om natten'
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