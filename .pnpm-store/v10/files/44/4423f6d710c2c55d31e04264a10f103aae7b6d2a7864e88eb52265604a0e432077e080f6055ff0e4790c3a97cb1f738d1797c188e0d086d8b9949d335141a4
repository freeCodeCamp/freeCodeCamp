import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['k.a.', 'k.o.'],
  abbreviated: ['k.a.', 'k.o.'],
  wide: ['kristo aurretik', 'kristo ondoren']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1H', '2H', '3H', '4H'],
  wide: ['1. hiruhilekoa', '2. hiruhilekoa', '3. hiruhilekoa', '4. hiruhilekoa']
};
var monthValues = {
  narrow: ['u', 'o', 'm', 'a', 'm', 'e', 'u', 'a', 'i', 'u', 'a', 'a'],
  abbreviated: ['urt', 'ots', 'mar', 'api', 'mai', 'eka', 'uzt', 'abu', 'ira', 'urr', 'aza', 'abe'],
  wide: ['urtarrila', 'otsaila', 'martxoa', 'apirila', 'maiatza', 'ekaina', 'uztaila', 'abuztua', 'iraila', 'urria', 'azaroa', 'abendua']
};
var dayValues = {
  narrow: ['i', 'a', 'a', 'a', 'o', 'o', 'l'],
  short: ['ig', 'al', 'as', 'az', 'og', 'or', 'lr'],
  abbreviated: ['iga', 'ast', 'ast', 'ast', 'ost', 'ost', 'lar'],
  wide: ['igandea', 'astelehena', 'asteartea', 'asteazkena', 'osteguna', 'ostirala', 'larunbata']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'ge',
    noon: 'eg',
    morning: 'goiza',
    afternoon: 'arratsaldea',
    evening: 'arratsaldea',
    night: 'gaua'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gauerdia',
    noon: 'eguerdia',
    morning: 'goiza',
    afternoon: 'arratsaldea',
    evening: 'arratsaldea',
    night: 'gaua'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gauerdia',
    noon: 'eguerdia',
    morning: 'goiza',
    afternoon: 'arratsaldea',
    evening: 'arratsaldea',
    night: 'gaua'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'ge',
    noon: 'eg',
    morning: 'goizean',
    afternoon: 'arratsaldean',
    evening: 'arratsaldean',
    night: 'gauean'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gauerdia',
    noon: 'eguerdia',
    morning: 'goizean',
    afternoon: 'arratsaldean',
    evening: 'arratsaldean',
    night: 'gauean'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gauerdia',
    noon: 'eguerdia',
    morning: 'goizean',
    afternoon: 'arratsaldean',
    evening: 'arratsaldean',
    night: 'gauean'
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