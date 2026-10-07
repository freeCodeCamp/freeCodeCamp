"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(-?(ші|шы))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((б )?з\.?\s?д\.?)/i,
  abbreviated: /^((б )?з\.?\s?д\.?)/i,
  wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i
};
var parseEraPatterns = {
  any: [/^б/i, /^з/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?ші)? тоқ.?/i,
  wide: /^[1234](-?ші)? тоқсан/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,
  abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,
  wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i
};
var parseMonthPatterns = {
  narrow: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i],
  abbreviated: [/^қаң/i, /^ақп/i, /^нау/i, /^сәу/i, /^мам/i, /^мау/i, /^шіл/i, /^там/i, /^қыр/i, /^қаз/i, /^қар/i, /^жел/i],
  any: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i]
};
var matchDayPatterns = {
  narrow: /^(ж|д|с|с|б|ж|с)/i,
  short: /^(жс|дс|сс|ср|бс|жм|сб)/i,
  wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i
};
var parseDayPatterns = {
  narrow: [/^ж/i, /^д/i, /^с/i, /^с/i, /^б/i, /^ж/i, /^с/i],
  short: [/^жс/i, /^дс/i, /^сс/i, /^ср/i, /^бс/i, /^жм/i, /^сб/i],
  any: [/^ж[ек]/i, /^д[үй]/i, /^сe[й]/i, /^сә[р]/i, /^б[ей]/i, /^ж[ұм]/i, /^се[н]/i]
};
var matchDayPeriodPatterns = {
  narrow: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
  wide: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
  any: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ТД/i,
    pm: /^ТК/i,
    midnight: /^түн орта/i,
    noon: /^күндіз/i,
    morning: /таң/i,
    afternoon: /түс/i,
    evening: /кеш/i,
    night: /түн/i
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