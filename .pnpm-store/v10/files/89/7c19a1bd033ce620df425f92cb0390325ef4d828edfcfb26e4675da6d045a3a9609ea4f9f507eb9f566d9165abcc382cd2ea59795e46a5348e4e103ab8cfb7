"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["НТӨ", "НТ"],
  abbreviated: ["НТӨ", "НТ"],
  wide: ["нийтийн тооллын өмнөх", "нийтийн тооллын"],
};

const quarterValues = {
  narrow: ["I", "II", "III", "IV"],
  abbreviated: ["I улирал", "II улирал", "III улирал", "IV улирал"],
  wide: ["1-р улирал", "2-р улирал", "3-р улирал", "4-р улирал"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ],

  abbreviated: [
    "1-р сар",
    "2-р сар",
    "3-р сар",
    "4-р сар",
    "5-р сар",
    "6-р сар",
    "7-р сар",
    "8-р сар",
    "9-р сар",
    "10-р сар",
    "11-р сар",
    "12-р сар",
  ],

  wide: [
    "Нэгдүгээр сар",
    "Хоёрдугаар сар",
    "Гуравдугаар сар",
    "Дөрөвдүгээр сар",
    "Тавдугаар сар",
    "Зургаадугаар сар",
    "Долоодугаар сар",
    "Наймдугаар сар",
    "Есдүгээр сар",
    "Аравдугаар сар",
    "Арваннэгдүгээр сар",
    "Арван хоёрдугаар сар",
  ],
};

const formattingMonthValues = {
  narrow: [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ],

  abbreviated: [
    "1-р сар",
    "2-р сар",
    "3-р сар",
    "4-р сар",
    "5-р сар",
    "6-р сар",
    "7-р сар",
    "8-р сар",
    "9-р сар",
    "10-р сар",
    "11-р сар",
    "12-р сар",
  ],

  wide: [
    "нэгдүгээр сар",
    "хоёрдугаар сар",
    "гуравдугаар сар",
    "дөрөвдүгээр сар",
    "тавдугаар сар",
    "зургаадугаар сар",
    "долоодугаар сар",
    "наймдугаар сар",
    "есдүгээр сар",
    "аравдугаар сар",
    "арваннэгдүгээр сар",
    "арван хоёрдугаар сар",
  ],
};

const dayValues = {
  narrow: ["Н", "Д", "М", "Л", "П", "Б", "Б"],
  short: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
  abbreviated: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"],
  wide: ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"],
};

const formattingDayValues = {
  narrow: ["Н", "Д", "М", "Л", "П", "Б", "Б"],
  short: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
  abbreviated: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"],
  wide: ["ням", "даваа", "мягмар", "лхагва", "пүрэв", "баасан", "бямба"],
};

const dayPeriodValues = {
  narrow: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө",
  },
  abbreviated: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө",
  },
  wide: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө",
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
  }),
});
