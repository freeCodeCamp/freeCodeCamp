"use strict";
exports.formatRelative = void 0;
var _index = require("../../../isSameWeek.cjs");

const weekdays = [
  "недела",
  "понеделник",
  "вторник",
  "среда",
  "четврток",
  "петок",
  "сабота",
];

function lastWeek(day) {
  const weekday = weekdays[day];

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'минатата " + weekday + " во' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'минатиот " + weekday + " во' p";
  }
}

function thisWeek(day) {
  const weekday = weekdays[day];

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'ова " + weekday + " вo' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'овој " + weekday + " вo' p";
  }
}

function nextWeek(day) {
  const weekday = weekdays[day];

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'следната " + weekday + " вo' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следниот " + weekday + " вo' p";
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
  yesterday: "'вчера во' p",
  today: "'денес во' p",
  tomorrow: "'утре во' p",
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
