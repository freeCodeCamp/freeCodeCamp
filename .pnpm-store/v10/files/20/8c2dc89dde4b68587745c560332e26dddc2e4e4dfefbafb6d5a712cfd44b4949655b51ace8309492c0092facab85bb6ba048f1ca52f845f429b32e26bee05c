import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['vC', 'nC'],
  abbreviated: ['vC', 'nC'],
  wide: ['voor Christus', 'na Christus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1ste kwartaal', '2de kwartaal', '3de kwartaal', '4de kwartaal']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  wide: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember']
};
var dayValues = {
  narrow: ['S', 'M', 'D', 'W', 'D', 'V', 'S'],
  short: ['So', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Sa'],
  abbreviated: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
  wide: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag']
};
var dayPeriodValues = {
  narrow: {
    am: 'vm',
    pm: 'nm',
    midnight: 'middernag',
    noon: 'middaguur',
    morning: 'oggend',
    afternoon: 'middag',
    evening: 'laat middag',
    night: 'aand'
  },
  abbreviated: {
    am: 'vm',
    pm: 'nm',
    midnight: 'middernag',
    noon: 'middaguur',
    morning: 'oggend',
    afternoon: 'middag',
    evening: 'laat middag',
    night: 'aand'
  },
  wide: {
    am: 'vm',
    pm: 'nm',
    midnight: 'middernag',
    noon: 'middaguur',
    morning: 'oggend',
    afternoon: 'middag',
    evening: 'laat middag',
    night: 'aand'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'vm',
    pm: 'nm',
    midnight: 'middernag',
    noon: 'uur die middag',
    morning: 'uur die oggend',
    afternoon: 'uur die middag',
    evening: 'uur die aand',
    night: 'uur die aand'
  },
  abbreviated: {
    am: 'vm',
    pm: 'nm',
    midnight: 'middernag',
    noon: 'uur die middag',
    morning: 'uur die oggend',
    afternoon: 'uur die middag',
    evening: 'uur die aand',
    night: 'uur die aand'
  },
  wide: {
    am: 'vm',
    pm: 'nm',
    midnight: 'middernag',
    noon: 'uur die middag',
    morning: 'uur die oggend',
    afternoon: 'uur die middag',
    evening: 'uur die aand',
    night: 'uur die aand'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 < 20) {
    switch (rem100) {
      case 1:
      case 8:
        return number + 'ste';
      default:
        return number + 'de';
    }
  }
  return number + 'ste';
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