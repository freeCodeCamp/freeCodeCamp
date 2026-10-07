import buildMatchFn from "../../../_lib/buildMatchFn/index.js";
import buildMatchPatternFn from "../../../_lib/buildMatchPatternFn/index.js";
var matchOrdinalNumberPattern = /^(\d+)(வது)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(கி.மு.|கி.பி.)/i,
  abbreviated: /^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/,
  wide: /^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i
};
var parseEraPatterns = {
  any: [/கி\.?\s?மு\.?/, /கி\.?\s?பி\.?/]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^காலா.[1234]/i,
  wide: /^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i
};
var parseQuarterPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/(1|காலா.1|ஒன்றாம்)/i, /(2|காலா.2|இரண்டாம்)/i, /(3|காலா.3|மூன்றாம்)/i, /(4|காலா.4|நான்காம்)/i]
};
var matchMonthPatterns = {
  narrow: /^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i,
  abbreviated: /^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i,
  wide: /^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i
};
var parseMonthPatterns = {
  narrow: [/^ஜ$/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூ/i, /^ஜூ/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i],
  any: [/^ஜன/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூன்/i, /^ஜூலை/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i]
};
var matchDayPatterns = {
  narrow: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
  short: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
  abbreviated: /^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i,
  wide: /^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i
};
var parseDayPatterns = {
  narrow: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i],
  any: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i,
  any: /^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^மு/i,
    pm: /^பி/i,
    midnight: /^நள்/i,
    noon: /^நண்/i,
    morning: /காலை/i,
    afternoon: /மதியம்/i,
    evening: /மாலை/i,
    night: /இரவு/i
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