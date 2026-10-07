"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

// All data for localization are taken from this page
// https://www.unicode.org/cldr/charts/32/summary/id.html
const eraValues = {
  narrow: ["SM", "M"],
  abbreviated: ["SM", "M"],
  wide: ["Sebelum Masehi", "Masehi"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"],
};

// Note: in Indonesian, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agt",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],

  wide: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
};

const dayValues = {
  narrow: ["M", "S", "S", "R", "K", "J", "S"],
  short: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  abbreviated: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  wide: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // Can't use "pertama", "kedua" because can't be parsed

  return "ke-" + number;
};

const localize = (exports.localize = {
  ordinalNumber,

  era: (0, _index.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0, _index.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0, _index.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0, _index.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0, _index.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
});
