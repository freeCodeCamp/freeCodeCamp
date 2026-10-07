import buildMatchFn from "../../../_lib/buildMatchFn/index.js";
import buildMatchPatternFn from "../../../_lib/buildMatchPatternFn/index.js";
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(pr\.n\.e\.|AD)/i,
  abbreviated: /^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,
  wide: /^(Prije Hrista|prije nove ere|Poslije Hrista|nova era)/i
};
var parseEraPatterns = {
  any: [/^pr/i, /^(po|nova)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?kv\.?/i,
  wide: /^[1234]\. kvartal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(10|11|12|[123456789])\./i,
  abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,
  wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(juni|juna)|(juli|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i
};
var parseMonthPatterns = {
  narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[npusčc]/i,
  short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
  abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
  wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|poslije podne|ujutru)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^pono/i,
    noon: /^pod/i,
    morning: /jutro/i,
    afternoon: /(poslije\s|po)+podne/i,
    evening: /(uvece|uveče)/i,
    night: /(nocu|noću)/i
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