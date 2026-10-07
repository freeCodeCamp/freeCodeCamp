"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(mö|ms)/i,
  abbreviated: /^(mö|ms)/i,
  wide: /^(milattan önce|milattan sonra)/i
};
var parseEraPatterns = {
  any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]ç/i,
  wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
  abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
  wide: [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i]
};
var matchMonthPatterns = {
  narrow: /^[oşmnhtaek]/i,
  abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
  wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
};
var parseMonthPatterns = {
  narrow: [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i],
  any: [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i]
};
var matchDayPatterns = {
  narrow: /^[psçc]/i,
  short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
  abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
  wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
};
var parseDayPatterns = {
  narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
  any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
  wide: [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
  any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ö\.?ö\.?/i,
    pm: /^ö\.?s\.?/i,
    midnight: /^(gy|gece yarısı)/i,
    noon: /^öğ/i,
    morning: /^sa/i,
    afternoon: /^öğleden sonra/i,
    evening: /^ak/i,
    night: /^ge/i
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
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;