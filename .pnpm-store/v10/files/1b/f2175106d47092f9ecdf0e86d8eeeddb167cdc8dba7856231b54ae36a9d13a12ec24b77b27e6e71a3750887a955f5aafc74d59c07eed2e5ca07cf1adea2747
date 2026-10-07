"use strict";
exports.formatRelative = void 0;

const accusativeWeekdays = [
  "vasárnap",
  "hétfőn",
  "kedden",
  "szerdán",
  "csütörtökön",
  "pénteken",
  "szombaton",
];

function week(isFuture) {
  return (date) => {
    const weekday = accusativeWeekdays[date.getDay()];
    const prefix = isFuture ? "" : "'múlt' ";
    return `${prefix}'${weekday}' p'-kor'`;
  };
}
const formatRelativeLocale = {
  lastWeek: week(false),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: week(true),
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
