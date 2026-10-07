"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["k.a.", "k.o."],
  abbreviated: ["k.a.", "k.o."],
  wide: ["kristo aurretik", "kristo ondoren"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1H", "2H", "3H", "4H"],
  wide: [
    "1. hiruhilekoa",
    "2. hiruhilekoa",
    "3. hiruhilekoa",
    "4. hiruhilekoa",
  ],
};

const monthValues = {
  narrow: ["u", "o", "m", "a", "m", "e", "u", "a", "i", "u", "a", "a"],
  abbreviated: [
    "urt",
    "ots",
    "mar",
    "api",
    "mai",
    "eka",
    "uzt",
    "abu",
    "ira",
    "urr",
    "aza",
    "abe",
  ],

  wide: [
    "urtarrila",
    "otsaila",
    "martxoa",
    "apirila",
    "maiatza",
    "ekaina",
    "uztaila",
    "abuztua",
    "iraila",
    "urria",
    "azaroa",
    "abendua",
  ],
};

const dayValues = {
  narrow: ["i", "a", "a", "a", "o", "o", "l"],
  short: ["ig", "al", "as", "az", "og", "or", "lr"],
  abbreviated: ["iga", "ast", "ast", "ast", "ost", "ost", "lar"],
  wide: [
    "igandea",
    "astelehena",
    "asteartea",
    "asteazkena",
    "osteguna",
    "ostirala",
    "larunbata",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "ge",
    noon: "eg",
    morning: "goiza",
    afternoon: "arratsaldea",
    evening: "arratsaldea",
    night: "gaua",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goiza",
    afternoon: "arratsaldea",
    evening: "arratsaldea",
    night: "gaua",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goiza",
    afternoon: "arratsaldea",
    evening: "arratsaldea",
    night: "gaua",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "ge",
    noon: "eg",
    morning: "goizean",
    afternoon: "arratsaldean",
    evening: "arratsaldean",
    night: "gauean",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goizean",
    afternoon: "arratsaldean",
    evening: "arratsaldean",
    night: "gauean",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goizean",
    afternoon: "arratsaldean",
    evening: "arratsaldean",
    night: "gauean",
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
