"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["o.Kr.", "m.Kr."],
  abbreviated: ["o.Kr.", "m.Kr."],
  wide: ["ovdal Kristusa", "maŋŋel Kristusa"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartála", "2. kvartála", "3. kvartála", "4. kvartála"],
};

const monthValues = {
  narrow: ["O", "G", "N", "C", "M", "G", "S", "B", "Č", "G", "S", "J"],
  abbreviated: [
    "ođđa",
    "guov",
    "njuk",
    "cuo",
    "mies",
    "geas",
    "suoi",
    "borg",
    "čakč",
    "golg",
    "skáb",
    "juov",
  ],

  wide: [
    "ođđajagemánnu",
    "guovvamánnu",
    "njukčamánnu",
    "cuoŋománnu",
    "miessemánnu",
    "geassemánnu",
    "suoidnemánnu",
    "borgemánnu",
    "čakčamánnu",
    "golggotmánnu",
    "skábmamánnu",
    "juovlamánnu",
  ],
};

const dayValues = {
  narrow: ["S", "V", "M", "G", "D", "B", "L"],
  short: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
  abbreviated: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
  wide: [
    "sotnabeaivi",
    "vuossárga",
    "maŋŋebárga",
    "gaskavahkku",
    "duorastat",
    "bearjadat",
    "lávvardat",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "gaskaidja",
    noon: "gaskabeaivi",
    morning: "iđđes",
    afternoon: "maŋŋel gaska.",
    evening: "eahkes",
    night: "ihkku",
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gaskaidja",
    noon: "gaskabeaivvi",
    morning: "iđđes",
    afternoon: "maŋŋel gaskabea.",
    evening: "eahkes",
    night: "ihkku",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gaskaidja",
    noon: "gaskabeavvi",
    morning: "iđđes",
    afternoon: "maŋŋel gaskabeaivvi",
    evening: "eahkes",
    night: "ihkku",
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
  }),
});
