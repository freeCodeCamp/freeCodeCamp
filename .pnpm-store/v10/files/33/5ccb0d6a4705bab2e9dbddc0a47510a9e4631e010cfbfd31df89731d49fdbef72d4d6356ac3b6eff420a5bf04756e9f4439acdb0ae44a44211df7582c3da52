import buildMatchFn from "../../../_lib/buildMatchFn/index.js";
import buildMatchPatternFn from "../../../_lib/buildMatchPatternFn/index.js";
var matchOrdinalNumberPattern = /^(\d+)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
};
var parseEraPatterns = {
  any: [/^p/i, /^n/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
  wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
};
var parseQuarterPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
};
var matchMonthPatterns = {
  narrow: /^[slmkcwpg]/i,
  abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
  wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
};
var parseMonthPatterns = {
  narrow: [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i],
  any: [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i]
};
var matchDayPatterns = {
  narrow: /^[npwścs]/i,
  short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
  abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
  wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
};
var parseDayPatterns = {
  narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
  abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
  any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
  any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
};
var parseDayPeriodPatterns = {
  narrow: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  },
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
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