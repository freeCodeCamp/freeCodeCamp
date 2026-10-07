import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['R', 'A'],
  abbreviated: ['RC', 'AD'],
  wide: ['ro Chrìosta', 'anno domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['C1', 'C2', 'C3', 'C4'],
  wide: ["a' chiad chairteal", 'an dàrna cairteal', 'an treas cairteal', 'an ceathramh cairteal']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['F', 'G', 'M', 'G', 'C', 'Ò', 'I', 'L', 'S', 'D', 'S', 'D'],
  abbreviated: ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'],
  wide: ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'C', 'A', 'H', 'S'],
  short: ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'],
  abbreviated: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
  wide: ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne']
};
var dayPeriodValues = {
  narrow: {
    am: 'm',
    pm: 'f',
    midnight: 'm.o.',
    noon: 'm.l.',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  },
  abbreviated: {
    am: 'M.',
    pm: 'F.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  },
  wide: {
    am: 'm.',
    pm: 'f.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'm',
    pm: 'f',
    midnight: 'm.o.',
    noon: 'm.l.',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  },
  abbreviated: {
    am: 'M.',
    pm: 'F.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  },
  wide: {
    am: 'm.',
    pm: 'f.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'd';
      case 2:
        return number + 'na';
    }
  }
  if (rem100 === 12) {
    return number + 'na';
  }
  return number + 'mh';
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