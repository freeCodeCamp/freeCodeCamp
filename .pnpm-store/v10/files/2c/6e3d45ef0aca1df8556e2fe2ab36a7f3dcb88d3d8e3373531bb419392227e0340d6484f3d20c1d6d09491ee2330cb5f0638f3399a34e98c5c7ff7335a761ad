import buildMatchFn from "../../../_lib/buildMatchFn/index.js";
import buildMatchPatternFn from "../../../_lib/buildMatchPatternFn/index.js";
var matchOrdinalNumberPattern = /^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(きげん[前後]|せいれき)/i,
  wide: /^(きげん[前後]|せいれき)/i
};
var parseEraPatterns = {
  narrow: [/^B/i, /^A/i],
  any: [/^(きげんぜん)/i, /^(せいれき|きげんご)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^だい[1234一二三四１２３４]しはんき/i
};
var parseQuarterPatterns = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
};
var matchMonthPatterns = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])がつ/i,
  wide: /^([123456789]|1[012])がつ/i
};
var parseMonthPatterns = {
  any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
};
var matchDayPatterns = {
  narrow: /^(にち|げつ|か|すい|もく|きん|ど)/,
  short: /^(にち|げつ|か|すい|もく|きん|ど)/,
  abbreviated: /^(にち|げつ|か|すい|もく|きん|ど)/,
  wide: /^(にち|げつ|か|すい|もく|きん|ど)ようび/
};
var parseDayPatterns = {
  any: [/^にち/, /^げつ/, /^か/, /^すい/, /^もく/, /^きん/, /^ど/]
};
var matchDayPeriodPatterns = {
  any: /^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(A|ごぜん)/i,
    pm: /^(P|ごご)/i,
    midnight: /^しんや|まよなか/i,
    noon: /^しょうご/i,
    morning: /^あさ/i,
    afternoon: /^ごご/i,
    evening: /^よる/i,
    night: /^しんや/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
export default match;