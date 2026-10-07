"use strict";
exports.formatRelative = void 0;

const formatRelativeLocale = {
  lastWeek: "'førre' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgon kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];
exports.formatRelative = formatRelative;
