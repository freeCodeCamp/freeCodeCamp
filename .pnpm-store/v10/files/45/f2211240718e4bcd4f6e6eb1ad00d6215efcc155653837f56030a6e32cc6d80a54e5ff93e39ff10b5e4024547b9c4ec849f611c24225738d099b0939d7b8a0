"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../../../index.js");
var _index2 = _interopRequireDefault(require("../../../../_lib/isSameUTCWeek/index.js"));
var accusativeWeekdays = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п’ятницю', 'суботу'];
function lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у минулу " + weekday + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у минулий " + weekday + " о' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'у " + weekday + " о' p";
}
function nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступну " + weekday + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у наступний " + weekday + " о' p";
  }
}
var lastWeekFormat = function lastWeekFormat(dirtyDate, baseDate, options) {
  var date = (0, _index.toDate)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};
var nextWeekFormat = function nextWeekFormat(dirtyDate, baseDate, options) {
  var date = (0, _index.toDate)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};
var formatRelativeLocale = {
  lastWeek: lastWeekFormat,
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: nextWeekFormat,
  other: 'P'
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