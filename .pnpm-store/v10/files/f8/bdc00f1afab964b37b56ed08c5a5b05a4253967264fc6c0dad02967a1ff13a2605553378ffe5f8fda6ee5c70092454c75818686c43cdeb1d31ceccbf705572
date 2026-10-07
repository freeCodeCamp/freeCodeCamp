"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'joan den' eeee, LT",
  yesterday: "'atzo,' p",
  today: "'gaur,' p",
  tomorrow: "'bihar,' p",
  nextWeek: 'eeee, p',
  other: 'P'
};
var formatRelativeLocalePlural = {
  lastWeek: "'joan den' eeee, p",
  yesterday: "'atzo,' p",
  today: "'gaur,' p",
  tomorrow: "'bihar,' p",
  nextWeek: 'eeee, p',
  other: 'P'
};
var formatRelative = function formatRelative(token, date) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token];
  }
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;