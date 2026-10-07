"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

// Most data for localization are taken from this page
// https://www.unicode.org/cldr/charts/32/summary/ms.html
const eraValues = {
  narrow: ["SM", "M"],
  abbreviated: ["SM", "M"],
  wide: ["Sebelum Masihi", "Masihi"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["S1", "S2", "S3", "S4"],
  wide: ["Suku pertama", "Suku kedua", "Suku ketiga", "Suku keempat"],
};

// Note: in Malay, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mac",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ogo",
    "Sep",
    "Okt",
    "Nov",
    "Dis",
  ],

  wide: [
    "Januari",
    "Februari",
    "Mac",
    "April",
    "Mei",
    "Jun",
    "Julai",
    "Ogos",
    "September",
    "Oktober",
    "November",
    "Disember",
  ],
};

const dayValues = {
  narrow: ["A", "I", "S", "R", "K", "J", "S"],
  short: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
  abbreviated: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
  wide: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
};

const dayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "tgh malam",
    noon: "tgh hari",
    morning: "pagi",
    afternoon: "tengah hari",
    evening: "petang",
    night: "malam",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "tengah hari",
    evening: "petang",
    night: "malam",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "tengah hari",
    evening: "petang",
    night: "malam",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "tengah hari",
    evening: "petang",
    night: "malam",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "tengah hari",
    evening: "petang",
    night: "malam",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "tengah hari",
    evening: "petang",
    night: "malam",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  // Can't use "pertama", "kedua" because can't be parsed
  return "ke-" + Number(dirtyNumber);
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
