const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "mens d’una segonda",
    other: "mens de {{count}} segondas",
  },

  xSeconds: {
    one: "1 segonda",
    other: "{{count}} segondas",
  },

  halfAMinute: "30 segondas",

  lessThanXMinutes: {
    one: "mens d’una minuta",
    other: "mens de {{count}} minutas",
  },

  xMinutes: {
    one: "1 minuta",
    other: "{{count}} minutas",
  },

  aboutXHours: {
    one: "environ 1 ora",
    other: "environ {{count}} oras",
  },

  xHours: {
    one: "1 ora",
    other: "{{count}} oras",
  },

  xDays: {
    one: "1 jorn",
    other: "{{count}} jorns",
  },

  aboutXWeeks: {
    one: "environ 1 setmana",
    other: "environ {{count}} setmanas",
  },

  xWeeks: {
    one: "1 setmana",
    other: "{{count}} setmanas",
  },

  aboutXMonths: {
    one: "environ 1 mes",
    other: "environ {{count}} meses",
  },

  xMonths: {
    one: "1 mes",
    other: "{{count}} meses",
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
    one: "mai d’un an",
    other: "mai de {{count}} ans",
  },

  almostXYears: {
    one: "gaireben un an",
    other: "gaireben {{count}} ans",
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
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "d’aquí " + result;
    } else {
      return "fa " + result;
    }
  }

  return result;
};
