import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1772
const eraValues = {
  narrow: ["pred Kr.", "po Kr."],
  abbreviated: ["pred Kr.", "po Kr."],
  wide: ["pred Kristom", "po Kristovi"],
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1780
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. štvrťrok", "2. štvrťrok", "3. štvrťrok", "4. štvrťrok"],
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1804
const monthValues = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "máj",
    "jún",
    "júl",
    "aug",
    "sep",
    "okt",
    "nov",
    "dec",
  ],

  wide: [
    "január",
    "február",
    "marec",
    "apríl",
    "máj",
    "jún",
    "júl",
    "august",
    "september",
    "október",
    "november",
    "december",
  ],
};
const formattingMonthValues = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "máj",
    "jún",
    "júl",
    "aug",
    "sep",
    "okt",
    "nov",
    "dec",
  ],

  wide: [
    "januára",
    "februára",
    "marca",
    "apríla",
    "mája",
    "júna",
    "júla",
    "augusta",
    "septembra",
    "októbra",
    "novembra",
    "decembra",
  ],
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1876
const dayValues = {
  narrow: ["n", "p", "u", "s", "š", "p", "s"],
  short: ["ne", "po", "ut", "st", "št", "pi", "so"],
  abbreviated: ["ne", "po", "ut", "st", "št", "pi", "so"],
  wide: [
    "nedeľa",
    "pondelok",
    "utorok",
    "streda",
    "štvrtok",
    "piatok",
    "sobota",
  ],
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1932
const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "poln.",
    noon: "pol.",
    morning: "ráno",
    afternoon: "pop.",
    evening: "več.",
    night: "noc",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "poln.",
    noon: "pol.",
    morning: "ráno",
    afternoon: "popol.",
    evening: "večer",
    night: "noc",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "polnoc",
    noon: "poludnie",
    morning: "ráno",
    afternoon: "popoludnie",
    evening: "večer",
    night: "noc",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "o poln.",
    noon: "nap.",
    morning: "ráno",
    afternoon: "pop.",
    evening: "več.",
    night: "v n.",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o poln.",
    noon: "napol.",
    morning: "ráno",
    afternoon: "popol.",
    evening: "večer",
    night: "v noci",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o polnoci",
    noon: "napoludnie",
    morning: "ráno",
    afternoon: "popoludní",
    evening: "večer",
    night: "v noci",
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
