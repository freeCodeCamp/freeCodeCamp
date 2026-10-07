import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['e.m.a', 'm.a.j'],
  abbreviated: ['e.m.a', 'm.a.j'],
  wide: ['enne meie ajaarvamist', 'meie ajaarvamise järgi']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal']
};
var monthValues = {
  narrow: ['J', 'V', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'aug', 'sept', 'okt', 'nov', 'dets'],
  wide: ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember']
};
var dayValues = {
  narrow: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
  short: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
  abbreviated: ['pühap.', 'esmasp.', 'teisip.', 'kolmap.', 'neljap.', 'reede.', 'laup.'],
  wide: ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'kesköö',
    noon: 'keskpäev',
    morning: 'hommik',
    afternoon: 'pärastlõuna',
    evening: 'õhtu',
    night: 'öö'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'kesköö',
    noon: 'keskpäev',
    morning: 'hommik',
    afternoon: 'pärastlõuna',
    evening: 'õhtu',
    night: 'öö'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'kesköö',
    noon: 'keskpäev',
    morning: 'hommik',
    afternoon: 'pärastlõuna',
    evening: 'õhtu',
    night: 'öö'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'keskööl',
    noon: 'keskpäeval',
    morning: 'hommikul',
    afternoon: 'pärastlõunal',
    evening: 'õhtul',
    night: 'öösel'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'keskööl',
    noon: 'keskpäeval',
    morning: 'hommikul',
    afternoon: 'pärastlõunal',
    evening: 'õhtul',
    night: 'öösel'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'keskööl',
    noon: 'keskpäeval',
    morning: 'hommikul',
    afternoon: 'pärastlõunal',
    evening: 'õhtul',
    night: 'öösel'
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
    formattingValues: monthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
    formattingValues: dayValues,
    defaultFormattingWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
export default localize;