"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["пр.н.е.", "н.е."],
  abbreviated: ["пред н. е.", "н. е."],
  wide: ["пред нашата ера", "нашата ера"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-ви кв.", "2-ри кв.", "3-ти кв.", "4-ти кв."],
  wide: ["1-ви квартал", "2-ри квартал", "3-ти квартал", "4-ти квартал"],
};

const monthValues = {
  abbreviated: [
    "јан",
    "фев",
    "мар",
    "апр",
    "мај",
    "јун",
    "јул",
    "авг",
    "септ",
    "окт",
    "ноем",
    "дек",
  ],

  wide: [
    "јануари",
    "февруари",
    "март",
    "април",
    "мај",
    "јуни",
    "јули",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември",
  ],
};

const dayValues = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["не", "по", "вт", "ср", "че", "пе", "са"],
  abbreviated: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
  wide: [
    "недела",
    "понеделник",
    "вторник",
    "среда",
    "четврток",
    "петок",
    "сабота",
  ],
};

const dayPeriodValues = {
  wide: {
    am: "претпладне",
    pm: "попладне",
    midnight: "полноќ",
    noon: "напладне",
    morning: "наутро",
    afternoon: "попладне",
    evening: "навечер",
    night: "ноќе",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "-ви";
      case 2:
        return number + "-ри";
      case 7:
      case 8:
        return number + "-ми";
    }
  }
  return number + "-ти";
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
