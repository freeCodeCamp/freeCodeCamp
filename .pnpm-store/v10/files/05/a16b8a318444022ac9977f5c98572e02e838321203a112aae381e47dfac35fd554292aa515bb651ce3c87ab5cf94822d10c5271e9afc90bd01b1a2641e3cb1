"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /[قب]/,
  abbreviated: /[قب]\.م\./,
  wide: /(قبل|بعد) الميلاد/
};
var parseEraPatterns = {
  any: [/قبل/, /بعد/]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /ر[1234]/,
  wide: /الربع (الأول|الثاني|الثالث|الرابع)/
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[جفمأسند]/,
  abbreviated: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
  wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
};
var parseMonthPatterns = {
  narrow: [/^ج/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ج/i, /^ج/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
  any: [/^جانفي/i, /^فيفري/i, /^مارس/i, /^أفريل/i, /^ماي/i, /^جوان/i, /^جويلية/i, /^أوت/i, /^سبتمبر/i, /^أكتوبر/i, /^نوفمبر/i, /^ديسمبر/i]
};
var matchDayPatterns = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
};
var parseDayPatterns = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
  wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
  any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ص|ع|ن ل|ل|(في|مع) (صباح|قايلة|عشية|ليل))/,
  any: /^([صع]|نص الليل|قايلة|(في|مع) (صباح|قايلة|عشية|ليل))/
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ص/,
    pm: /^ع/,
    midnight: /نص الليل/,
    noon: /قايلة/,
    afternoon: /بعد القايلة/,
    morning: /صباح/,
    evening: /عشية/,
    night: /ليل/
  }
};
var match = {
  ordinalNumber: (0, _index.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index2.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index2.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0, _index2.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0, _index2.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0, _index2.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;