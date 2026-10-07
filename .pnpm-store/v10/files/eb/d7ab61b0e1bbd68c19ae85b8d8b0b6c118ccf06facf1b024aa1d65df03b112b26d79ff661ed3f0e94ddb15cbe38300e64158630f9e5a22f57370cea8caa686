import isSameUTCWeek from "../../../../_lib/isSameUTCWeek/index.js";
var accusativeWeekdays = ['жексенбіде', 'дүйсенбіде', 'сейсенбіде', 'сәрсенбіде', 'бейсенбіде', 'жұмада', 'сенбіде'];
function _lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'өткен " + weekday + " сағат' p'-де'";
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'" + weekday + " сағат' p'-де'";
}
function _nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'келесі " + weekday + " сағат' p'-де'";
}
var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _lastWeek(day);
    }
  },
  yesterday: "'кеше сағат' p'-де'",
  today: "'бүгін сағат' p'-де'",
  tomorrow: "'ертең сағат' p'-де'",
  nextWeek: function nextWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if (isSameUTCWeek(date, baseDate, options)) {
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
export default formatRelative;