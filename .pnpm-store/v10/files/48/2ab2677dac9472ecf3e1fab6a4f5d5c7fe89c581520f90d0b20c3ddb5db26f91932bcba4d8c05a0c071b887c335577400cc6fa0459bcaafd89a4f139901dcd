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
  narrow: ['د', 'ن', 'أ', 'س', 'أ', 'ج', 'ج', 'م', 'أ', 'م', 'ف', 'ج'],
  abbreviated: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  wide: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
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
    pm: 'ع',
    morning: 'الصباح',
    noon: 'القايلة',
    afternoon: 'بعد القايلة',
    evening: 'العشية',
    night: 'الليل',
    midnight: 'نص الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'ع',
    morning: 'الصباح',
    noon: 'القايلة',
    afternoon: 'بعد القايلة',
    evening: 'العشية',
    night: 'الليل',
    midnight: 'نص الليل'
  },
  wide: {
    am: 'ص',
    pm: 'ع',
    morning: 'الصباح',
    noon: 'القايلة',
    afternoon: 'بعد القايلة',
    evening: 'العشية',
    night: 'الليل',
    midnight: 'نص الليل'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'ع',
    morning: 'في الصباح',
    noon: 'في القايلة',
    afternoon: 'بعد القايلة',
    evening: 'في العشية',
    night: 'في الليل',
    midnight: 'نص الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'ع',
    morning: 'في الصباح',
    noon: 'في القايلة',
    afternoon: 'بعد القايلة',
    evening: 'في العشية',
    night: 'في الليل',
    midnight: 'نص الليل'
  },
  wide: {
    am: 'ص',
    pm: 'ع',
    morning: 'في الصباح',
    noon: 'في القايلة',
    afternoon: 'بعد القايلة',
    evening: 'في العشية',
    night: 'في الليل',
    midnight: 'نص الليل'
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