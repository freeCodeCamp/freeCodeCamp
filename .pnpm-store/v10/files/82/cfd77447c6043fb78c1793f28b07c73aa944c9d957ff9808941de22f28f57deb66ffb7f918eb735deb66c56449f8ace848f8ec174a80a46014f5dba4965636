import { isSameWeek } from "../../../isSameWeek.js";

const weekdays = [
  "svētdienā",
  "pirmdienā",
  "otrdienā",
  "trešdienā",
  "ceturtdienā",
  "piektdienā",
  "sestdienā",
];

const formatRelativeLocale = {
  lastWeek: (date, baseDate, options) => {
    if (isSameWeek(date, baseDate, options)) {
      return "eeee 'plkst.' p";
    }

    const weekday = weekdays[date.getDay()];
    return "'Pagājušā " + weekday + " plkst.' p";
  },
  yesterday: "'Vakar plkst.' p",
  today: "'Šodien plkst.' p",
  tomorrow: "'Rīt plkst.' p",
  nextWeek: (date, baseDate, options) => {
    if (isSameWeek(date, baseDate, options)) {
      return "eeee 'plkst.' p";
    }

    const weekday = weekdays[date.getDay()];
    return "'Nākamajā " + weekday + " plkst.' p";
  },
  other: "P",
};

export const formatRelative = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date, baseDate, options);
  }

  return format;
};
