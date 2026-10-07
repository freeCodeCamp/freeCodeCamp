import { numberToLocale } from "./localize.js";

// Source: https://www.unicode.org/cldr/charts/32/summary/hi.html

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "१ सेकंड से कम", // CLDR #1310
    other: "{{count}} सेकंड से कम",
  },

  xSeconds: {
    one: "१ सेकंड",
    other: "{{count}} सेकंड",
  },

  halfAMinute: "आधा मिनट",

  lessThanXMinutes: {
    one: "१ मिनट से कम",
    other: "{{count}} मिनट से कम",
  },

  xMinutes: {
    one: "१ मिनट", // CLDR #1307
    other: "{{count}} मिनट",
  },

  aboutXHours: {
    one: "लगभग १ घंटा",
    other: "लगभग {{count}} घंटे",
  },

  xHours: {
    one: "१ घंटा", // CLDR #1304
    other: "{{count}} घंटे", // CLDR #4467
  },

  xDays: {
    one: "१ दिन", // CLDR #1286
    other: "{{count}} दिन",
  },

  aboutXWeeks: {
    one: "लगभग १ सप्ताह",
    other: "लगभग {{count}} सप्ताह",
  },

  xWeeks: {
    one: "१ सप्ताह",
    other: "{{count}} सप्ताह",
  },

  aboutXMonths: {
    one: "लगभग १ महीना",
    other: "लगभग {{count}} महीने",
  },

  xMonths: {
    one: "१ महीना",
    other: "{{count}} महीने",
  },

  aboutXYears: {
    one: "लगभग १ वर्ष",
    other: "लगभग {{count}} वर्ष", // CLDR #4823
  },

  xYears: {
    one: "१ वर्ष",
    other: "{{count}} वर्ष",
  },

  overXYears: {
    one: "१ वर्ष से अधिक",
    other: "{{count}} वर्ष से अधिक",
  },

  almostXYears: {
    one: "लगभग १ वर्ष",
    other: "लगभग {{count}} वर्ष",
  },
};

export const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", numberToLocale(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + "मे ";
    } else {
      return result + " पहले";
    }
  }

  return result;
};
