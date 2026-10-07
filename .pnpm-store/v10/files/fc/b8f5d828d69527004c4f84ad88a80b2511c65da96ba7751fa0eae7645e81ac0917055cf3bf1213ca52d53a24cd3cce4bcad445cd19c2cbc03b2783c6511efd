const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "ավելի քիչ քան 1 վայրկյան",
    other: "ավելի քիչ քան {{count}} վայրկյան",
  },

  xSeconds: {
    one: "1 վայրկյան",
    other: "{{count}} վայրկյան",
  },

  halfAMinute: "կես րոպե",

  lessThanXMinutes: {
    one: "ավելի քիչ քան 1 րոպե",
    other: "ավելի քիչ քան {{count}} րոպե",
  },

  xMinutes: {
    one: "1 րոպե",
    other: "{{count}} րոպե",
  },

  aboutXHours: {
    one: "մոտ 1 ժամ",
    other: "մոտ {{count}} ժամ",
  },

  xHours: {
    one: "1 ժամ",
    other: "{{count}} ժամ",
  },

  xDays: {
    one: "1 օր",
    other: "{{count}} օր",
  },

  aboutXWeeks: {
    one: "մոտ 1 շաբաթ",
    other: "մոտ {{count}} շաբաթ",
  },

  xWeeks: {
    one: "1 շաբաթ",
    other: "{{count}} շաբաթ",
  },

  aboutXMonths: {
    one: "մոտ 1 ամիս",
    other: "մոտ {{count}} ամիս",
  },

  xMonths: {
    one: "1 ամիս",
    other: "{{count}} ամիս",
  },

  aboutXYears: {
    one: "մոտ 1 տարի",
    other: "մոտ {{count}} տարի",
  },

  xYears: {
    one: "1 տարի",
    other: "{{count}} տարի",
  },

  overXYears: {
    one: "ավելի քան 1 տարի",
    other: "ավելի քան {{count}} տարի",
  },

  almostXYears: {
    one: "համարյա 1 տարի",
    other: "համարյա {{count}} տարի",
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
      return result + " հետո";
    } else {
      return result + " առաջ";
    }
  }

  return result;
};
