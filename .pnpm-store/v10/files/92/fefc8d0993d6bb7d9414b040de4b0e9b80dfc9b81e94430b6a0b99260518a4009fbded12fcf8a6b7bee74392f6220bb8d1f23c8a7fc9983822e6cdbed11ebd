"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["б.з.д.", "б.з."],
  abbreviated: ["б.з.д.", "б.з."],
  wide: ["біздің заманымызға дейін", "біздің заманымыз"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-ші тоқ.", "2-ші тоқ.", "3-ші тоқ.", "4-ші тоқ."],
  wide: ["1-ші тоқсан", "2-ші тоқсан", "3-ші тоқсан", "4-ші тоқсан"],
};

const monthValues = {
  narrow: ["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"],
  abbreviated: [
    "қаң",
    "ақп",
    "нау",
    "сәу",
    "мам",
    "мау",
    "шіл",
    "там",
    "қыр",
    "қаз",
    "қар",
    "жел",
  ],

  wide: [
    "қаңтар",
    "ақпан",
    "наурыз",
    "сәуір",
    "мамыр",
    "маусым",
    "шілде",
    "тамыз",
    "қыркүйек",
    "қазан",
    "қараша",
    "желтоқсан",
  ],
};
const formattingMonthValues = {
  narrow: ["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"],
  abbreviated: [
    "қаң",
    "ақп",
    "нау",
    "сәу",
    "мам",
    "мау",
    "шіл",
    "там",
    "қыр",
    "қаз",
    "қар",
    "жел",
  ],

  wide: [
    "қаңтар",
    "ақпан",
    "наурыз",
    "сәуір",
    "мамыр",
    "маусым",
    "шілде",
    "тамыз",
    "қыркүйек",
    "қазан",
    "қараша",
    "желтоқсан",
  ],
};

const dayValues = {
  narrow: ["Ж", "Д", "С", "С", "Б", "Ж", "С"],
  short: ["жс", "дс", "сс", "ср", "бс", "жм", "сб"],
  abbreviated: ["жс", "дс", "сс", "ср", "бс", "жм", "сб"],
  wide: [
    "жексенбі",
    "дүйсенбі",
    "сейсенбі",
    "сәрсенбі",
    "бейсенбі",
    "жұма",
    "сенбі",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасы",
    noon: "түс",
    morning: "таң",
    afternoon: "күндіз",
    evening: "кеш",
    night: "түн",
  },
  wide: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасы",
    noon: "түс",
    morning: "таң",
    afternoon: "күндіз",
    evening: "кеш",
    night: "түн",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасында",
    noon: "түс",
    morning: "таң",
    afternoon: "күн",
    evening: "кеш",
    night: "түн",
  },
  wide: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасында",
    noon: "түсте",
    morning: "таңертең",
    afternoon: "күндіз",
    evening: "кеште",
    night: "түнде",
  },
};

const suffixes = {
  0: "-ші",
  1: "-ші",
  2: "-ші",
  3: "-ші",
  4: "-ші",
  5: "-ші",
  6: "-шы",
  7: "-ші",
  8: "-ші",
  9: "-шы",
  10: "-шы",
  20: "-шы",
  30: "-шы",
  40: "-шы",
  50: "-ші",
  60: "-шы",
  70: "-ші",
  80: "-ші",
  90: "-шы",
  100: "-ші",
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const mod10 = number % 10;
  const b = number >= 100 ? 100 : null;
  const suffix =
    suffixes[number] || suffixes[mod10] || (b && suffixes[b]) || "";

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
