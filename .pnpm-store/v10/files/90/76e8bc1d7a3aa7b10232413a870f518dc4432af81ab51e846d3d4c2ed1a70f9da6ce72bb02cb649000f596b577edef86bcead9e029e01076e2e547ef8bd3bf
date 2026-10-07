import { buildMatchFn } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn } from "../../_lib/buildMatchPatternFn.js";

const matchOrdinalNumberPattern = /^(\d+)(ste|de)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^([vn]\.? ?C\.?)/,
  abbreviated: /^([vn]\. ?C\.?)/,
  wide: /^((voor|na) Christus)/,
};
const parseEraPatterns = {
  any: [/^v/, /^n/],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234](st|d)e kwartaal/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,
  wide: /^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^J/i,
    /^F/i,
    /^M/i,
    /^A/i,
    /^M/i,
    /^J/i,
    /^J/i,
    /^A/i,
    /^S/i,
    /^O/i,
    /^N/i,
    /^D/i,
  ],

  any: [
    /^Jan/i,
    /^Feb/i,
    /^Mrt/i,
    /^Apr/i,
    /^Mei/i,
    /^Jun/i,
    /^Jul/i,
    /^Aug/i,
    /^Sep/i,
    /^Okt/i,
    /^Nov/i,
    /^Dec/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smdwv]/i,
  short: /^(So|Ma|Di|Wo|Do|Vr|Sa)/i,
  abbreviated: /^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,
  wide: /^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i,
};
const parseDayPatterns = {
  narrow: [/^S/i, /^M/i, /^D/i, /^W/i, /^D/i, /^V/i, /^S/i],
  any: [/^So/i, /^Ma/i, /^Di/i, /^Wo/i, /^Do/i, /^Vr/i, /^Sa/i],
};

const matchDayPeriodPatterns = {
  any: /^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^vm/i,
    pm: /^nm/i,
    midnight: /^middernag/i,
    noon: /^middaguur/i,
    morning: /oggend/i,
    afternoon: /middag/i,
    evening: /laat middag/i,
    night: /aand/i,
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
