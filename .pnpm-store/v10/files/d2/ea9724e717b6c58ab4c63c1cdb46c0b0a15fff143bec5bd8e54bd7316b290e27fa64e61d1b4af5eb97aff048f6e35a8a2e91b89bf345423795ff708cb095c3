import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["pr.n.e.", "AD"],
  abbreviated: ["pr. Kr.", "po. Kr."],
  wide: ["Prije Krista", "Poslije Krista"],
};

const quarterValues = {
  narrow: ["1.", "2.", "3.", "4."],
  abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
};

const monthValues = {
  narrow: [
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12.",
  ],

  abbreviated: [
    "sij",
    "velj",
    "ožu",
    "tra",
    "svi",
    "lip",
    "srp",
    "kol",
    "ruj",
    "lis",
    "stu",
    "pro",
  ],

  wide: [
    "siječanj",
    "veljača",
    "ožujak",
    "travanj",
    "svibanj",
    "lipanj",
    "srpanj",
    "kolovoz",
    "rujan",
    "listopad",
    "studeni",
    "prosinac",
  ],
};

const formattingMonthValues = {
  narrow: [
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12.",
  ],

  abbreviated: [
    "sij",
    "velj",
    "ožu",
    "tra",
    "svi",
    "lip",
    "srp",
    "kol",
    "ruj",
    "lis",
    "stu",
    "pro",
  ],

  wide: [
    "siječnja",
    "veljače",
    "ožujka",
    "travnja",
    "svibnja",
    "lipnja",
    "srpnja",
    "kolovoza",
    "rujna",
    "listopada",
    "studenog",
    "prosinca",
  ],
};

const dayValues = {
  narrow: ["N", "P", "U", "S", "Č", "P", "S"],
  short: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
  abbreviated: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
  wide: [
    "nedjelja",
    "ponedjeljak",
    "utorak",
    "srijeda",
    "četvrtak",
    "petak",
    "subota",
  ],
};

const formattingDayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "popodne",
    evening: "navečer",
    night: "noću",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "popodne",
    evening: "navečer",
    night: "noću",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "poslije podne",
    evening: "navečer",
    night: "noću",
  },
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "popodne",
    evening: "navečer",
    night: "noću",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "popodne",
    evening: "navečer",
    night: "noću",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "poslije podne",
    evening: "navečer",
    night: "noću",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + ".";
};

export const localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
