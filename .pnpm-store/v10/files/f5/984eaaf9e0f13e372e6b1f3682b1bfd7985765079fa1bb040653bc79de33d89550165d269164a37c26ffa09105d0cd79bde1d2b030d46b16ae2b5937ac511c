"use strict";
exports.formatRelative = void 0;

const formatRelativeLocale = {
  lastWeek: "'joan den' eeee, LT",
  yesterday: "'atzo,' p",
  today: "'gaur,' p",
  tomorrow: "'bihar,' p",
  nextWeek: "eeee, p",
  other: "P",
};

const formatRelativeLocalePlural = {
  lastWeek: "'joan den' eeee, p",
  yesterday: "'atzo,' p",
  today: "'gaur,' p",
  tomorrow: "'bihar,' p",
  nextWeek: "eeee, p",
  other: "P",
};

const formatRelative = (token, date) => {
  if (date.getHours() !== 1) {
    return formatRelativeLocalePlural[token];
  }
  return formatRelativeLocale[token];
};
exports.formatRelative = formatRelative;
