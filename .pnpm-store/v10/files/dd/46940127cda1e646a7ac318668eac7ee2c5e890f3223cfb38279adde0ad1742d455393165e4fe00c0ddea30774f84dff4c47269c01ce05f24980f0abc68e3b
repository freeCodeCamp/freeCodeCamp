"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['p.m.ē', 'm.ē'],
  abbreviated: ['p. m. ē.', 'm. ē.'],
  wide: ['pirms mūsu ēras', 'mūsu ērā']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. cet.', '2. cet.', '3. cet.', '4. cet.'],
  wide: ['pirmais ceturksnis', 'otrais ceturksnis', 'trešais ceturksnis', 'ceturtais ceturksnis']
};
var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. cet.', '2. cet.', '3. cet.', '4. cet.'],
  wide: ['pirmajā ceturksnī', 'otrajā ceturksnī', 'trešajā ceturksnī', 'ceturtajā ceturksnī']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'febr.', 'marts', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
  wide: ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris']
};
var formattingMonthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'febr.', 'martā', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
  wide: ['janvārī', 'februārī', 'martā', 'aprīlī', 'maijā', 'jūnijā', 'jūlijā', 'augustā', 'septembrī', 'oktobrī', 'novembrī', 'decembrī']
};
var dayValues = {
  narrow: ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
  short: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S'],
  abbreviated: ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
  wide: ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena']
};
var formattingDayValues = {
  narrow: ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
  short: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S'],
  abbreviated: ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
  wide: ['svētdienā', 'pirmdienā', 'otrdienā', 'trešdienā', 'ceturtdienā', 'piektdienā', 'sestdienā']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rīts',
    afternoon: 'diena',
    evening: 'vakars',
    night: 'nakts'
  },
  abbreviated: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rīts',
    afternoon: 'pēcpusd.',
    evening: 'vakars',
    night: 'nakts'
  },
  wide: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusnakts',
    noon: 'pusdienlaiks',
    morning: 'rīts',
    afternoon: 'pēcpusdiena',
    evening: 'vakars',
    night: 'nakts'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rītā',
    afternoon: 'dienā',
    evening: 'vakarā',
    night: 'naktī'
  },
  abbreviated: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rītā',
    afternoon: 'pēcpusd.',
    evening: 'vakarā',
    night: 'naktī'
  },
  wide: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusnaktī',
    noon: 'pusdienlaikā',
    morning: 'rītā',
    afternoon: 'pēcpusdienā',
    evening: 'vakarā',
    night: 'naktī'
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: 'wide',
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
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
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