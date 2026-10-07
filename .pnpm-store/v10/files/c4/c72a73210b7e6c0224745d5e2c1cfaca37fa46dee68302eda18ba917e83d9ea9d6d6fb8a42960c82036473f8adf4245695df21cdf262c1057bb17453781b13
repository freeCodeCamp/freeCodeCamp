"use strict";
exports.formatRelative = void 0;

const formatRelativeLocale = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];
exports.formatRelative = formatRelative;
