const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "unnit go ovtta sekundda",
    other: "unnit go {{count}} sekundda",
  },

  xSeconds: {
    one: "sekundda",
    other: "{{count}} sekundda",
  },

  halfAMinute: "bealle minuhta",

  lessThanXMinutes: {
    one: "unnit go bealle minuhta",
    other: "unnit go {{count}} minuhta",
  },

  xMinutes: {
    one: "minuhta",
    other: "{{count}} minuhta",
  },

  aboutXHours: {
    one: "sullii ovtta diimmu",
    other: "sullii {{count}} diimmu",
  },

  xHours: {
    one: "diimmu",
    other: "{{count}} diimmu",
  },

  xDays: {
    one: "beaivvi",
    other: "{{count}} beaivvi",
  },

  aboutXWeeks: {
    one: "sullii ovtta vahku",
    other: "sullii {{count}} vahku",
  },

  xWeeks: {
    one: "vahku",
    other: "{{count}} vahku",
  },

  aboutXMonths: {
    one: "sullii ovtta mánu",
    other: "sullii {{count}} mánu",
  },

  xMonths: {
    one: "mánu",
    other: "{{count}} mánu",
  },

  aboutXYears: {
    one: "sullii ovtta jagi",
    other: "sullii {{count}} jagi",
  },

  xYears: {
    one: "jagi",
    other: "{{count}} jagi",
  },

  overXYears: {
    one: "guhkit go jagi",
    other: "guhkit go {{count}} jagi",
  },

  almostXYears: {
    one: "measta jagi",
    other: "measta {{count}} jagi",
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
      return "geahčen " + result;
    } else {
      return result + " áigi";
    }
  }

  return result;
};
