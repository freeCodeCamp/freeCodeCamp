"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(d|na|tr|mh)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(r|a)/i,
  abbreviated: /^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,
  wide: /^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^c[1234]/i,
  wide: /^[1234](cd|na|tr|mh)? cairteal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[fgmcòilsd]/i,
  abbreviated: /^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i,
  wide: /^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i
};
var parseMonthPatterns = {
  narrow: [/^f/i, /^g/i, /^m/i, /^g/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^s/i, /^d/i, /^s/i, /^d/i],
  any: [/^fa/i, /^ge/i, /^mà/i, /^gi/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^su/i, /^d/i, /^sa/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[dlmcahs]/i,
  short: /^(dò|lu|mà|ci|ar|ha|sa)/i,
  abbreviated: /^(did|dil|dim|dic|dia|dih|dis)/i,
  wide: /^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i],
  any: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,
  any: /^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^m/i,
    pm: /^f/i,
    midnight: /^meadhan oidhche/i,
    noon: /^meadhan là/i,
    morning: /sa mhadainn/i,
    afternoon: /feasgar/i,
    evening: /feasgar/i,
    night: /air an oidhche/i
  }
};
var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0, _index.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0, _index.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0, _index.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;