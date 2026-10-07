"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "moins d’une seconde",
    other: "moins de {{count}} secondes",
  },

  xSeconds: {
    one: "1 seconde",
    other: "{{count}} secondes",
  },

  halfAMinute: "30 secondes",

  lessThanXMinutes: {
    one: "moins d’une minute",
    other: "moins de {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "environ 1 heure",
    other: "environ {{count}} heures",
  },

  xHours: {
    one: "1 heure",
    other: "{{count}} heures",
  },

  xDays: {
    one: "1 jour",
    other: "{{count}} jours",
  },

  aboutXWeeks: {
    one: "environ 1 semaine",
    other: "environ {{count}} semaines",
  },

  xWeeks: {
    one: "1 semaine",
    other: "{{count}} semaines",
  },

  aboutXMonths: {
    one: "environ 1 mois",
    other: "environ {{count}} mois",
  },

  xMonths: {
    one: "1 mois",
    other: "{{count}} mois",
  },

  aboutXYears: {
    one: "environ 1 an",
    other: "environ {{count}} ans",
  },

  xYears: {
    one: "1 an",
    other: "{{count}} ans",
  },

  overXYears: {
    one: "plus d’un an",
    other: "plus de {{count}} ans",
  },

  almostXYears: {
    one: "presqu’un an",
    other: "presque {{count}} ans",
  },
};

const formatDistance = (token, count, options) => {
  let result;
  const form = formatDistanceLocale[token];
  if (typeof form === "string") {
    result = form;
  } else if (count === 1) {
    result = form.one;
  } else {
    result = form.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "dans " + result;
    } else {
      return "il y a " + result;
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
