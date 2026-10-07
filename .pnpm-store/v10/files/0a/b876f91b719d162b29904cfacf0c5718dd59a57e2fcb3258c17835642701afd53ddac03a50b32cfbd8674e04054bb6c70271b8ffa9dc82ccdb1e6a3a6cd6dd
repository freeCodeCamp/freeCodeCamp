"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "פחות משנייה",
    two: "פחות משתי שניות",
    other: "פחות מ־{{count}} שניות",
  },

  xSeconds: {
    one: "שנייה",
    two: "שתי שניות",
    other: "{{count}} שניות",
  },

  halfAMinute: "חצי דקה",

  lessThanXMinutes: {
    one: "פחות מדקה",
    two: "פחות משתי דקות",
    other: "פחות מ־{{count}} דקות",
  },

  xMinutes: {
    one: "דקה",
    two: "שתי דקות",
    other: "{{count}} דקות",
  },

  aboutXHours: {
    one: "כשעה",
    two: "כשעתיים",
    other: "כ־{{count}} שעות",
  },

  xHours: {
    one: "שעה",
    two: "שעתיים",
    other: "{{count}} שעות",
  },

  xDays: {
    one: "יום",
    two: "יומיים",
    other: "{{count}} ימים",
  },

  aboutXWeeks: {
    one: "כשבוע",
    two: "כשבועיים",
    other: "כ־{{count}} שבועות",
  },

  xWeeks: {
    one: "שבוע",
    two: "שבועיים",
    other: "{{count}} שבועות",
  },

  aboutXMonths: {
    one: "כחודש",
    two: "כחודשיים",
    other: "כ־{{count}} חודשים",
  },

  xMonths: {
    one: "חודש",
    two: "חודשיים",
    other: "{{count}} חודשים",
  },

  aboutXYears: {
    one: "כשנה",
    two: "כשנתיים",
    other: "כ־{{count}} שנים",
  },

  xYears: {
    one: "שנה",
    two: "שנתיים",
    other: "{{count}} שנים",
  },

  overXYears: {
    one: "יותר משנה",
    two: "יותר משנתיים",
    other: "יותר מ־{{count}} שנים",
  },

  almostXYears: {
    one: "כמעט שנה",
    two: "כמעט שנתיים",
    other: "כמעט {{count}} שנים",
  },
};

const formatDistance = (token, count, options) => {
  // Return word instead of `in one day` or `one day ago`
  if (token === "xDays" && options?.addSuffix && count <= 2) {
    if (options.comparison && options.comparison > 0) {
      return count === 1 ? "מחר" : "מחרתיים";
    }

    return count === 1 ? "אתמול" : "שלשום";
  }

  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2) {
    result = tokenValue.two;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "בעוד " + result;
    } else {
      return "לפני " + result;
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
