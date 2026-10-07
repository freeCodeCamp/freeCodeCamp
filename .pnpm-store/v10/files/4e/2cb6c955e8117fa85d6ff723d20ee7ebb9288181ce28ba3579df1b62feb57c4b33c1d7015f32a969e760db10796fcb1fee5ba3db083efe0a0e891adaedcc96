"use strict";
exports.formatRelative = void 0;
var _index = require("../../../isSameWeek.cjs");
var _index2 = require("../../../toDate.cjs");

// Adapted from the `ru` translation

const weekdays = [
  "неделя",
  "понеделник",
  "вторник",
  "сряда",
  "четвъртък",
  "петък",
  "събота",
];

function lastWeek(day) {
  const weekday = weekdays[day];

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'миналата " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'миналия " + weekday + " в' p";
  }
}

function thisWeek(day) {
  const weekday = weekdays[day];

  if (day === 2 /* Tue */) {
    return "'във " + weekday + " в' p";
  } else {
    return "'в " + weekday + " в' p";
  }
}

function nextWeek(day) {
  const weekday = weekdays[day];

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'следващата " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следващия " + weekday + " в' p";
  }
}

const lastWeekFormatToken = (dirtyDate, baseDate, options) => {
  const date = (0, _index2.toDate)(dirtyDate);
  const day = date.getDay();
  if ((0, _index.isSameWeek)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};

const nextWeekFormatToken = (dirtyDate, baseDate, options) => {
  const date = (0, _index2.toDate)(dirtyDate);
  const day = date.getDay();
  if ((0, _index.isSameWeek)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};

const formatRelativeLocale = {
  lastWeek: lastWeekFormatToken,
  yesterday: "'вчера в' p",
  today: "'днес в' p",
  tomorrow: "'утре в' p",
  nextWeek: nextWeekFormatToken,
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
