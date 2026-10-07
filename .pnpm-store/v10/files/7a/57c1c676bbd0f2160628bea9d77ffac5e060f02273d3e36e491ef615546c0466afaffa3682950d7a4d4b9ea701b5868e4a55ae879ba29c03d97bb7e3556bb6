import buildMatchFn from "../../../_lib/buildMatchFn/index.js";
import buildMatchPatternFn from "../../../_lib/buildMatchPatternFn/index.js";
var matchOrdinalNumberPattern = /^(\d+)e?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^([vn]\.? ?C\.?)/,
  abbreviated: /^([vn]\. ?Chr\.?)/,
  wide: /^((voor|na) Christus)/
};
var parseEraPatterns = {
  any: [/^v/, /^n/]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234]e kwartaal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
  wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
};
var matchDayPatterns = {
  narrow: /^[zmdwv]/i,
  short: /^(zo|ma|di|wo|do|vr|za)/i,
  abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
  wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
};
var parseDayPatterns = {
  narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i],
  any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]
};
var matchDayPeriodPatterns = {
  any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^middernacht/i,
    noon: /^het middaguur/i,
    morning: /ochtend/i,
    afternoon: /middag/i,
    evening: /avond/i,
    night: /nacht/i
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