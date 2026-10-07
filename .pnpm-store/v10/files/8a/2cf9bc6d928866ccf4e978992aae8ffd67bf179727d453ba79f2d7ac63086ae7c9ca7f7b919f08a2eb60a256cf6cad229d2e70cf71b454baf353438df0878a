"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["до н.е.", "н.е."],
  abbreviated: ["до н. е.", "н. е."],
  wide: ["до нашої ери", "нашої ери"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"],
};

const monthValues = {
  // ДСТУ 3582:2013
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: [
    "січ.",
    "лют.",
    "берез.",
    "квіт.",
    "трав.",
    "черв.",
    "лип.",
    "серп.",
    "верес.",
    "жовт.",
    "листоп.",
    "груд.",
  ],

  wide: [
    "січень",
    "лютий",
    "березень",
    "квітень",
    "травень",
    "червень",
    "липень",
    "серпень",
    "вересень",
    "жовтень",
    "листопад",
    "грудень",
  ],
};

const formattingMonthValues = {
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: [
    "січ.",
    "лют.",
    "берез.",
    "квіт.",
    "трав.",
    "черв.",
    "лип.",
    "серп.",
    "верес.",
    "жовт.",
    "листоп.",
    "груд.",
  ],

  wide: [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ],
};

const dayValues = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
  wide: [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п’ятниця",
    "субота",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч",
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч",
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранок",
    afternoon: "день",
    evening: "вечір",
    night: "ніч",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі",
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі",
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі",
  },
};

const ordinalNumber = (dirtyNumber, options) => {
  const unit = String(options?.unit);
  const number = Number(dirtyNumber);
  let suffix;

  if (unit === "date") {
    if (number === 3 || number === 23) {
      suffix = "-є";
    } else {
      suffix = "-е";
    }
  } else if (unit === "minute" || unit === "second" || unit === "hour") {
    suffix = "-а";
  } else {
    suffix = "-й";
  }

  return number + suffix;
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
    defaultWidth: "any",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
});
