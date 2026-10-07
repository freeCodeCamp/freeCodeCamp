import { buildMatchFn } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn } from "../../_lib/buildMatchPatternFn.js";

const matchOrdinalNumberPattern = /^(\d+)(è|r|n|r|t)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a. de C.|d. de C.)/i,
  wide: /^(abans de Crist|despr[eé]s de Crist)/i,
};
const parseEraPatterns = {
  narrow: [/^aC/i, /^dC/i],
  abbreviated: [/^(a. de C.)/i, /^(d. de C.)/i],
  wide: [/^(abans de Crist)/i, /^(despr[eé]s de Crist)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](è|r|n|r|t)? trimestre/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,
  abbreviated:
    /^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,
  wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^GN/i,
    /^FB/i,
    /^MÇ/i,
    /^AB/i,
    /^MG/i,
    /^JN/i,
    /^JL/i,
    /^AG/i,
    /^ST/i,
    /^OC/i,
    /^NV/i,
    /^DS/i,
  ],

  abbreviated: [
    /^gen./i,
    /^febr./i,
    /^març/i,
    /^abr./i,
    /^maig/i,
    /^juny/i,
    /^jul./i,
    /^ag./i,
    /^set./i,
    /^oct./i,
    /^nov./i,
    /^des./i,
  ],

  wide: [
    /^gener/i,
    /^febrer/i,
    /^març/i,
    /^abril/i,
    /^maig/i,
    /^juny/i,
    /^juliol/i,
    /^agost/i,
    /^setembre/i,
    /^octubre/i,
    /^novembre/i,
    /^desembre/i,
  ],
};

const matchDayPatterns = {
  narrow: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  abbreviated: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i,
};
const parseDayPatterns = {
  narrow: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],

  abbreviated: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],

  wide: [
    /^diumenge/i,
    /^dilluns/i,
    /^dimarts/i,
    /^dimecres/i,
    /^dijous/i,
    /^divendres/i,
    /^disssabte/i,
  ],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,
  abbreviated:
    /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,
  wide: /^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mitjanit/i,
    noon: /^migdia/i,
    morning: /matí/i,
    afternoon: /tarda/i,
    evening: /vespre/i,
    night: /nit/i,
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
    defaultParseWidth: "wide",
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
    defaultParseWidth: "wide",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "wide",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
