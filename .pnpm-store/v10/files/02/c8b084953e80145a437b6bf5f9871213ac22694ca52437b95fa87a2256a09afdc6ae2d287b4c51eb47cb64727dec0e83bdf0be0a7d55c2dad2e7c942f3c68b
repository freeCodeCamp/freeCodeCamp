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
  wide: ['قبل الميلاد', 'بعد الميلاد']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['ر1', 'ر2', 'ر3', 'ر4'],
  wide: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع']
};
var monthValues = {
  narrow: ['ي', 'ف', 'م', 'أ', 'م', 'ي', 'ي', 'أ', 'س', 'أ', 'ن', 'د'],
  abbreviated: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  wide: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
};
var dayValues = {
  narrow: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  short: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  abbreviated: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  wide: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
};
var dayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'م',
    morning: 'الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'المساء',
    night: 'الليل',
    midnight: 'منتصف الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    morning: 'الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'المساء',
    night: 'الليل',
    midnight: 'منتصف الليل'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    morning: 'الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'المساء',
    night: 'الليل',
    midnight: 'منتصف الليل'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'م',
    morning: 'في الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل',
    midnight: 'منتصف الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    morning: 'في الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل',
    midnight: 'منتصف الليل'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    morning: 'في الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل',
    midnight: 'منتصف الليل'
  }
};
var ordinalNumber = function ordinalNumber(num) {
  return String(num);
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