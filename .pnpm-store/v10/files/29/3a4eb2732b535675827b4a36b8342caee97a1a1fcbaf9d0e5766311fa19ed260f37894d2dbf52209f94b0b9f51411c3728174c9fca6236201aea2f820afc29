import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['pr.n.e.', 'AD'],
  abbreviated: ['pr. Hr.', 'po. Hr.'],
  wide: ['Pre Hrista', 'Posle Hrista']
};
var quarterValues = {
  narrow: ['1.', '2.', '3.', '4.'],
  abbreviated: ['1. kv.', '2. kv.', '3. kv.', '4. kv.'],
  wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal']
};
var monthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar']
};
var formattingMonthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar']
};
var dayValues = {
  narrow: ['N', 'P', 'U', 'S', 'Č', 'P', 'S'],
  short: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  abbreviated: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  wide: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota']
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'popodne',
    evening: 'uveče',
    night: 'noću'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'popodne',
    evening: 'uveče',
    night: 'noću'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'posle podne',
    evening: 'uveče',
    night: 'noću'
  }
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'popodne',
    evening: 'uveče',
    night: 'noću'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'popodne',
    evening: 'uveče',
    night: 'noću'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'posle podne',
    evening: 'uveče',
    night: 'noću'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + '.';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
export default localize;