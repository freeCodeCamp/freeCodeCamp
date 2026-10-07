"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["př. n. l.", "n. l."],
  abbreviated: ["př. n. l.", "n. l."],
  wide: ["před naším letopočtem", "našeho letopočtu"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"],

  wide: ["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"],
};

const monthValues = {
  narrow: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
  abbreviated: [
    "led",
    "úno",
    "bře",
    "dub",
    "kvě",
    "čvn",
    "čvc",
    "srp",
    "zář",
    "říj",
    "lis",
    "pro",
  ],

  wide: [
    "leden",
    "únor",
    "březen",
    "duben",
    "květen",
    "červen",
    "červenec",
    "srpen",
    "září",
    "říjen",
    "listopad",
    "prosinec",
  ],
};

const formattingMonthValues = {
  narrow: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
  abbreviated: [
    "led",
    "úno",
    "bře",
    "dub",
    "kvě",
    "čvn",
    "čvc",
    "srp",
    "zář",
    "říj",
    "lis",
    "pro",
  ],

  wide: [
    "ledna",
    "února",
    "března",
    "dubna",
    "května",
    "června",
    "července",
    "srpna",
    "září",
    "října",
    "listopadu",
    "prosince",
  ],
};

const dayValues = {
  narrow: ["ne", "po", "út", "st", "čt", "pá", "so"],
  short: ["ne", "po", "út", "st", "čt", "pá", "so"],
  abbreviated: ["ned", "pon", "úte", "stř", "čtv", "pát", "sob"],
  wide: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
};

const dayPeriodValues = {
  narrow: {
    am: "dop.",
    pm: "odp.",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc",
  },
  abbreviated: {
    am: "dop.",
    pm: "odp.",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc",
  },
  wide: {
    am: "dopoledne",
    pm: "odpoledne",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "dop.",
    pm: "odp.",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc",
  },
  abbreviated: {
    am: "dop.",
    pm: "odp.",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc",
  },
  wide: {
    am: "dopoledne",
    pm: "odpoledne",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc",
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
  }),

  dayPeriod: (0, _index.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
});
