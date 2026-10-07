import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['пр.н.е.', 'АД'],
  abbreviated: ['пр. Хр.', 'по. Хр.'],
  wide: ['Пре Христа', 'После Христа']
};
var quarterValues = {
  narrow: ['1.', '2.', '3.', '4.'],
  abbreviated: ['1. кв.', '2. кв.', '3. кв.', '4. кв.'],
  wide: ['1. квартал', '2. квартал', '3. квартал', '4. квартал']
};
var monthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  wide: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар']
};
var formattingMonthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  wide: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар']
};
var dayValues = {
  narrow: ['Н', 'П', 'У', 'С', 'Ч', 'П', 'С'],
  short: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  abbreviated: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  wide: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота']
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'АМ',
    pm: 'ПМ',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  abbreviated: {
    am: 'АМ',
    pm: 'ПМ',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'после подне',
    evening: 'увече',
    night: 'ноћу'
  }
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'после подне',
    evening: 'увече',
    night: 'ноћу'
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