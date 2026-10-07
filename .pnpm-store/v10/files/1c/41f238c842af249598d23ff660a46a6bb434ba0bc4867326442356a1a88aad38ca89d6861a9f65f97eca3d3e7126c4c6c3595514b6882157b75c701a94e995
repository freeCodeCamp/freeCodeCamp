"use strict";
exports.localize = void 0;

var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["پ", "د"],
  abbreviated: ["پ-ز", "د-ز"],
  wide: ["پێش زاین", "دوای زاین"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["چ1م", "چ2م", "چ3م", "چ4م"],
  wide: ["چارەگی یەکەم", "چارەگی دووەم", "چارەگی سێیەم", "چارەگی چوارەم"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: [
    "ک-د",
    "ش",
    "ئا",
    "ن",
    "م",
    "ح",
    "ت",
    "ئا",
    "ئە",
    "تش-ی",
    "تش-د",
    "ک-ی",
  ],

  abbreviated: [
    "کان-دوو",
    "شوب",
    "ئاد",
    "نیس",
    "مایس",
    "حوز",
    "تەم",
    "ئاب",
    "ئەل",
    "تش-یەک",
    "تش-دوو",
    "کان-یەک",
  ],

  wide: [
    "کانوونی دووەم",
    "شوبات",
    "ئادار",
    "نیسان",
    "مایس",
    "حوزەیران",
    "تەمموز",
    "ئاب",
    "ئەیلول",
    "تشرینی یەکەم",
    "تشرینی دووەم",
    "کانوونی یەکەم",
  ],
};

const dayValues = {
  narrow: ["ی-ش", "د-ش", "س-ش", "چ-ش", "پ-ش", "هە", "ش"],
  short: ["یە-شە", "دوو-شە", "سێ-شە", "چو-شە", "پێ-شە", "هەی", "شە"],
  abbreviated: [
    "یەک-شەم",
    "دوو-شەم",
    "سێ-شەم",
    "چوار-شەم",
    "پێنج-شەم",
    "هەینی",
    "شەمە",
  ],

  wide: [
    "یەک شەمە",
    "دوو شەمە",
    "سێ شەمە",
    "چوار شەمە",
    "پێنج شەمە",
    "هەینی",
    "شەمە",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "پ",
    pm: "د",
    midnight: "ن-ش",
    noon: "ن",
    morning: "بەیانی",
    afternoon: "دوای نیوەڕۆ",
    evening: "ئێوارە",
    night: "شەو",
  },
  abbreviated: {
    am: "پ-ن",
    pm: "د-ن",
    midnight: "نیوە شەو",
    noon: "نیوەڕۆ",
    morning: "بەیانی",
    afternoon: "دوای نیوەڕۆ",
    evening: "ئێوارە",
    night: "شەو",
  },
  wide: {
    am: "پێش نیوەڕۆ",
    pm: "دوای نیوەڕۆ",
    midnight: "نیوە شەو",
    noon: "نیوەڕۆ",
    morning: "بەیانی",
    afternoon: "دوای نیوەڕۆ",
    evening: "ئێوارە",
    night: "شەو",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "پ",
    pm: "د",
    midnight: "ن-ش",
    noon: "ن",
    morning: "لە بەیانیدا",
    afternoon: "لە دوای نیوەڕۆدا",
    evening: "لە ئێوارەدا",
    night: "لە شەودا",
  },
  abbreviated: {
    am: "پ-ن",
    pm: "د-ن",
    midnight: "نیوە شەو",
    noon: "نیوەڕۆ",
    morning: "لە بەیانیدا",
    afternoon: "لە دوای نیوەڕۆدا",
    evening: "لە ئێوارەدا",
    night: "لە شەودا",
  },
  wide: {
    am: "پێش نیوەڕۆ",
    pm: "دوای نیوەڕۆ",
    midnight: "نیوە شەو",
    noon: "نیوەڕۆ",
    morning: "لە بەیانیدا",
    afternoon: "لە دوای نیوەڕۆدا",
    evening: "لە ئێوارەدا",
    night: "لە شەودا",
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
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
});
