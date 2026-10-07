import { buildMatchFn } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn } from "../../_lib/buildMatchPatternFn.js";

const matchOrdinalNumberPattern = /^(\d+)(º)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(q|w)/i,
  abbreviated: /^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,
  wide: /^(qabel kristu|before common era|wara kristu|common era)/i,
};
const parseEraPatterns = {
  any: [/^(q|b)/i, /^(w|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^k[1234]/i,
  wide: /^[1234](\.)? kwart/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmaglsond]/i,
  abbreviated: /^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,
  wide: /^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^ġ/i,
    /^l/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mej/i,
    /^ġ/i,
    /^l/i,
    /^aw/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[ħteġs]/i,
  short: /^(ħa|tn|tl|er|ħa|ġi|si)/i,
  abbreviated: /^(ħad|tne|tli|erb|ħam|ġim|sib)/i,
  wide: /^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i,
};
const parseDayPatterns = {
  narrow: [/^ħ/i, /^t/i, /^t/i, /^e/i, /^ħ/i, /^ġ/i, /^s/i],
  any: [
    /^(il-)?ħad/i,
    /^(it-)?tn/i,
    /^(it-)?tl/i,
    /^(l-)?er/i,
    /^(il-)?ham/i,
    /^(il-)?ġi/i,
    /^(is-)?si/i,
  ],
};

const matchDayPeriodPatterns = {
  narrow:
    /^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,
  any: /^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^f'nofsillejl/i,
    noon: /^f'nofsinhar/i,
    morning: /għodwa/i,
    afternoon: /wara(\s.*)nofsinhar/i,
    evening: /filgħaxija/i,
    night: /lejl/i,
  },
};

export const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
