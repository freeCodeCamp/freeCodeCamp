import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["f.K.", "n.K."],
  abbreviated: ["f.Kr.", "n.Kr."],
  wide: ["foar Kristus", "nei Kristus"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1e fearnsjier", "2e fearnsjier", "3e fearnsjier", "4e fearnsjier"],
};

const monthValues = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "jan.",
    "feb.",
    "mrt.",
    "apr.",
    "mai.",
    "jun.",
    "jul.",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "des.",
  ],

  wide: [
    "jannewaris",
    "febrewaris",
    "maart",
    "april",
    "maaie",
    "juny",
    "july",
    "augustus",
    "septimber",
    "oktober",
    "novimber",
    "desimber",
  ],
};

const dayValues = {
  narrow: ["s", "m", "t", "w", "t", "f", "s"],
  short: ["si", "mo", "ti", "wo", "to", "fr", "so"],
  abbreviated: ["snein", "moa", "tii", "woa", "ton", "fre", "sneon"],
  wide: [
    "snein",
    "moandei",
    "tiisdei",
    "woansdei",
    "tongersdei",
    "freed",
    "sneon",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "middei",
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "nachts",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "middei",
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "nachts",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "middei",
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "nachts",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "e";
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
