import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['e.ə', 'b.e'],
  abbreviated: ['e.ə', 'b.e'],
  wide: ['eramızdan əvvəl', 'bizim era']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1ci kvartal', '2ci kvartal', '3cü kvartal', '4cü kvartal']
};
var monthValues = {
  narrow: ['Y', 'F', 'M', 'A', 'M', 'İ', 'İ', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'İyun', 'İyul', 'Avq', 'Sen', 'Okt', 'Noy', 'Dek'],
  wide: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
};
var dayValues = {
  narrow: ['B.', 'B.e', 'Ç.a', 'Ç.', 'C.a', 'C.', 'Ş.'],
  short: ['B.', 'B.e', 'Ç.a', 'Ç.', 'C.a', 'C.', 'Ş.'],
  abbreviated: ['Baz', 'Baz.e', 'Çər.a', 'Çər', 'Cüm.a', 'Cüm', 'Şə'],
  wide: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  }
};
var suffixes = {
  1: '-inci',
  5: '-inci',
  8: '-inci',
  70: '-inci',
  80: '-inci',
  2: '-nci',
  7: '-nci',
  20: '-nci',
  50: '-nci',
  3: '-üncü',
  4: '-üncü',
  100: '-üncü',
  6: '-ncı',
  9: '-uncu',
  10: '-uncu',
  30: '-uncu',
  60: '-ıncı',
  90: '-ıncı'
};
var getSuffix = function getSuffix(number) {
  if (number === 0) {
    // special case for zero
    return number + '-ıncı';
  }
  var a = number % 10;
  var b = number % 100 - a;
  var c = number >= 100 ? 100 : null;
  if (suffixes[a]) {
    return suffixes[a];
  } else if (suffixes[b]) {
    return suffixes[b];
  } else if (c !== null) {
    return suffixes[c];
  }
  return '';
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var suffix = getSuffix(number);
  return number + suffix;
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
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
export default localize;