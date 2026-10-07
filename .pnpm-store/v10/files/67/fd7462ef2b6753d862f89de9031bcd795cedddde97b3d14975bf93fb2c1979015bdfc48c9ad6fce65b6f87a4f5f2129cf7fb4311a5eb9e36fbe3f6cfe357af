"use strict";
exports.formatRelative = void 0;

const accusativeWeekdays = [
  "neděli",
  "pondělí",
  "úterý",
  "středu",
  "čtvrtek",
  "pátek",
  "sobotu",
];

const formatRelativeLocale = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: (date) => {
    const day = date.getDay();
    return "'v " + accusativeWeekdays[day] + " o' p";
  },
  other: "P",
};

const formatRelative = (token, date) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date);
  }

  return format;
};
exports.formatRelative = formatRelative;
