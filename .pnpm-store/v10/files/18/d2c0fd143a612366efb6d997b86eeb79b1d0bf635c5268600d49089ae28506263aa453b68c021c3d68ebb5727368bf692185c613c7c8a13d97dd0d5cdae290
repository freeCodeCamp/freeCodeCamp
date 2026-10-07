"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["eaa.", "jaa."],
  abbreviated: ["eaa.", "jaa."],
  wide: ["ennen ajanlaskun alkua", "jälkeen ajanlaskun alun"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"],
};

const monthValues = {
  narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
  abbreviated: [
    "tammi",
    "helmi",
    "maalis",
    "huhti",
    "touko",
    "kesä",
    "heinä",
    "elo",
    "syys",
    "loka",
    "marras",
    "joulu",
  ],

  wide: [
    "tammikuu",
    "helmikuu",
    "maaliskuu",
    "huhtikuu",
    "toukokuu",
    "kesäkuu",
    "heinäkuu",
    "elokuu",
    "syyskuu",
    "lokakuu",
    "marraskuu",
    "joulukuu",
  ],
};

const formattingMonthValues = {
  narrow: monthValues.narrow,
  abbreviated: monthValues.abbreviated,
  wide: [
    "tammikuuta",
    "helmikuuta",
    "maaliskuuta",
    "huhtikuuta",
    "toukokuuta",
    "kesäkuuta",
    "heinäkuuta",
    "elokuuta",
    "syyskuuta",
    "lokakuuta",
    "marraskuuta",
    "joulukuuta",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "K", "T", "P", "L"],
  short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
  abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],

  wide: [
    "sunnuntai",
    "maanantai",
    "tiistai",
    "keskiviikko",
    "torstai",
    "perjantai",
    "lauantai",
  ],
};

const formattingDayValues = {
  narrow: dayValues.narrow,
  short: dayValues.short,
  abbreviated: dayValues.abbreviated,
  wide: [
    "sunnuntaina",
    "maanantaina",
    "tiistaina",
    "keskiviikkona",
    "torstaina",
    "perjantaina",
    "lauantaina",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyö",
    noon: "keskipäivä",
    morning: "ap",
    afternoon: "ip",
    evening: "illalla",
    night: "yöllä",
  },
  abbreviated: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyö",
    noon: "keskipäivä",
    morning: "ap",
    afternoon: "ip",
    evening: "illalla",
    night: "yöllä",
  },
  wide: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyöllä",
    noon: "keskipäivällä",
    morning: "aamupäivällä",
    afternoon: "iltapäivällä",
    evening: "illalla",
    night: "yöllä",
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
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
  }),

  day: (0, _index.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
    formattingValues: formattingDayValues,
    defaultFormattingWidth: "wide",
  }),

  dayPeriod: (0, _index.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
  }),
});
