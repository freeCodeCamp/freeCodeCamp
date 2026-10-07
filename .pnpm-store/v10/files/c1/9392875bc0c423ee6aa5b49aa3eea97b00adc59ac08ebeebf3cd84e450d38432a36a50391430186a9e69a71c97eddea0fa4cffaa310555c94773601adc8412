import isSameUTCWeek from "../../../../_lib/isSameUTCWeek/index.js";
var weekdays = ['svētdienā', 'pirmdienā', 'otrdienā', 'trešdienā', 'ceturtdienā', 'piektdienā', 'sestdienā'];
var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    if (isSameUTCWeek(date, baseDate, options)) {
      return "eeee 'plkst.' p";
    }
    var weekday = weekdays[date.getUTCDay()];
    return "'Pagājušā " + weekday + " plkst.' p";
  },
  yesterday: "'Vakar plkst.' p",
  today: "'Šodien plkst.' p",
  tomorrow: "'Rīt plkst.' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    if (isSameUTCWeek(date, baseDate, options)) {
      return "eeee 'plkst.' p";
    }
    var weekday = weekdays[date.getUTCDay()];
    return "'Nākamajā " + weekday + " plkst.' p";
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