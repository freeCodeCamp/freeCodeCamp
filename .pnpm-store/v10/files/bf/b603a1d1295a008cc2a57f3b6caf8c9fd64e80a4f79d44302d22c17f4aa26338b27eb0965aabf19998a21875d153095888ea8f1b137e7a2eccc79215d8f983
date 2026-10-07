import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['v.Chr.', 'n.Chr.'],
  abbreviated: ['v.Chr.', 'n.Chr.'],
  wide: ['viru Christus', 'no Christus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mäe', 'Abr', 'Mee', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  wide: ['Januar', 'Februar', 'Mäerz', 'Abrëll', 'Mee', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};
var dayValues = {
  narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  short: ['So', 'Mé', 'Dë', 'Më', 'Do', 'Fr', 'Sa'],
  abbreviated: ['So.', 'Mé.', 'Dë.', 'Më.', 'Do.', 'Fr.', 'Sa.'],
  wide: ['Sonndeg', 'Méindeg', 'Dënschdeg', 'Mëttwoch', 'Donneschdeg', 'Freideg', 'Samschdeg']
};
var dayPeriodValues = {
  narrow: {
    am: 'mo.',
    pm: 'nomë.',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  },
  abbreviated: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  },
  wide: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'mo.',
    pm: 'nom.',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
  },
  abbreviated: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
  },
  wide: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
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