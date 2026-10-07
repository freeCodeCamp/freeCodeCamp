import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['пр.н.е.', 'н.е.'],
  abbreviated: ['преди н. е.', 'н. е.'],
  wide: ['преди новата ера', 'новата ера']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-во тримес.', '2-ро тримес.', '3-то тримес.', '4-то тримес.'],
  wide: ['1-во тримесечие', '2-ро тримесечие', '3-то тримесечие', '4-то тримесечие']
};
var monthValues = {
  abbreviated: ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'],
  wide: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
};
var dayValues = {
  narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  abbreviated: ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб'],
  wide: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
};
var dayPeriodValues = {
  wide: {
    am: 'преди обяд',
    pm: 'след обяд',
    midnight: 'в полунощ',
    noon: 'на обяд',
    morning: 'сутринта',
    afternoon: 'следобед',
    evening: 'вечерта',
    night: 'през нощта'
  }
};
function isFeminine(unit) {
  return unit === 'year' || unit === 'week' || unit === 'minute' || unit === 'second';
}
function isNeuter(unit) {
  return unit === 'quarter';
}
function numberWithSuffix(number, unit, masculine, feminine, neuter) {
  var suffix = isNeuter(unit) ? neuter : isFeminine(unit) ? feminine : masculine;
  return number + '-' + suffix;
}
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (number === 0) {
    return numberWithSuffix(0, unit, 'ев', 'ева', 'ево');
  } else if (number % 1000 === 0) {
    return numberWithSuffix(number, unit, 'ен', 'на', 'но');
  } else if (number % 100 === 0) {
    return numberWithSuffix(number, unit, 'тен', 'тна', 'тно');
  }
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return numberWithSuffix(number, unit, 'ви', 'ва', 'во');
      case 2:
        return numberWithSuffix(number, unit, 'ри', 'ра', 'ро');
      case 7:
      case 8:
        return numberWithSuffix(number, unit, 'ми', 'ма', 'мо');
    }
  }
  return numberWithSuffix(number, unit, 'ти', 'та', 'то');
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