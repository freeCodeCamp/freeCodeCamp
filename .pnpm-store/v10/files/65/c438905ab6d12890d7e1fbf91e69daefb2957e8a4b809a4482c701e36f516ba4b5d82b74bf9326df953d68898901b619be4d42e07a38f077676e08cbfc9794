import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['BC', 'AC'],
  abbreviated: ['きげんぜん', 'せいれき'],
  wide: ['きげんぜん', 'せいれき']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['だい1しはんき', 'だい2しはんき', 'だい3しはんき', 'だい4しはんき']
};
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['1がつ', '2がつ', '3がつ', '4がつ', '5がつ', '6がつ', '7がつ', '8がつ', '9がつ', '10がつ', '11がつ', '12がつ'],
  wide: ['1がつ', '2がつ', '3がつ', '4がつ', '5がつ', '6がつ', '7がつ', '8がつ', '9がつ', '10がつ', '11がつ', '12がつ']
};
var dayValues = {
  narrow: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  short: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  abbreviated: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  wide: ['にちようび', 'げつようび', 'かようび', 'すいようび', 'もくようび', 'きんようび', 'どようび']
};
var dayPeriodValues = {
  narrow: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  },
  abbreviated: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  },
  wide: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  },
  abbreviated: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  },
  wide: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  switch (unit) {
    case 'year':
      return "".concat(number, "\u306D\u3093");
    case 'quarter':
      return "\u3060\u3044".concat(number, "\u3057\u306F\u3093\u304D");
    case 'month':
      return "".concat(number, "\u304C\u3064");
    case 'week':
      return "\u3060\u3044".concat(number, "\u3057\u3085\u3046");
    case 'date':
      return "".concat(number, "\u306B\u3061");
    case 'hour':
      return "".concat(number, "\u3058");
    case 'minute':
      return "".concat(number, "\u3075\u3093");
    case 'second':
      return "".concat(number, "\u3073\u3087\u3046");
    default:
      return "".concat(number);
  }
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
export default localize;