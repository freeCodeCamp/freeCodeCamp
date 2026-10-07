"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.cjs");
var _index2 = require("../../_lib/buildMatchPatternFn.cjs");

const matchOrdinalNumberPattern = /\d+/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(нтө|нт)/i,
  abbreviated: /^(нтө|нт)/i,
  wide: /^(нийтийн тооллын өмнө|нийтийн тооллын)/i,
};
const parseEraPatterns = {
  any: [/^(нтө|нийтийн тооллын өмнө)/i, /^(нт|нийтийн тооллын)/i],
};

const matchQuarterPatterns = {
  narrow: /^(iv|iii|ii|i)/i,
  abbreviated: /^(iv|iii|ii|i) улирал/i,
  wide: /^[1-4]-р улирал/i,
};
const parseQuarterPatterns = {
  any: [/^(i(\s|$)|1)/i, /^(ii(\s|$)|2)/i, /^(iii(\s|$)|3)/i, /^(iv(\s|$)|4)/i],
};

const matchMonthPatterns = {
  narrow: /^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,
  abbreviated:
    /^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,
  wide: /^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^i$/i,
    /^ii$/i,
    /^iii$/i,
    /^iv$/i,
    /^v$/i,
    /^vi$/i,
    /^vii$/i,
    /^viii$/i,
    /^ix$/i,
    /^x$/i,
    /^xi$/i,
    /^xii$/i,
  ],

  any: [
    /^(1|нэгдүгээр)/i,
    /^(2|хоёрдугаар)/i,
    /^(3|гуравдугаар)/i,
    /^(4|дөрөвдүгээр)/i,
    /^(5|тавдугаар)/i,
    /^(6|зургаадугаар)/i,
    /^(7|долоодугаар)/i,
    /^(8|наймдугаар)/i,
    /^(9|есдүгээр)/i,
    /^(10|аравдугаар)/i,
    /^(11|арван нэгдүгээр)/i,
    /^(12|арван хоёрдугаар)/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[ндмлпбб]/i,
  short: /^(ня|да|мя|лх|пү|ба|бя)/i,
  abbreviated: /^(ням|дав|мяг|лха|пүр|баа|бям)/i,
  wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i,
};
const parseDayPatterns = {
  narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i],
  any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,
  any: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^ү\.ө\./i,
    pm: /^ү\.х\./i,
    midnight: /^шөнө дунд/i,
    noon: /^үд дунд/i,
    morning: /өглөө/i,
    afternoon: /өдөр/i,
    evening: /орой/i,
    night: /шөнө/i,
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
