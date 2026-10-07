"use strict";
exports.formatRelative = void 0;

const formatRelativeLocale = {
  lastWeek: (date) => {
    switch (date.getDay()) {
      case 0:
        return "'prošle nedelje u' p";
      case 3:
        return "'prošle srede u' p";
      case 6:
        return "'prošle subote u' p";
      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  yesterday: "'juče u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: (date) => {
    switch (date.getDay()) {
      case 0:
        return "'sledeće nedelje u' p";
      case 3:
        return "'sledeću sredu u' p";
      case 6:
        return "'sledeću subotu u' p";
      default:
        return "'sledeći' EEEE 'u' p";
    }
  },
  other: "P",
};

const formatRelative = (token, date, _baseDate, _options) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date);
  }

  return format;
};
exports.formatRelative = formatRelative;
