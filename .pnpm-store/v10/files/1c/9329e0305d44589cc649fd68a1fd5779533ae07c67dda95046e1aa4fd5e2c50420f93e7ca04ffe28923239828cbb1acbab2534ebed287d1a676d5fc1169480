"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['М.А', 'М'],
  abbreviated: ['М.А', 'М'],
  wide: ['Милоддан Аввалги', 'Милодий']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-чор.', '2-чор.', '3-чор.', '4-чор.'],
  wide: ['1-чорак', '2-чорак', '3-чорак', '4-чорак']
};
var monthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  wide: ['январ', 'феврал', 'март', 'апрел', 'май', 'июн', 'июл', 'август', 'сентабр', 'октабр', 'ноябр', 'декабр']
};
var dayValues = {
  narrow: ['Я', 'Д', 'С', 'Ч', 'П', 'Ж', 'Ш'],
  short: ['як', 'ду', 'се', 'чо', 'па', 'жу', 'ша'],
  abbreviated: ['якш', 'душ', 'сеш', 'чор', 'пай', 'жум', 'шан'],
  wide: ['якшанба', 'душанба', 'сешанба', 'чоршанба', 'пайшанба', 'жума', 'шанба']
};
var dayPeriodValues = {
  any: {
    am: 'П.О.',
    pm: 'П.К.',
    midnight: 'ярим тун',
    noon: 'пешин',
    morning: 'эрталаб',
    afternoon: 'пешиндан кейин',
    evening: 'кечаси',
    night: 'тун'
  }
};
var formattingDayPeriodValues = {
  any: {
    am: 'П.О.',
    pm: 'П.К.',
    midnight: 'ярим тун',
    noon: 'пешин',
    morning: 'эрталаб',
    afternoon: 'пешиндан кейин',
    evening: 'кечаси',
    night: 'тун'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  return String(dirtyNumber);
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
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'any'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;