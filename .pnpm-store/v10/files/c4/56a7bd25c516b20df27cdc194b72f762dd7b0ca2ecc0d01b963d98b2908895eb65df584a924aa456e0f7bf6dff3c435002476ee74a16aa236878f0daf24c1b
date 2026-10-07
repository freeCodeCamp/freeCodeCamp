"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ઈસપૂ|ઈસ)/i,
  abbreviated: /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,
  wide: /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i
};
var parseEraPatterns = {
  any: [/^ઈસપૂ/i, /^ઈસ/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](લો|જો|થો)? ત્રિમાસ/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[જાફેમાએમેજૂજુઓસઓનડિ]/i,
  abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,
  wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i
};
var parseMonthPatterns = {
  narrow: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i],
  any: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i]
};
var matchDayPatterns = {
  narrow: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
  short: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
  abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,
  wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i
};
var parseDayPatterns = {
  narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i],
  any: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|મ\.?|સ|બ|સાં|રા)/i,
  any: /^(a|p|મ\.?|સ|બ|સાં|રા)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^મ\.?/i,
    noon: /^બ/i,
    morning: /સ/i,
    afternoon: /બ/i,
    evening: /સાં/i,
    night: /રા/i
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