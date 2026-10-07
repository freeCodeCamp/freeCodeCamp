"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "mwens pase yon segond",
    other: "mwens pase {{count}} segond",
  },

  xSeconds: {
    one: "1 segond",
    other: "{{count}} segond",
  },

  halfAMinute: "30 segond",

  lessThanXMinutes: {
    one: "mwens pase yon minit",
    other: "mwens pase {{count}} minit",
  },

  xMinutes: {
    one: "1 minit",
    other: "{{count}} minit",
  },

  aboutXHours: {
    one: "anviwon inè",
    other: "anviwon {{count}} è",
  },

  xHours: {
    one: "1 lè",
    other: "{{count}} lè",
  },

  xDays: {
    one: "1 jou",
    other: "{{count}} jou",
  },

  aboutXWeeks: {
    one: "anviwon 1 semèn",
    other: "anviwon {{count}} semèn",
  },

  xWeeks: {
    one: "1 semèn",
    other: "{{count}} semèn",
  },

  aboutXMonths: {
    one: "anviwon 1 mwa",
    other: "anviwon {{count}} mwa",
  },

  xMonths: {
    one: "1 mwa",
    other: "{{count}} mwa",
  },

  aboutXYears: {
    one: "anviwon 1 an",
    other: "anviwon {{count}} an",
  },

  xYears: {
    one: "1 an",
    other: "{{count}} an",
  },

  overXYears: {
    one: "plis pase 1 an",
    other: "plis pase {{count}} an",
  },

  almostXYears: {
    one: "prèske 1 an",
    other: "prèske {{count}} an",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "nan " + result;
    } else {
      return "sa fè " + result;
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
