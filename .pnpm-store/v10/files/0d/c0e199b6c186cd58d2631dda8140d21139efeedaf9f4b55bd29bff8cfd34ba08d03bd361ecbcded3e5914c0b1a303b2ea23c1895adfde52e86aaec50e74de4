import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["BC", "AC"],
  abbreviated: ["きげんぜん", "せいれき"],
  wide: ["きげんぜん", "せいれき"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["だい1しはんき", "だい2しはんき", "だい3しはんき", "だい4しはんき"],
};

const monthValues = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],

  abbreviated: [
    "1がつ",
    "2がつ",
    "3がつ",
    "4がつ",
    "5がつ",
    "6がつ",
    "7がつ",
    "8がつ",
    "9がつ",
    "10がつ",
    "11がつ",
    "12がつ",
  ],

  wide: [
    "1がつ",
    "2がつ",
    "3がつ",
    "4がつ",
    "5がつ",
    "6がつ",
    "7がつ",
    "8がつ",
    "9がつ",
    "10がつ",
    "11がつ",
    "12がつ",
  ],
};

const dayValues = {
  narrow: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"],
  short: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"],
  abbreviated: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"],
  wide: [
    "にちようび",
    "げつようび",
    "かようび",
    "すいようび",
    "もくようび",
    "きんようび",
    "どようび",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや",
  },
  abbreviated: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや",
  },
  wide: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや",
  },
};
const formattingDayPeriodValues = {
  narrow: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや",
  },
  abbreviated: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや",
  },
  wide: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや",
  },
};

const ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = String(options?.unit);

  switch (unit) {
    case "year":
      return `${number}ねん`;
    case "quarter":
      return `だい${number}しはんき`;
    case "month":
      return `${number}がつ`;
    case "week":
      return `だい${number}しゅう`;
    case "date":
      return `${number}にち`;
    case "hour":
      return `${number}じ`;
    case "minute":
      return `${number}ふん`;
    case "second":
      return `${number}びょう`;
    default:
      return `${number}`;
  }
};

export const localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => Number(quarter) - 1,
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
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
