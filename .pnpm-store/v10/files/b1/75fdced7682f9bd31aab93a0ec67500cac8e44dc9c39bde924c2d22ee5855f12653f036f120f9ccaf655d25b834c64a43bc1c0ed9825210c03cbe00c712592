"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["viru Christus", "no Christus"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mäe",
    "Abr",
    "Mee",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ],

  wide: [
    "Januar",
    "Februar",
    "Mäerz",
    "Abrëll",
    "Mee",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],
};

const dayValues = {
  narrow: ["S", "M", "D", "M", "D", "F", "S"],
  short: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa"],
  abbreviated: ["So.", "Mé.", "Dë.", "Më.", "Do.", "Fr.", "Sa."],
  wide: [
    "Sonndeg",
    "Méindeg",
    "Dënschdeg",
    "Mëttwoch",
    "Donneschdeg",
    "Freideg",
    "Samschdeg",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "mo.",
    pm: "nomë.",
    midnight: "Mëtternuecht",
    noon: "Mëtteg",
    morning: "Moien",
    afternoon: "Nomëtteg",
    evening: "Owend",
    night: "Nuecht",
  },
  abbreviated: {
    am: "moies",
    pm: "nomëttes",
    midnight: "Mëtternuecht",
    noon: "Mëtteg",
    morning: "Moien",
    afternoon: "Nomëtteg",
    evening: "Owend",
    night: "Nuecht",
  },
  wide: {
    am: "moies",
    pm: "nomëttes",
    midnight: "Mëtternuecht",
    noon: "Mëtteg",
    morning: "Moien",
    afternoon: "Nomëtteg",
    evening: "Owend",
    night: "Nuecht",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "mo.",
    pm: "nom.",
    midnight: "Mëtternuecht",
    noon: "mëttes",
    morning: "moies",
    afternoon: "nomëttes",
    evening: "owes",
    night: "nuets",
  },
  abbreviated: {
    am: "moies",
    pm: "nomëttes",
    midnight: "Mëtternuecht",
    noon: "mëttes",
    morning: "moies",
    afternoon: "nomëttes",
    evening: "owes",
    night: "nuets",
  },
  wide: {
    am: "moies",
    pm: "nomëttes",
    midnight: "Mëtternuecht",
    noon: "mëttes",
    morning: "moies",
    afternoon: "nomëttes",
    evening: "owes",
    night: "nuets",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + ".";
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
