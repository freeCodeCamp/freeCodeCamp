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
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
  wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
};
var parseEraPatterns = {
  any: [/^قبل/i, /^بعد/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ر[1234]/i,
  wide: /^الربع [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[يفمأمسند]/i,
  abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i,
  wide: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i
};
var parseMonthPatterns = {
  narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^غ/i, /^ش/i, /^أ/i, /^ن/i, /^د/i],
  any: [/^ين/i, /^فب/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^غشت/i, /^ش/i, /^أك/i, /^ن/i, /^د/i]
};
var matchDayPatterns = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|إثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|إثن|ثلا|أرب|خمي|جمعة|سبت)/i,
  wide: /^(الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
};
var parseDayPatterns = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
  wide: [/^الأحد/i, /^الإثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
  any: [/^أح/i, /^إث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
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
      return Number(index) + 1;
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