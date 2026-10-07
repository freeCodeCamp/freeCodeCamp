"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.cjs");
var _index2 = require("../../_lib/buildMatchPatternFn.cjs");

const matchOrdinalNumberPattern = /^(\d+)\.?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
  abbreviated: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
  wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i,
};

const parseEraPatterns = {
  any: [/^p[řr]/i, /^(po|n)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i,
  wide: /^[1234]\. [čc]tvrtlet[íi]/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[lúubdkčcszřrlp]/i,
  abbreviated:
    /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,
  wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^l/i,
    /^[úu]/i,
    /^b/i,
    /^d/i,
    /^k/i,
    /^[čc]/i,
    /^[čc]/i,
    /^s/i,
    /^z/i,
    /^[řr]/i,
    /^l/i,
    /^p/i,
  ],

  any: [
    /^led/i,
    /^[úu]n/i,
    /^b[řr]e/i,
    /^dub/i,
    /^kv[ěe]/i,
    /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,
    /^[čc]vc|[čc]erven(ec|ce)/i,
    /^srp/i,
    /^z[áa][řr]/i,
    /^[řr][íi]j/i,
    /^lis/i,
    /^pro/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[npuúsčps]/i,
  short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
  abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,
  wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i,
};

const parseDayPatterns = {
  narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i],
  any: [/^ne/i, /^po/i, /^[úu]t/i, /^st/i, /^[čc]t/i, /^p[áa]/i, /^so/i],
};

const matchDayPeriodPatterns = {
  any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^dop/i,
    pm: /^odp/i,
    midnight: /^p[ůu]lnoc/i,
    noon: /^poledne/i,
    morning: /r[áa]no/i,
    afternoon: /odpoledne/i,
    evening: /ve[čc]er/i,
    night: /noc/i,
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
