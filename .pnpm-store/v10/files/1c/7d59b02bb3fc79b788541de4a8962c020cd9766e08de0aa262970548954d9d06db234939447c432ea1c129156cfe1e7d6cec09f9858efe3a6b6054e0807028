"use strict";
exports.formatRelative = void 0;
var _index = require("../../../isSameWeek.cjs");

const weekdays = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato",
];

function lastWeek(day) {
  switch (day) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + weekdays[day] + " scorso alle' p";
  }
}

function thisWeek(day) {
  return "'" + weekdays[day] + " alle' p";
}

function nextWeek(day) {
  switch (day) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + weekdays[day] + " prossimo alle' p";
  }
}

const formatRelativeLocale = {
  lastWeek: (date, baseDate, options) => {
    const day = date.getDay();
    if ((0, _index.isSameWeek)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return lastWeek(day);
    }
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (date, baseDate, options) => {
    const day = date.getDay();
    if ((0, _index.isSameWeek)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return nextWeek(day);
    }
  },
  other: "P",
};

const formatRelative = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date, baseDate, options);
  }

  return format;
};
exports.formatRelative = formatRelative;
