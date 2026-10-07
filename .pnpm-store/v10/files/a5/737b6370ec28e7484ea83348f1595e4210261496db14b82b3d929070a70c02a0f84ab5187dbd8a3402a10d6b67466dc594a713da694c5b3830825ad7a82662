"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.cjs");
var _index2 = require("../../_lib/buildMatchPatternFn.cjs");

const matchOrdinalNumberPattern = /^(\d+)(-rë|-të|t|)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(p|m)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(para krishtit|mbas krishtit)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(p|m)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]-mujori (i{1,3}|iv)/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jsmpqkftnd]/i,
  abbreviated: /^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,
  wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^s/i,
    /^m/i,
    /^p/i,
    /^m/i,
    /^q/i,
    /^k/i,
    /^g/i,
    /^s/i,
    /^t/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^shk/i,
    /^mar/i,
    /^pri/i,
    /^maj/i,
    /^qer/i,
    /^kor/i,
    /^gu/i,
    /^sht/i,
    /^tet/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[dhmeps]/i,
  short: /^(di|hë|ma|më|en|pr|sh)/i,
  abbreviated: /^(die|hën|mar|mër|enj|pre|sht)/i,
  wide: /^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i,
};
const parseDayPatterns = {
  narrow: [/^d/i, /^h/i, /^m/i, /^m/i, /^e/i, /^p/i, /^s/i],
  any: [/^d/i, /^h/i, /^ma/i, /^më/i, /^e/i, /^p/i, /^s/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,
  any: /^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^p/i,
    pm: /^m/i,
    midnight: /^me/i,
    noon: /^dr/i,
    morning: /mëngjes/i,
    afternoon: /mbasdite/i,
    evening: /mbrëmje/i,
    night: /natë/i,
  },
};

const match = (exports.match = {
  ordinalNumber: (0, _index2.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0, _index.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0, _index.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0, _index.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0, _index.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0, _index.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
});
