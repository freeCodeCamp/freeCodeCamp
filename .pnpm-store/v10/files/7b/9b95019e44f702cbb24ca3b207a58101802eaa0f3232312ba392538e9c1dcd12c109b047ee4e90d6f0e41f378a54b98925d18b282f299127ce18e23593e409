const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "llai na eiliad",
    other: "llai na {{count}} eiliad",
  },

  xSeconds: {
    one: "1 eiliad",
    other: "{{count}} eiliad",
  },

  halfAMinute: "hanner munud",

  lessThanXMinutes: {
    one: "llai na munud",
    two: "llai na 2 funud",
    other: "llai na {{count}} munud",
  },

  xMinutes: {
    one: "1 munud",
    two: "2 funud",
    other: "{{count}} munud",
  },

  aboutXHours: {
    one: "tua 1 awr",
    other: "tua {{count}} awr",
  },

  xHours: {
    one: "1 awr",
    other: "{{count}} awr",
  },

  xDays: {
    one: "1 diwrnod",
    two: "2 ddiwrnod",
    other: "{{count}} diwrnod",
  },

  aboutXWeeks: {
    one: "tua 1 wythnos",
    two: "tua pythefnos",
    other: "tua {{count}} wythnos",
  },

  xWeeks: {
    one: "1 wythnos",
    two: "pythefnos",
    other: "{{count}} wythnos",
  },

  aboutXMonths: {
    one: "tua 1 mis",
    two: "tua 2 fis",
    other: "tua {{count}} mis",
  },

  xMonths: {
    one: "1 mis",
    two: "2 fis",
    other: "{{count}} mis",
  },

  aboutXYears: {
    one: "tua 1 flwyddyn",
    two: "tua 2 flynedd",
    other: "tua {{count}} mlynedd",
  },

  xYears: {
    one: "1 flwyddyn",
    two: "2 flynedd",
    other: "{{count}} mlynedd",
  },

  overXYears: {
    one: "dros 1 flwyddyn",
    two: "dros 2 flynedd",
    other: "dros {{count}} mlynedd",
  },

  almostXYears: {
    one: "bron 1 flwyddyn",
    two: "bron 2 flynedd",
    other: "bron {{count}} mlynedd",
  },
};

export const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2 && !!tokenValue.two) {
    result = tokenValue.two;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "mewn " + result;
    } else {
      return result + " yn ôl";
    }
  }

  return result;
};
