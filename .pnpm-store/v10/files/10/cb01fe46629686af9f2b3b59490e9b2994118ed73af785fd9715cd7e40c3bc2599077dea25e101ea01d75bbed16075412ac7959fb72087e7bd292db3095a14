const formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      regular: "mniej niż sekunda",
      past: "mniej niż sekundę",
      future: "mniej niż sekundę",
    },
    twoFour: "mniej niż {{count}} sekundy",
    other: "mniej niż {{count}} sekund",
  },

  xSeconds: {
    one: {
      regular: "sekunda",
      past: "sekundę",
      future: "sekundę",
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund",
  },

  halfAMinute: {
    one: "pół minuty",
    twoFour: "pół minuty",
    other: "pół minuty",
  },

  lessThanXMinutes: {
    one: {
      regular: "mniej niż minuta",
      past: "mniej niż minutę",
      future: "mniej niż minutę",
    },
    twoFour: "mniej niż {{count}} minuty",
    other: "mniej niż {{count}} minut",
  },

  xMinutes: {
    one: {
      regular: "minuta",
      past: "minutę",
      future: "minutę",
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut",
  },

  aboutXHours: {
    one: {
      regular: "około godziny",
      past: "około godziny",
      future: "około godzinę",
    },
    twoFour: "około {{count}} godziny",
    other: "około {{count}} godzin",
  },

  xHours: {
    one: {
      regular: "godzina",
      past: "godzinę",
      future: "godzinę",
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin",
  },

  xDays: {
    one: {
      regular: "dzień",
      past: "dzień",
      future: "1 dzień",
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni",
  },

  aboutXWeeks: {
    one: "około tygodnia",
    twoFour: "około {{count}} tygodni",
    other: "około {{count}} tygodni",
  },

  xWeeks: {
    one: "tydzień",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni",
  },

  aboutXMonths: {
    one: "około miesiąc",
    twoFour: "około {{count}} miesiące",
    other: "około {{count}} miesięcy",
  },

  xMonths: {
    one: "miesiąc",
    twoFour: "{{count}} miesiące",
    other: "{{count}} miesięcy",
  },

  aboutXYears: {
    one: "około rok",
    twoFour: "około {{count}} lata",
    other: "około {{count}} lat",
  },

  xYears: {
    one: "rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat",
  },

  overXYears: {
    one: "ponad rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat",
  },

  almostXYears: {
    one: "prawie rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat",
  },
};

function declensionGroup(scheme, count) {
  if (count === 1) {
    return scheme.one;
  }

  const rem100 = count % 100;

  // ends with 11-20
  if (rem100 <= 20 && rem100 > 10) {
    return scheme.other;
  }

  const rem10 = rem100 % 10;

  // ends with 2, 3, 4
  if (rem10 >= 2 && rem10 <= 4) {
    return scheme.twoFour;
  }

  return scheme.other;
}

function declension(scheme, count, time) {
  const group = declensionGroup(scheme, count);
  const finalText = typeof group === "string" ? group : group[time];
  return finalText.replace("{{count}}", String(count));
}

export const formatDistance = (token, count, options) => {
  const scheme = formatDistanceLocale[token];
  if (!options?.addSuffix) {
    return declension(scheme, count, "regular");
  }

  if (options.comparison && options.comparison > 0) {
    return "za " + declension(scheme, count, "future");
  } else {
    return declension(scheme, count, "past") + " temu";
  }
};
