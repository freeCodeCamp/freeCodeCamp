"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../../_lib/isSameUTCWeek/index.js"));
function checkWeek(date, baseDate, options) {
  var baseFormat = 'eeee p';
  if ((0, _index.default)(date, baseDate, options)) {
    return baseFormat; // in same week
  } else if (date.getTime() > baseDate.getTime()) {
    return "'下个'" + baseFormat; // in next week
  }

  return "'上个'" + baseFormat; // in last week
}

var formatRelativeLocale = {
  lastWeek: checkWeek,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: checkWeek,
  // days after tomorrow, maybe in this week or next week
  other: 'PP p'
};
var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;