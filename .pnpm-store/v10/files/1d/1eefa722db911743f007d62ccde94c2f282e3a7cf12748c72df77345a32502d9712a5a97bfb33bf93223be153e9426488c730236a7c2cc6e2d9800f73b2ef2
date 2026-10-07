import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js"; // All data for localization are taken from this page
// https://www.unicode.org/cldr/charts/32/summary/id.html
var eraValues = {
  narrow: ['SM', 'M'],
  abbreviated: ['SM', 'M'],
  wide: ['Sebelum Masehi', 'Masehi']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['Kuartal ke-1', 'Kuartal ke-2', 'Kuartal ke-3', 'Kuartal ke-4']
};

// Note: in Indonesian, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'],
  wide: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
};
var dayValues = {
  narrow: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
  short: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  abbreviated: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  wide: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // Can't use "pertama", "kedua" because can't be parsed

  return 'ke-' + number;
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