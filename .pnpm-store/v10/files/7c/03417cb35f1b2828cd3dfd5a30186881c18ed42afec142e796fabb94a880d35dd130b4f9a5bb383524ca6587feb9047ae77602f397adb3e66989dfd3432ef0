"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["BC", "AD"],
  abbreviated: ["BC", "AD"],
  wide: ["기원전", "서기"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1분기", "2분기", "3분기", "4분기"],
};

const monthValues = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],

  abbreviated: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],

  wide: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
};

const dayValues = {
  narrow: ["일", "월", "화", "수", "목", "금", "토"],
  short: ["일", "월", "화", "수", "목", "금", "토"],
  abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
  wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
};

const dayPeriodValues = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤",
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤",
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤",
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤",
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤",
  },
};

const ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = String(options?.unit);

  switch (unit) {
    case "minute":
    case "second":
      return String(number);
    case "date":
      return number + "일";
    default:
      return number + "번째";
  }
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
