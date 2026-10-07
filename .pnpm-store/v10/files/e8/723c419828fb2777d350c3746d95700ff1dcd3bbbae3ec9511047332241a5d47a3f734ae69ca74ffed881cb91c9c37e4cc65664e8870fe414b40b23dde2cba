"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    switch (date.getUTCDay()) {
      case 0:
        return "'prošle nedelje u' p";
      case 3:
        return "'prošle srede u' p";
      case 6:
        return "'prošle subote u' p";
      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  yesterday: "'juče u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: function nextWeek(date) {
    switch (date.getUTCDay()) {
      case 0:
        return "'sledeće nedelje u' p";
      case 3:
        return "'sledeću sredu u' p";
      case 6:
        return "'sledeću subotu u' p";
      default:
        return "'sledeći' EEEE 'u' p";
    }
  },
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;