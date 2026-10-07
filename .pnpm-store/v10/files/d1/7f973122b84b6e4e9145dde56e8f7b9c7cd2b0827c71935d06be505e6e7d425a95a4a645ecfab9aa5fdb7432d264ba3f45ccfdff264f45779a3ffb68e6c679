"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['б.з.д.', 'б.з.'],
  abbreviated: ['б.з.д.', 'б.з.'],
  wide: ['біздің заманымызға дейін', 'біздің заманымыз']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ші тоқ.', '2-ші тоқ.', '3-ші тоқ.', '4-ші тоқ.'],
  wide: ['1-ші тоқсан', '2-ші тоқсан', '3-ші тоқсан', '4-ші тоқсан']
};
var monthValues = {
  narrow: ['Қ', 'А', 'Н', 'С', 'М', 'М', 'Ш', 'Т', 'Қ', 'Қ', 'Қ', 'Ж'],
  abbreviated: ['қаң', 'ақп', 'нау', 'сәу', 'мам', 'мау', 'шіл', 'там', 'қыр', 'қаз', 'қар', 'жел'],
  wide: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан']
};
var formattingMonthValues = {
  narrow: ['Қ', 'А', 'Н', 'С', 'М', 'М', 'Ш', 'Т', 'Қ', 'Қ', 'Қ', 'Ж'],
  abbreviated: ['қаң', 'ақп', 'нау', 'сәу', 'мам', 'мау', 'шіл', 'там', 'қыр', 'қаз', 'қар', 'жел'],
  wide: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан']
};
var dayValues = {
  narrow: ['Ж', 'Д', 'С', 'С', 'Б', 'Ж', 'С'],
  short: ['жс', 'дс', 'сс', 'ср', 'бс', 'жм', 'сб'],
  abbreviated: ['жс', 'дс', 'сс', 'ср', 'бс', 'жм', 'сб'],
  wide: ['жексенбі', 'дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі']
};
var dayPeriodValues = {
  narrow: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасы',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күндіз',
    evening: 'кеш',
    night: 'түн'
  },
  wide: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасы',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күндіз',
    evening: 'кеш',
    night: 'түн'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасында',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күн',
    evening: 'кеш',
    night: 'түн'
  },
  wide: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасында',
    noon: 'түсте',
    morning: 'таңертең',
    afternoon: 'күндіз',
    evening: 'кеште',
    night: 'түнде'
  }
};
var suffixes = {
  0: '-ші',
  1: '-ші',
  2: '-ші',
  3: '-ші',
  4: '-ші',
  5: '-ші',
  6: '-шы',
  7: '-ші',
  8: '-ші',
  9: '-шы',
  10: '-шы',
  20: '-шы',
  30: '-шы',
  40: '-шы',
  50: '-ші',
  60: '-шы',
  70: '-ші',
  80: '-ші',
  90: '-шы',
  100: '-ші'
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var mod10 = number % 10;
  var b = number >= 100 ? 100 : null;
  var suffix = suffixes[number] || suffixes[mod10] || b && suffixes[b] || '';
  return number + suffix;
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
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;