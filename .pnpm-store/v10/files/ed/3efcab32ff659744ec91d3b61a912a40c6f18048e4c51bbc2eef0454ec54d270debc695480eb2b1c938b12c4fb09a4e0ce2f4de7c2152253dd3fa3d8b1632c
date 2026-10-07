"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "bir saniyədən az",
    other: "{{count}} bir saniyədən az",
  },

  xSeconds: {
    one: "1 saniyə",
    other: "{{count}} saniyə",
  },

  halfAMinute: "yarım dəqiqə",

  lessThanXMinutes: {
    one: "bir dəqiqədən az",
    other: "{{count}} bir dəqiqədən az",
  },

  xMinutes: {
    one: "bir dəqiqə",
    other: "{{count}} dəqiqə",
  },

  aboutXHours: {
    one: "təxminən 1 saat",
    other: "təxminən {{count}} saat",
  },

  xHours: {
    one: "1 saat",
    other: "{{count}} saat",
  },

  xDays: {
    one: "1 gün",
    other: "{{count}} gün",
  },

  aboutXWeeks: {
    one: "təxminən 1 həftə",
    other: "təxminən {{count}} həftə",
  },

  xWeeks: {
    one: "1 həftə",
    other: "{{count}} həftə",
  },

  aboutXMonths: {
    one: "təxminən 1 ay",
    other: "təxminən {{count}} ay",
  },

  xMonths: {
    one: "1 ay",
    other: "{{count}} ay",
  },

  aboutXYears: {
    one: "təxminən 1 il",
    other: "təxminən {{count}} il",
  },

  xYears: {
    one: "1 il",
    other: "{{count}} il",
  },

  overXYears: {
    one: "1 ildən çox",
    other: "{{count}} ildən çox",
  },

  almostXYears: {
    one: "demək olar ki 1 il",
    other: "demək olar ki {{count}} il",
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
      return result + " sonra";
    } else {
      return result + " əvvəl";
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
