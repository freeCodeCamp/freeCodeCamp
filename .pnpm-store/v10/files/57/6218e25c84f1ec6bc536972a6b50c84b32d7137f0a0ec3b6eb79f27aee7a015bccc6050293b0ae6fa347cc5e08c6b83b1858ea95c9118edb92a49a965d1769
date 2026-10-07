import buildMatchFn from "../../../_lib/buildMatchFn/index.js";
import buildMatchPatternFn from "../../../_lib/buildMatchPatternFn/index.js";
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ب|ك)/i,
  wide: /^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i
};
var parseEraPatterns = {
  any: [/^بۇرۇن/i, /^كىيىن/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^چ[1234]/i,
  wide: /^چارەك [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[يفمئامئ‍ئاسۆند]/i,
  abbreviated: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,
  wide: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i
};
var parseMonthPatterns = {
  narrow: [/^ي/i, /^ف/i, /^م/i, /^ا/i, /^م/i, /^ى‍/i, /^ى‍/i, /^ا‍/i, /^س/i, /^ۆ/i, /^ن/i, /^د/i],
  any: [/^يان/i, /^فېۋ/i, /^مار/i, /^ئاپ/i, /^ماي/i, /^ئىيۇن/i, /^ئىيول/i, /^ئاۋ/i, /^سىن/i, /^ئۆك/i, /^نوي/i, /^دىك/i]
};
var matchDayPatterns = {
  narrow: /^[دسچپجشي]/i,
  short: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
  abbreviated: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
  wide: /^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i
};
var parseDayPatterns = {
  narrow: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
  any: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,
  any: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ئە/i,
    pm: /^چ/i,
    midnight: /^ك/i,
    noon: /^چ/i,
    morning: /ئەتىگەن/i,
    afternoon: /چۈشتىن كىيىن/i,
    evening: /ئاخشىم/i,
    night: /كىچە/i
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