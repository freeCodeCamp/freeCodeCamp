"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['ق', 'ب'],
  abbreviated: ['ق.م.', 'ب.م.'],
  wide: ['قبل از میلاد', 'بعد از میلاد']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['س‌م1', 'س‌م2', 'س‌م3', 'س‌م4'],
  wide: ['سه‌ماهه 1', 'سه‌ماهه 2', 'سه‌ماهه 3', 'سه‌ماهه 4']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['ژ', 'ف', 'م', 'آ', 'م', 'ج', 'ج', 'آ', 'س', 'ا', 'ن', 'د'],
  abbreviated: ['ژانـ', 'فور', 'مارس', 'آپر', 'می', 'جون', 'جولـ', 'آگو', 'سپتـ', 'اکتـ', 'نوامـ', 'دسامـ'],
  wide: ['ژانویه', 'فوریه', 'مارس', 'آپریل', 'می', 'جون', 'جولای', 'آگوست', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر']
};
var dayValues = {
  narrow: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  short: ['1ش', '2ش', '3ش', '4ش', '5ش', 'ج', 'ش'],
  abbreviated: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  wide: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
};
var dayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'ص',
    afternoon: 'ب.ظ.',
    evening: 'ع',
    night: 'ش'
  },
  abbreviated: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب'
  },
  wide: {
    am: 'قبل‌ازظهر',
    pm: 'بعدازظهر',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'ص',
    afternoon: 'ب.ظ.',
    evening: 'ع',
    night: 'ش'
  },
  abbreviated: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب'
  },
  wide: {
    am: 'قبل‌ازظهر',
    pm: 'بعدازظهر',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  return String(dirtyNumber);
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;