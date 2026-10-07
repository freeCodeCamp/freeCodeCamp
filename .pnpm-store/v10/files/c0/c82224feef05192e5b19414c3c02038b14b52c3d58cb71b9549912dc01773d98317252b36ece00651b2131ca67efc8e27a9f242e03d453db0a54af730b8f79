import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['пр.н.е.', 'н.е.'],
  abbreviated: ['пред н. е.', 'н. е.'],
  wide: ['пред нашата ера', 'нашата ера']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ви кв.', '2-ри кв.', '3-ти кв.', '4-ти кв.'],
  wide: ['1-ви квартал', '2-ри квартал', '3-ти квартал', '4-ти квартал']
};
var monthValues = {
  abbreviated: ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'септ', 'окт', 'ноем', 'дек'],
  wide: ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември']
};
var dayValues = {
  narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['не', 'по', 'вт', 'ср', 'че', 'пе', 'са'],
  abbreviated: ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб'],
  wide: ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота']
};
var dayPeriodValues = {
  wide: {
    am: 'претпладне',
    pm: 'попладне',
    midnight: 'полноќ',
    noon: 'напладне',
    morning: 'наутро',
    afternoon: 'попладне',
    evening: 'навечер',
    night: 'ноќе'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви';
      case 2:
        return number + '-ри';
      case 7:
      case 8:
        return number + '-ми';
    }
  }
  return number + '-ти';
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
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide'
  })
};
export default localize;