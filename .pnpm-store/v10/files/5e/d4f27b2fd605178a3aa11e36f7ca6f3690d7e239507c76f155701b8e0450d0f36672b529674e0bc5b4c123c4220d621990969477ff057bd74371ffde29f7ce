"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['eaa.', 'jaa.'],
  abbreviated: ['eaa.', 'jaa.'],
  wide: ['ennen ajanlaskun alkua', 'jälkeen ajanlaskun alun']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. kvartaali', '2. kvartaali', '3. kvartaali', '4. kvartaali']
};
var monthValues = {
  narrow: ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
  abbreviated: ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
  wide: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu']
};
var formattingMonthValues = {
  narrow: monthValues.narrow,
  abbreviated: monthValues.abbreviated,
  wide: ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'K', 'T', 'P', 'L'],
  short: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  abbreviated: ['sunn.', 'maan.', 'tiis.', 'kesk.', 'torst.', 'perj.', 'la'],
  wide: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
};
var formattingDayValues = {
  narrow: dayValues.narrow,
  short: dayValues.short,
  abbreviated: dayValues.abbreviated,
  wide: ['sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina']
};
var dayPeriodValues = {
  narrow: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyö',
    noon: 'keskipäivä',
    morning: 'ap',
    afternoon: 'ip',
    evening: 'illalla',
    night: 'yöllä'
  },
  abbreviated: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyö',
    noon: 'keskipäivä',
    morning: 'ap',
    afternoon: 'ip',
    evening: 'illalla',
    night: 'yöllä'
  },
  wide: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyöllä',
    noon: 'keskipäivällä',
    morning: 'aamupäivällä',
    afternoon: 'iltapäivällä',
    evening: 'illalla',
    night: 'yöllä'
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
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;