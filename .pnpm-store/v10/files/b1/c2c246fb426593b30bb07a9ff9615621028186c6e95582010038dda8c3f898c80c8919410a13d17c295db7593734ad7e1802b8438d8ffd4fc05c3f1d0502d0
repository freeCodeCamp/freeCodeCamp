"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.cjs");
var _index2 = require("../../_lib/buildMatchPatternFn.cjs");

const matchOrdinalNumberPattern = /^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(খ্রিঃপূঃ|খ্রিঃ)/i,
  abbreviated: /^(খ্রিঃপূর্ব|খ্রিঃ)/i,
  wide: /^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i,
};
const parseEraPatterns = {
  narrow: [/^খ্রিঃপূঃ/i, /^খ্রিঃ/i],
  abbreviated: [/^খ্রিঃপূর্ব/i, /^খ্রিঃ/i],
  wide: [/^খ্রিস্টপূর্ব/i, /^খ্রিস্টাব্দ/i],
};

const matchQuarterPatterns = {
  narrow: /^[১২৩৪]/i,
  abbreviated: /^[১২৩৪]ত্রৈ/i,
  wide: /^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i,
};
const parseQuarterPatterns = {
  any: [/১/i, /২/i, /৩/i, /৪/i],
};

const matchMonthPatterns = {
  narrow:
    /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
  abbreviated:
    /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
  wide: /^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i,
};
const parseMonthPatterns = {
  any: [
    /^জানু/i,
    /^ফেব্রু/i,
    /^মার্চ/i,
    /^এপ্রিল/i,
    /^মে/i,
    /^জুন/i,
    /^জুলাই/i,
    /^আগস্ট/i,
    /^সেপ্ট/i,
    /^অক্টো/i,
    /^নভে/i,
    /^ডিসে/i,
  ],
};

const matchDayPatterns = {
  narrow: /^(র|সো|ম|বু|বৃ|শু|শ)+/i,
  short: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
  abbreviated: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
  wide: /^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i,
};
const parseDayPatterns = {
  narrow: [/^র/i, /^সো/i, /^ম/i, /^বু/i, /^বৃ/i, /^শু/i, /^শ/i],
  short: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i],

  abbreviated: [
    /^রবি/i,
    /^সোম/i,
    /^মঙ্গল/i,
    /^বুধ/i,
    /^বৃহ/i,
    /^শুক্র/i,
    /^শনি/i,
  ],

  wide: [
    /^রবিবার/i,
    /^সোমবার/i,
    /^মঙ্গলবার/i,
    /^বুধবার/i,
    /^বৃহস্পতিবার /i,
    /^শুক্রবার/i,
    /^শনিবার/i,
  ],
};

const matchDayPeriodPatterns = {
  narrow: /^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
  abbreviated: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
  wide: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^পূ/i,
    pm: /^অপ/i,
    midnight: /^মধ্যরাত/i,
    noon: /^মধ্যাহ্ন/i,
    morning: /সকাল/i,
    afternoon: /বিকাল/i,
    evening: /সন্ধ্যা/i,
    night: /রাত/i,
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
    defaultParseWidth: "wide",
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
    defaultParseWidth: "wide",
  }),

  dayPeriod: (0, _index.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
});
