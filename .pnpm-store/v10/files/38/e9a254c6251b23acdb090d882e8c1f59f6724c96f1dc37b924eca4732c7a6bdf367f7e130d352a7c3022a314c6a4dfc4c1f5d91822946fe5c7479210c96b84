"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "a second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "a minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about an hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "an hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "a day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about a week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "a week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about a month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "a month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about a year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "a year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over a year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost a year",
    other: "almost {{count}} years",
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
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
