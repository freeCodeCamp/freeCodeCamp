"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var accusativeWeekdays = ['vasárnap', 'hétfőn', 'kedden', 'szerdán', 'csütörtökön', 'pénteken', 'szombaton'];
function week(isFuture) {
  return function (date) {
    var weekday = accusativeWeekdays[date.getUTCDay()];
    var prefix = isFuture ? '' : "'múlt' ";
    return "".concat(prefix, "'").concat(weekday, "' p'-kor'");
  };
}
var formatRelativeLocale = {
  lastWeek: week(false),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: week(true),
  other: 'P'
};
var formatRelative = function formatRelative(token, date) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;