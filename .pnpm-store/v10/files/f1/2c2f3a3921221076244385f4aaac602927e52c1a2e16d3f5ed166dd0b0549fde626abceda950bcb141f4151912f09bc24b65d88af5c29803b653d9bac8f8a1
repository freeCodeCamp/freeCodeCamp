"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["av. J.-K", "ap. J.-K"],
  abbreviated: ["av. J.-K", "ap. J.-K"],
  wide: ["anvan Jezi Kris", "apre Jezi Kris"],
};

const quarterValues = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1ye trim.", "2yèm trim.", "3yèm trim.", "4yèm trim."],
  wide: ["1ye trimès", "2yèm trimès", "3yèm trimès", "4yèm trimès"],
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"],
  abbreviated: [
    "janv.",
    "fevr.",
    "mas",
    "avr.",
    "me",
    "jen",
    "jiyè",
    "out",
    "sept.",
    "okt.",
    "nov.",
    "des.",
  ],

  wide: [
    "janvye",
    "fevrye",
    "mas",
    "avril",
    "me",
    "jen",
    "jiyè",
    "out",
    "septanm",
    "oktòb",
    "novanm",
    "desanm",
  ],
};

const dayValues = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"],
  short: ["di", "le", "ma", "mè", "je", "va", "sa"],
  abbreviated: ["dim.", "len.", "mad.", "mèk.", "jed.", "van.", "sam."],

  wide: ["dimanch", "lendi", "madi", "mèkredi", "jedi", "vandredi", "samdi"],
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "swa",
    night: "mat.",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "maten",
    afternoon: "aprèmidi",
    evening: "swa",
    night: "maten",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "nan maten",
    afternoon: "nan aprèmidi",
    evening: "nan aswè",
    night: "nan maten",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  if (number === 0) return String(number);

  const suffix = number === 1 ? "ye" : "yèm";

  return number + suffix;
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
  }),
});
