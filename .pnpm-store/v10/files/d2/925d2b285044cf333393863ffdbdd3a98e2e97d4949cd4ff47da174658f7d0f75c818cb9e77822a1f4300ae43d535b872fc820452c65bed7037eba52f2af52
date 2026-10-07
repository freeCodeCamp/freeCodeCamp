"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['до н.е.', 'н.е.'],
  abbreviated: ['до н. е.', 'н. е.'],
  wide: ['до нашої ери', 'нашої ери']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'],
  wide: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал']
};
var monthValues = {
  // ДСТУ 3582:2013
  narrow: ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г'],
  abbreviated: ['січ.', 'лют.', 'берез.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'верес.', 'жовт.', 'листоп.', 'груд.'],
  wide: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']
};
var formattingMonthValues = {
  narrow: ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г'],
  abbreviated: ['січ.', 'лют.', 'берез.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'верес.', 'жовт.', 'листоп.', 'груд.'],
  wide: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']
};
var dayValues = {
  narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  abbreviated: ['нед', 'пон', 'вів', 'сер', 'чтв', 'птн', 'суб'],
  wide: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота']
};
var dayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'півн.',
    noon: 'пол.',
    morning: 'ранок',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ніч'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'півн.',
    noon: 'пол.',
    morning: 'ранок',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ніч'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'північ',
    noon: 'полудень',
    morning: 'ранок',
    afternoon: 'день',
    evening: 'вечір',
    night: 'ніч'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'півн.',
    noon: 'пол.',
    morning: 'ранку',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночі'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'півн.',
    noon: 'пол.',
    morning: 'ранку',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночі'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'північ',
    noon: 'полудень',
    morning: 'ранку',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночі'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  var number = Number(dirtyNumber);
  var suffix;
  if (unit === 'date') {
    if (number === 3 || number === 23) {
      suffix = '-є';
    } else {
      suffix = '-е';
    }
  } else if (unit === 'minute' || unit === 'second' || unit === 'hour') {
    suffix = '-а';
  } else {
    suffix = '-й';
  }
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