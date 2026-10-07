"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i,
  wide: /^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i
};
var parseEraPatterns = {
  any: [/^قبل/i, /^بعد/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^س‌م[1234]/i,
  wide: /^سه‌ماهه [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[جژفمآاماسند]/i,
  abbreviated: /^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i,
  wide: /^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i
};
var parseMonthPatterns = {
  narrow: [/^(ژ|ج)/i, /^ف/i, /^م/i, /^(آ|ا)/i, /^م/i, /^(ژ|ج)/i, /^(ج|ژ)/i, /^(آ|ا)/i, /^س/i, /^ا/i, /^ن/i, /^د/i],
  any: [/^ژا/i, /^ف/i, /^ما/i, /^آپ/i, /^(می|مه)/i, /^(ژوئن|جون)/i, /^(ژوئی|جول)/i, /^(اوت|آگ)/i, /^س/i, /^(اوک|اک)/i, /^ن/i, /^د/i]
};
var matchDayPatterns = {
  narrow: /^[شیدسچپج]/i,
  short: /^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i,
  abbreviated: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i,
  wide: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i
};
var parseDayPatterns = {
  narrow: [/^ی/i, /^دو/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
  any: [/^(ی|1ش|یکشنبه)/i, /^(د|2ش|دوشنبه)/i, /^(س|3ش|سه‌شنبه)/i, /^(چ|4ش|چهارشنبه)/i, /^(پ|5ش|پنجشنبه)/i, /^(ج|جمعه)/i, /^(ش|شنبه)/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i,
  abbreviated: /^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i,
  wide: /^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(ق|ق.ظ.|قبل‌ازظهر)/i,
    pm: /^(ب|ب.ظ.|بعدازظهر)/i,
    midnight: /^(‌نیمه‌شب|ن)/i,
    noon: /^(ظ|ظهر)/i,
    morning: /(ص|صبح)/i,
    afternoon: /(ب|ب.ظ.|بعدازظهر)/i,
    evening: /(ع|عصر)/i,
    night: /(ش|شب)/i
  }
};
var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0, _index.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0, _index.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0, _index.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;