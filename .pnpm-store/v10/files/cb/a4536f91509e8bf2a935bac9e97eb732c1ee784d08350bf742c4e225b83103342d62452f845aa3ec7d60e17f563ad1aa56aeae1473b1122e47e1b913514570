"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "inqas minn sekonda",
    other: "inqas minn {{count}} sekondi",
  },

  xSeconds: {
    one: "sekonda",
    other: "{{count}} sekondi",
  },

  halfAMinute: "nofs minuta",

  lessThanXMinutes: {
    one: "inqas minn minuta",
    other: "inqas minn {{count}} minuti",
  },

  xMinutes: {
    one: "minuta",
    other: "{{count}} minuti",
  },

  aboutXHours: {
    one: "madwar siegħa",
    other: "madwar {{count}} siegħat",
  },

  xHours: {
    one: "siegħa",
    other: "{{count}} siegħat",
  },

  xDays: {
    one: "ġurnata",
    other: "{{count}} ġranet",
  },

  aboutXWeeks: {
    one: "madwar ġimgħa",
    other: "madwar {{count}} ġimgħat",
  },

  xWeeks: {
    one: "ġimgħa",
    other: "{{count}} ġimgħat",
  },

  aboutXMonths: {
    one: "madwar xahar",
    other: "madwar {{count}} xhur",
  },

  xMonths: {
    one: "xahar",
    other: "{{count}} xhur",
  },

  aboutXYears: {
    one: "madwar sena",
    two: "madwar sentejn",
    other: "madwar {{count}} snin",
  },

  xYears: {
    one: "sena",
    two: "sentejn",
    other: "{{count}} snin",
  },

  overXYears: {
    one: "aktar minn sena",
    two: "aktar minn sentejn",
    other: "aktar minn {{count}} snin",
  },

  almostXYears: {
    one: "kważi sena",
    two: "kważi sentejn",
    other: "kważi {{count}} snin",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2 && tokenValue.two) {
    result = tokenValue.two;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "f'" + result;
    } else {
      return result + " ilu";
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
