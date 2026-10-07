"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../../_lib/isSameUTCWeek/index.js"));
var weekdays = ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота'];
function _lastWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'минатата " + weekday + " во' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'минатиот " + weekday + " во' p";
  }
}
function thisWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'ова " + weekday + " вo' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'овој " + weekday + " вo' p";
  }
}
function _nextWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'следната " + weekday + " вo' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следниот " + weekday + " вo' p";
  }
}
var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _lastWeek(day);
    }
  },
  yesterday: "'вчера во' p",
  today: "'денес во' p",
  tomorrow: "'утре во' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _nextWeek(day);
    }
  },
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