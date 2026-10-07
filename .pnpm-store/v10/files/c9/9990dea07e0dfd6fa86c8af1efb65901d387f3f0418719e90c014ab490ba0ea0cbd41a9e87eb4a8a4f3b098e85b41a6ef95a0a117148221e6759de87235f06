"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["пр.н.е.", "н.е."],
  abbreviated: ["преди н. е.", "н. е."],
  wide: ["преди новата ера", "новата ера"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-во тримес.", "2-ро тримес.", "3-то тримес.", "4-то тримес."],

  wide: [
    "1-во тримесечие",
    "2-ро тримесечие",
    "3-то тримесечие",
    "4-то тримесечие",
  ],
};

const monthValues = {
  abbreviated: [
    "яну",
    "фев",
    "мар",
    "апр",
    "май",
    "юни",
    "юли",
    "авг",
    "сеп",
    "окт",
    "ное",
    "дек",
  ],

  wide: [
    "януари",
    "февруари",
    "март",
    "април",
    "май",
    "юни",
    "юли",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември",
  ],
};

const dayValues = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"],
  wide: [
    "неделя",
    "понеделник",
    "вторник",
    "сряда",
    "четвъртък",
    "петък",
    "събота",
  ],
};

const dayPeriodValues = {
  wide: {
    am: "преди обяд",
    pm: "след обяд",
    midnight: "в полунощ",
    noon: "на обяд",
    morning: "сутринта",
    afternoon: "следобед",
    evening: "вечерта",
    night: "през нощта",
  },
};

function isFeminine(unit) {
  return (
    unit === "year" || unit === "week" || unit === "minute" || unit === "second"
  );
}

function isNeuter(unit) {
  return unit === "quarter";
}

function numberWithSuffix(number, unit, masculine, feminine, neuter) {
  const suffix = isNeuter(unit)
    ? neuter
    : isFeminine(unit)
      ? feminine
      : masculine;
  return number + "-" + suffix;
}

const ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options?.unit;

  if (number === 0) {
    return numberWithSuffix(0, unit, "ев", "ева", "ево");
  } else if (number % 1000 === 0) {
    return numberWithSuffix(number, unit, "ен", "на", "но");
  } else if (number % 100 === 0) {
    return numberWithSuffix(number, unit, "тен", "тна", "тно");
  }

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return numberWithSuffix(number, unit, "ви", "ва", "во");
      case 2:
        return numberWithSuffix(number, unit, "ри", "ра", "ро");
      case 7:
      case 8:
        return numberWithSuffix(number, unit, "ми", "ма", "мо");
    }
  }

  return numberWithSuffix(number, unit, "ти", "та", "то");
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
