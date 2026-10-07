const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "mindre enn eitt sekund",
    other: "mindre enn {{count}} sekund",
  },

  xSeconds: {
    one: "eitt sekund",
    other: "{{count}} sekund",
  },

  halfAMinute: "eit halvt minutt",

  lessThanXMinutes: {
    one: "mindre enn eitt minutt",
    other: "mindre enn {{count}} minutt",
  },

  xMinutes: {
    one: "eitt minutt",
    other: "{{count}} minutt",
  },

  aboutXHours: {
    one: "omtrent ein time",
    other: "omtrent {{count}} timar",
  },

  xHours: {
    one: "ein time",
    other: "{{count}} timar",
  },

  xDays: {
    one: "ein dag",
    other: "{{count}} dagar",
  },

  aboutXWeeks: {
    one: "omtrent ei veke",
    other: "omtrent {{count}} veker",
  },

  xWeeks: {
    one: "ei veke",
    other: "{{count}} veker",
  },

  aboutXMonths: {
    one: "omtrent ein månad",
    other: "omtrent {{count}} månader",
  },

  xMonths: {
    one: "ein månad",
    other: "{{count}} månader",
  },

  aboutXYears: {
    one: "omtrent eitt år",
    other: "omtrent {{count}} år",
  },

  xYears: {
    one: "eitt år",
    other: "{{count}} år",
  },

  overXYears: {
    one: "over eitt år",
    other: "over {{count}} år",
  },

  almostXYears: {
    one: "nesten eitt år",
    other: "nesten {{count}} år",
  },
};

const wordMapping = [
  "null",
  "ein",
  "to",
  "tre",
  "fire",
  "fem",
  "seks",
  "sju",
  "åtte",
  "ni",
  "ti",
  "elleve",
  "tolv",
];

export const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace(
      "{{count}}",
      count < 13 ? wordMapping[count] : String(count),
    );
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "om " + result;
    } else {
      return result + " sidan";
    }
  }

  return result;
};
