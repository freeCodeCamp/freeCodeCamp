"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'прошле недеље у' p";
      case 3:
        return "'прошле среде у' p";
      case 6:
        return "'прошле суботе у' p";
      default:
        return "'прошли' EEEE 'у' p";
    }
  },
  yesterday: "'јуче у' p",
  today: "'данас у' p",
  tomorrow: "'сутра у' p",
  nextWeek: function nextWeek(date) {
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'следеће недеље у' p";
      case 3:
        return "'следећу среду у' p";
      case 6:
        return "'следећу суботу у' p";
      default:
        return "'следећи' EEEE 'у' p";
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