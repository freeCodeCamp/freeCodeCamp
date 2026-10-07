"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.cjs");
var _index2 = require("../../_lib/buildMatchPatternFn.cjs");
var _index3 = require("./localize.cjs");

const matchOrdinalNumberPattern = /^[०१२३४५६७८९]+/i;
const parseOrdinalNumberPattern = /^[०१२३४५६७८९]+/i;

const matchEraPatterns = {
  narrow: /^(ईसा-पूर्व|ईस्वी)/i,
  abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,
  wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i,
};

const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ति[1234]/i,
  wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,
  abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,
  wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^ज/i,
    /^फ़/i,
    /^मा/i,
    /^अप्/i,
    /^मई/i,
    /^जू/i,
    /^जु/i,
    /^अग/i,
    /^सि/i,
    /^अक्तू/i,
    /^न/i,
    /^दि/i,
  ],

  any: [
    /^जन/i,
    /^फ़/i,
    /^मा/i,
    /^अप्/i,
    /^मई/i,
    /^जू/i,
    /^जु/i,
    /^अग/i,
    /^सि/i,
    /^अक्तू/i,
    /^नव/i,
    /^दिस/i,
  ],
};

const matchDayPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i,
  short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
  abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
  wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i,
};
const parseDayPatterns = {
  narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i],

  any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,
  any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^पूर्वाह्न/i,
    pm: /^अपराह्न/i,
    midnight: /^मध्य/i,
    noon: /^दो/i,
    morning: /सु/i,
    afternoon: /दो/i,
    evening: /शा/i,
    night: /रा/i,
  },
};

const match = (exports.match = {
  ordinalNumber: (0, _index2.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: _index3.localeToNumber,
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
