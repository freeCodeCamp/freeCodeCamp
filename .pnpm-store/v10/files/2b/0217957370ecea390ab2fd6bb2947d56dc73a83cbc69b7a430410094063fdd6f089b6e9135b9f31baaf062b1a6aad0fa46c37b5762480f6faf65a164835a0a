import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['av. J.-K', 'ap. J.-K'],
  abbreviated: ['av. J.-K', 'ap. J.-K'],
  wide: ['anvan Jezi Kris', 'apre Jezi Kris']
};
var quarterValues = {
  narrow: ['T1', 'T2', 'T3', 'T4'],
  abbreviated: ['1ye trim.', '2yèm trim.', '3yèm trim.', '4yèm trim.'],
  wide: ['1ye trimès', '2yèm trimès', '3yèm trimès', '4yèm trimès']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'fevr.', 'mas', 'avr.', 'me', 'jen', 'jiyè', 'out', 'sept.', 'okt.', 'nov.', 'des.'],
  wide: ['janvye', 'fevrye', 'mas', 'avril', 'me', 'jen', 'jiyè', 'out', 'septanm', 'oktòb', 'novanm', 'desanm']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  short: ['di', 'le', 'ma', 'mè', 'je', 'va', 'sa'],
  abbreviated: ['dim.', 'len.', 'mad.', 'mèk.', 'jed.', 'van.', 'sam.'],
  wide: ['dimanch', 'lendi', 'madi', 'mèkredi', 'jedi', 'vandredi', 'samdi']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minwit',
    noon: 'midi',
    morning: 'mat.',
    afternoon: 'ap.m.',
    evening: 'swa',
    night: 'mat.'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minwit',
    noon: 'midi',
    morning: 'maten',
    afternoon: 'aprèmidi',
    evening: 'swa',
    night: 'maten'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minwit',
    noon: 'midi',
    morning: 'nan maten',
    afternoon: 'nan aprèmidi',
    evening: 'nan aswè',
    night: 'nan maten'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  if (number === 0) return String(number);
  var suffix = number === 1 ? 'ye' : 'yèm';
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
    defaultWidth: 'wide'
  })
};
export default localize;