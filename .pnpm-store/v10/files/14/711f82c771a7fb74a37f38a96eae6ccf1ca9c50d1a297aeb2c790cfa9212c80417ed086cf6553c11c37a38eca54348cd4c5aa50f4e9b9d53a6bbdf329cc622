"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../../_lib/isSameUTCWeek/index.js"));
var adjectivesLastWeek = {
  masculine: 'ostatni',
  feminine: 'ostatnia'
};
var adjectivesThisWeek = {
  masculine: 'ten',
  feminine: 'ta'
};
var adjectivesNextWeek = {
  masculine: 'następny',
  feminine: 'następna'
};
var dayGrammaticalGender = {
  0: 'feminine',
  1: 'masculine',
  2: 'masculine',
  3: 'feminine',
  4: 'masculine',
  5: 'masculine',
  6: 'feminine'
};
function dayAndTimeWithAdjective(token, date, baseDate, options) {
  var adjectives;
  if ((0, _index.default)(date, baseDate, options)) {
    adjectives = adjectivesThisWeek;
  } else if (token === 'lastWeek') {
    adjectives = adjectivesLastWeek;
  } else if (token === 'nextWeek') {
    adjectives = adjectivesNextWeek;
  } else {
    throw new Error("Cannot determine adjectives for token ".concat(token));
  }
  var day = date.getUTCDay();
  var grammaticalGender = dayGrammaticalGender[day];
  var adjective = adjectives[grammaticalGender];
  return "'".concat(adjective, "' eeee 'o' p");
}
var formatRelativeLocale = {
  lastWeek: dayAndTimeWithAdjective,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: dayAndTimeWithAdjective,
  other: 'P'
};
var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(token, date, baseDate, options);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;