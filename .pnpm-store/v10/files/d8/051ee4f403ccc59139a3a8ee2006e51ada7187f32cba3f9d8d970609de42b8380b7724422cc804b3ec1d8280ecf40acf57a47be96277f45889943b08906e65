"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["М.А", "М"],
  abbreviated: ["М.А", "М"],
  wide: ["Милоддан Аввалги", "Милодий"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-чор.", "2-чор.", "3-чор.", "4-чор."],
  wide: ["1-чорак", "2-чорак", "3-чорак", "4-чорак"],
};

const monthValues = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ],

  wide: [
    "январ",
    "феврал",
    "март",
    "апрел",
    "май",
    "июн",
    "июл",
    "август",
    "сентабр",
    "октабр",
    "ноябр",
    "декабр",
  ],
};

const dayValues = {
  narrow: ["Я", "Д", "С", "Ч", "П", "Ж", "Ш"],
  short: ["як", "ду", "се", "чо", "па", "жу", "ша"],
  abbreviated: ["якш", "душ", "сеш", "чор", "пай", "жум", "шан"],
  wide: [
    "якшанба",
    "душанба",
    "сешанба",
    "чоршанба",
    "пайшанба",
    "жума",
    "шанба",
  ],
};

const dayPeriodValues = {
  any: {
    am: "П.О.",
    pm: "П.К.",
    midnight: "ярим тун",
    noon: "пешин",
    morning: "эрталаб",
    afternoon: "пешиндан кейин",
    evening: "кечаси",
    night: "тун",
  },
};

const formattingDayPeriodValues = {
  any: {
    am: "П.О.",
    pm: "П.К.",
    midnight: "ярим тун",
    noon: "пешин",
    morning: "эрталаб",
    afternoon: "пешиндан кейин",
    evening: "кечаси",
    night: "тун",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  return String(dirtyNumber);
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
    defaultWidth: "any",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "any",
  }),
});
