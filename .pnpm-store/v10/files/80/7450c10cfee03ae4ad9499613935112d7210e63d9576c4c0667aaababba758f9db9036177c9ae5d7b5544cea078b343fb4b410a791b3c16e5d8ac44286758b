"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(ye|yèm)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i,
  abbreviated: /^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i,
  wide: /^(avan Jezi Kris|apre Jezi Kris)/i
};
var parseEraPatterns = {
  any: [/^av/i, /^ap/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](ye|yèm)? trimès/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i,
  wide: /^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^o/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^ma/i, /^av/i, /^me/i, /^je/i, /^ji/i, /^ou/i, /^s/i, /^ok/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[lmjvsd]/i,
  short: /^(di|le|ma|me|je|va|sa)/i,
  abbreviated: /^(dim|len|mad|mèk|jed|van|sam)\.?/i,
  wide: /^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^di/i, /^le/i, /^ma/i, /^mè/i, /^je/i, /^va/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i,
  any: /^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^min/i,
    noon: /^mid/i,
    morning: /mat/i,
    afternoon: /ap/i,
    evening: /sw/i,
    night: /nwit/i
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