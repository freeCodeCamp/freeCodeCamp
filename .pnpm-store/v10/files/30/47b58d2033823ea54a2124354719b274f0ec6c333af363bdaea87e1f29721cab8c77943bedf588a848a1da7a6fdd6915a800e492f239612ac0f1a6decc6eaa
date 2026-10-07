"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.cjs");
var _index2 = require("../../_lib/buildMatchPatternFn.cjs");

const matchOrdinalNumberPattern = /^(\d+)\./i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(пр\.н\.е\.|АД)/i,
  abbreviated: /^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,
  wide: /^(Пре Христа|пре нове ере|После Христа|нова ера)/i,
};
const parseEraPatterns = {
  any: [/^пр/i, /^(по|нова)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?кв\.?/i,
  wide: /^[1234]\. квартал/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^(10|11|12|[123456789])\./i,
  abbreviated: /^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,
  wide: /^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i,
};
const parseMonthPatterns = {
  narrow: [
    /^1/i,
    /^2/i,
    /^3/i,
    /^4/i,
    /^5/i,
    /^6/i,
    /^7/i,
    /^8/i,
    /^9/i,
    /^10/i,
    /^11/i,
    /^12/i,
  ],

  any: [
    /^ја/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^мај/i,
    /^јун/i,
    /^јул/i,
    /^авг/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[пусчн]/i,
  short: /^(нед|пон|уто|сре|чет|пет|суб)/i,
  abbreviated: /^(нед|пон|уто|сре|чет|пет|суб)/i,
  wide: /^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i,
};
const parseDayPatterns = {
  narrow: [/^п/i, /^у/i, /^с/i, /^ч/i, /^п/i, /^с/i, /^н/i],
  any: [/^нед/i, /^пон/i, /^уто/i, /^сре/i, /^чет/i, /^пет/i, /^суб/i],
};

const matchDayPeriodPatterns = {
  any: /^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^поно/i,
    noon: /^под/i,
    morning: /ујутру/i,
    afternoon: /(после\s|по)+подне/i,
    evening: /(увече)/i,
    night: /(ноћу)/i,
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
