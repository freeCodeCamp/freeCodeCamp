"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "بىر سىكۇنت ئىچىدە",
    other: "سىكۇنت ئىچىدە {{count}}",
  },

  xSeconds: {
    one: "بىر سىكۇنت",
    other: "سىكۇنت {{count}}",
  },

  halfAMinute: "يىرىم مىنۇت",

  lessThanXMinutes: {
    one: "بىر مىنۇت ئىچىدە",
    other: "مىنۇت ئىچىدە {{count}}",
  },

  xMinutes: {
    one: "بىر مىنۇت",
    other: "مىنۇت {{count}}",
  },

  aboutXHours: {
    one: "تەخمىنەن بىر سائەت",
    other: "سائەت {{count}} تەخمىنەن",
  },

  xHours: {
    one: "بىر سائەت",
    other: "سائەت {{count}}",
  },

  xDays: {
    one: "بىر كۈن",
    other: "كۈن {{count}}",
  },

  aboutXWeeks: {
    one: "تەخمىنەن بىرھەپتە",
    other: "ھەپتە {{count}} تەخمىنەن",
  },

  xWeeks: {
    one: "بىرھەپتە",
    other: "ھەپتە {{count}}",
  },

  aboutXMonths: {
    one: "تەخمىنەن بىر ئاي",
    other: "ئاي {{count}} تەخمىنەن",
  },

  xMonths: {
    one: "بىر ئاي",
    other: "ئاي {{count}}",
  },

  aboutXYears: {
    one: "تەخمىنەن بىر يىل",
    other: "يىل {{count}} تەخمىنەن",
  },

  xYears: {
    one: "بىر يىل",
    other: "يىل {{count}}",
  },

  overXYears: {
    one: "بىر يىلدىن ئارتۇق",
    other: "يىلدىن ئارتۇق {{count}}",
  },

  almostXYears: {
    one: "ئاساسەن بىر يىل",
    other: "يىل {{count}} ئاساسەن",
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
      return result;
    } else {
      return result + " بولدى";
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
