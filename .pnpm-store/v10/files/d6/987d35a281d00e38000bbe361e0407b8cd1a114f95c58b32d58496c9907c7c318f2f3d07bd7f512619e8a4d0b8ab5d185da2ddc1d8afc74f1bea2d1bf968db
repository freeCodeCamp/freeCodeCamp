"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(\.)/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(e|j)/i,
  abbreviated: /^(eaa.|jaa.)/i,
  wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i
};
var parseEraPatterns = {
  any: [/^e/i, /^j/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]\.? kvartaali/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[thmkeslj]/i,
  abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
  wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i
};
var parseMonthPatterns = {
  narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i],
  any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i]
};
var matchDayPatterns = {
  narrow: /^[smtkpl]/i,
  short: /^(su|ma|ti|ke|to|pe|la)/i,
  abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
  wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
  any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
  any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ap/i,
    pm: /^ip/i,
    midnight: /^keskiyö/i,
    noon: /^keskipäivä/i,
    morning: /aamupäivällä/i,
    afternoon: /iltapäivällä/i,
    evening: /illalla/i,
    night: /yöllä/i
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