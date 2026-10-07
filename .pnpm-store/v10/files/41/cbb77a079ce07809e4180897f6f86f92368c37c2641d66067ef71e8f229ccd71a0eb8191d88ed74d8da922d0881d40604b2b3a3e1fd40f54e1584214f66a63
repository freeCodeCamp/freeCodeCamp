"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(pr\.n\.e\.|AD)/i,
  abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,
  wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i
};
var parseEraPatterns = {
  any: [/^pr/i, /^(po|nova)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?kv\.?/i,
  wide: /^[1234]\. kvartal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(10|11|12|[123456789])\./i,
  abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
  wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i
};
var parseMonthPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i, /8/i, /9/i, /10/i, /11/i, /12/i],
  abbreviated: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i],
  wide: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i]
};
var matchDayPatterns = {
  narrow: /^[npusčc]/i,
  short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
  abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
  wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^pono/i,
    noon: /^pod/i,
    morning: /jutro/i,
    afternoon: /(poslije\s|po)+podne/i,
    evening: /(navece|naveče)/i,
    night: /(nocu|noću)/i
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
    defaultParseWidth: 'wide'
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