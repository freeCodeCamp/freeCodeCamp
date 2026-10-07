import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["ie.", "isz."],
  abbreviated: ["i. e.", "i. sz."],
  wide: ["Krisztus előtt", "időszámításunk szerint"],
};

const quarterValues = {
  narrow: ["1.", "2.", "3.", "4."],
  abbreviated: ["1. n.év", "2. n.év", "3. n.év", "4. n.év"],
  wide: ["1. negyedév", "2. negyedév", "3. negyedév", "4. negyedév"],
};

const formattingQuarterValues = {
  narrow: ["I.", "II.", "III.", "IV."],
  abbreviated: ["I. n.év", "II. n.év", "III. n.év", "IV. n.év"],
  wide: ["I. negyedév", "II. negyedév", "III. negyedév", "IV. negyedév"],
};

const monthValues = {
  narrow: ["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"],

  abbreviated: [
    "jan.",
    "febr.",
    "márc.",
    "ápr.",
    "máj.",
    "jún.",
    "júl.",
    "aug.",
    "szept.",
    "okt.",
    "nov.",
    "dec.",
  ],

  wide: [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december",
  ],
};

const dayValues = {
  narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
  short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  wide: [
    "vasárnap",
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "du.",
    evening: "este",
    night: "éjjel",
  },
  abbreviated: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "du.",
    evening: "este",
    night: "éjjel",
  },
  wide: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "délután",
    evening: "este",
    night: "éjjel",
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
  }),
};
