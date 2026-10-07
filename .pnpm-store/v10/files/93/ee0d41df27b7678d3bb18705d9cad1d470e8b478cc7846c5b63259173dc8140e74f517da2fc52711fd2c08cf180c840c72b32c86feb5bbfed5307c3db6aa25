"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.cjs");
var _index2 = require("../../_lib/buildMatchPatternFn.cjs");

const matchOrdinalNumberPattern = /^(\d+)\.?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i,
  abbreviated: /^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i,
  wide: /^(ovdal Kristusa|ovdal min áiggi|maŋŋel Kristusa|min áigi)/i,
};
const parseEraPatterns = {
  any: [/^o/i, /^m/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? kvartála/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[ogncmsbčj]/i,
  abbreviated:
    /^(ođđa|guov|njuk|cuo|mies|geas|suoi|borg|čakč|golg|skáb|juov)\.?/i,
  wide: /^(ođđajagemánnu|guovvamánnu|njukčamánnu|cuoŋománnu|miessemánnu|geassemánnu|suoidnemánnu|borgemánnu|čakčamánnu|golggotmánnu|skábmamánnu|juovlamánnu)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^o/i,
    /^g/i,
    /^n/i,
    /^c/i,
    /^m/i,
    /^g/i,
    /^s/i,
    /^b/i,
    /^č/i,
    /^g/i,
    /^s/i,
    /^j/i,
  ],

  any: [
    /^o/i,
    /^gu/i,
    /^n/i,
    /^c/i,
    /^m/i,
    /^ge/i,
    /^su/i,
    /^b/i,
    /^č/i,
    /^go/i,
    /^sk/i,
    /^j/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[svmgdbl]/i,
  short: /^(sotn|vuos|maŋ|gask|duor|bear|láv)/i,
  abbreviated: /^(sotn|vuos|maŋ|gask|duor|bear|láv)/i,
  wide: /^(sotnabeaivi|vuossárga|maŋŋebárga|gaskavahkku|duorastat|bearjadat|lávvardat)/i,
};
const parseDayPatterns = {
  any: [/^s/i, /^v/i, /^m/i, /^g/i, /^d/i, /^b/i, /^l/i],
};

const matchDayPeriodPatterns = {
  narrow:
    /^(gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku)|[ap])/i,
  any: /^([ap]\.?\s?m\.?|gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a(\.?\s?m\.?)?$/i,
    pm: /^p(\.?\s?m\.?)?$/i,
    midnight: /^gaskai/i,
    noon: /^gaskab/i,
    morning: /iđđes/i,
    afternoon: /maŋŋel gaskabeaivvi/i,
    evening: /eahkes/i,
    night: /ihkku/i,
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
