"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "despois de cristo"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"],
};

const monthValues = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "xan",
    "feb",
    "mar",
    "abr",
    "mai",
    "xun",
    "xul",
    "ago",
    "set",
    "out",
    "nov",
    "dec",
  ],

  wide: [
    "xaneiro",
    "febreiro",
    "marzo",
    "abril",
    "maio",
    "xuño",
    "xullo",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "decembro",
  ],
};

const dayValues = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "me", "xo", "ve", "sa"],
  abbreviated: ["dom", "lun", "mar", "mer", "xov", "ven", "sab"],
  wide: ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañá",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoite",
    noon: "mediodía",
    morning: "mañá",
    afternoon: "tarde",
    evening: "tardiña",
    night: "noite",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoite",
    noon: "mediodía",
    morning: "mañá",
    afternoon: "tarde",
    evening: "tardiña",
    night: "noite",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "da mañá",
    afternoon: "da tarde",
    evening: "da tardiña",
    night: "da noite",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoite",
    noon: "mediodía",
    morning: "da mañá",
    afternoon: "da tarde",
    evening: "da tardiña",
    night: "da noite",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoite",
    noon: "mediodía",
    morning: "da mañá",
    afternoon: "da tarde",
    evening: "da tardiña",
    night: "da noite",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "º";
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
