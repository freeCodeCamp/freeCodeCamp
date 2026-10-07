"use strict";
exports.formatRelative = void 0;

const formatRelativeLocale = {
  lastWeek: "'mu dheireadh' eeee 'aig' p", //FIX
  yesterday: "'an-dè aig' p",
  today: "'an-diugh aig' p",
  tomorrow: "'a-màireach aig' p",
  nextWeek: "eeee 'aig' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];
exports.formatRelative = formatRelative;
