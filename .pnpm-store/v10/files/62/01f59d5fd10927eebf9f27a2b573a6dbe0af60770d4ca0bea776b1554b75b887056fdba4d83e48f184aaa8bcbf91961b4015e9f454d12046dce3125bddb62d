import { toDate } from "../../../../index.js";
import isSameUTCWeek from "../../../../_lib/isSameUTCWeek/index.js";
var accusativeWeekdays = ['нядзелю', 'панядзелак', 'аўторак', 'сераду', 'чацьвер', 'пятніцу', 'суботу'];
function lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у мінулую " + weekday + " а' p";
    case 1:
    case 2:
    case 4:
      return "'у мінулы " + weekday + " а' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'у " + weekday + " а' p";
}
function nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступную " + weekday + " а' p";
    case 1:
    case 2:
    case 4:
      return "'у наступны " + weekday + " а' p";
  }
}
var lastWeekFormat = function lastWeekFormat(dirtyDate, baseDate, options) {
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  if (isSameUTCWeek(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};
var nextWeekFormat = function nextWeekFormat(dirtyDate, baseDate, options) {
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  if (isSameUTCWeek(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};
var formatRelativeLocale = {
  lastWeek: lastWeekFormat,
  yesterday: "'учора а' p",
  today: "'сёньня а' p",
  tomorrow: "'заўтра а' p",
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
export default formatRelative;