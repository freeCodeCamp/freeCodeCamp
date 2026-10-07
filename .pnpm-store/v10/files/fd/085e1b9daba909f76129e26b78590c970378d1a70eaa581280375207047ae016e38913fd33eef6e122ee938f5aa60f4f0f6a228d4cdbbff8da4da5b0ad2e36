import isSameUTCWeek from "../../../../_lib/isSameUTCWeek/index.js";
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1308
var accusativeWeekdays = ['nedeľu', 'pondelok', 'utorok', 'stredu', 'štvrtok', 'piatok', 'sobotu'];
function _lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0: /* Sun */
    case 3: /* Wed */
    case 6 /* Sat */:
      return "'minulú " + weekday + " o' p";
    default:
      return "'minulý' eeee 'o' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  if (day === 4 /* Thu */) {
    return "'vo' eeee 'o' p";
  } else {
    return "'v " + weekday + " o' p";
  }
}
function _nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0: /* Sun */
    case 4: /* Wed */
    case 6 /* Sat */:
      return "'budúcu " + weekday + " o' p";
    default:
      return "'budúci' eeee 'o' p";
  }
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
  yesterday: "'včera o' p",
  today: "'dnes o' p",
  tomorrow: "'zajtra o' p",
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