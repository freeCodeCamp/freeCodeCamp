"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.cjs");
var _index2 = require("../../_lib/buildMatchPatternFn.cjs");

const matchOrdinalNumberPattern =
  /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^((пр)?н\.?\s?е\.?)/i,
  abbreviated: /^((пр)?н\.?\s?е\.?)/i,
  wide: /^(преди новата ера|новата ера|нова ера)/i,
};
const parseEraPatterns = {
  any: [/^п/i, /^н/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
  wide: /^[1234](-?[врт]?о?)? тримесечие/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchDayPatterns = {
  narrow: /^[нпвсч]/i,
  short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
  abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
  wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i,
};

const parseDayPatterns = {
  narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i],
};

const matchMonthPatterns = {
  abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
  wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i,
};

const parseMonthPatterns = {
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^май/i,
    /^юн/i,
    /^юл/i,
    /^ав/i,
    /^се/i,
    /^окт/i,
    /^но/i,
    /^де/i,
  ],
};

const matchDayPeriodPatterns = {
  any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^преди о/i,
    pm: /^след о/i,
    midnight: /^в пол/i,
    noon: /^на об/i,
    morning: /^сут/i,
    afternoon: /^следо/i,
    evening: /^веч/i,
    night: /^през н/i,
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
