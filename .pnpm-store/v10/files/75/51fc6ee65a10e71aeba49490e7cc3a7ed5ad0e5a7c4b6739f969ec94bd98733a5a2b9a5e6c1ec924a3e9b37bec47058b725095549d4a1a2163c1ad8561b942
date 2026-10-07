"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["pr. Kr.", "po Kr."],
  abbreviated: ["pr. Kr.", "po Kr."],
  wide: ["prieš Kristų", "po Kristaus"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
  wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"],
};

const formattingQuarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I k.", "II k.", "III k.", "IV k."],
  wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"],
};

const monthValues = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
  abbreviated: [
    "saus.",
    "vas.",
    "kov.",
    "bal.",
    "geg.",
    "birž.",
    "liep.",
    "rugp.",
    "rugs.",
    "spal.",
    "lapkr.",
    "gruod.",
  ],

  wide: [
    "sausis",
    "vasaris",
    "kovas",
    "balandis",
    "gegužė",
    "birželis",
    "liepa",
    "rugpjūtis",
    "rugsėjis",
    "spalis",
    "lapkritis",
    "gruodis",
  ],
};

const formattingMonthValues = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
  abbreviated: [
    "saus.",
    "vas.",
    "kov.",
    "bal.",
    "geg.",
    "birž.",
    "liep.",
    "rugp.",
    "rugs.",
    "spal.",
    "lapkr.",
    "gruod.",
  ],

  wide: [
    "sausio",
    "vasario",
    "kovo",
    "balandžio",
    "gegužės",
    "birželio",
    "liepos",
    "rugpjūčio",
    "rugsėjo",
    "spalio",
    "lapkričio",
    "gruodžio",
  ],
};

const dayValues = {
  narrow: ["S", "P", "A", "T", "K", "P", "Š"],
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
  wide: [
    "sekmadienis",
    "pirmadienis",
    "antradienis",
    "trečiadienis",
    "ketvirtadienis",
    "penktadienis",
    "šeštadienis",
  ],
};

const formattingDayValues = {
  narrow: ["S", "P", "A", "T", "K", "P", "Š"],
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
  wide: [
    "sekmadienį",
    "pirmadienį",
    "antradienį",
    "trečiadienį",
    "ketvirtadienį",
    "penktadienį",
    "šeštadienį",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis",
  },
  abbreviated: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis",
  },
  wide: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis",
  },
  abbreviated: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis",
  },
  wide: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "-oji";
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
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
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
});
