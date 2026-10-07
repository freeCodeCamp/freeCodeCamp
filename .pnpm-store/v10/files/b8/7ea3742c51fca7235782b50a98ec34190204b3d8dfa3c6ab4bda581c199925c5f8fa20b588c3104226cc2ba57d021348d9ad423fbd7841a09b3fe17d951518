"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      regular: "méně než 1 sekunda",
      past: "před méně než 1 sekundou",
      future: "za méně než 1 sekundu",
    },
    few: {
      regular: "méně než {{count}} sekundy",
      past: "před méně než {{count}} sekundami",
      future: "za méně než {{count}} sekundy",
    },
    many: {
      regular: "méně než {{count}} sekund",
      past: "před méně než {{count}} sekundami",
      future: "za méně než {{count}} sekund",
    },
  },

  xSeconds: {
    one: {
      regular: "1 sekunda",
      past: "před 1 sekundou",
      future: "za 1 sekundu",
    },
    few: {
      regular: "{{count}} sekundy",
      past: "před {{count}} sekundami",
      future: "za {{count}} sekundy",
    },
    many: {
      regular: "{{count}} sekund",
      past: "před {{count}} sekundami",
      future: "za {{count}} sekund",
    },
  },

  halfAMinute: {
    type: "other",
    other: {
      regular: "půl minuty",
      past: "před půl minutou",
      future: "za půl minuty",
    },
  },

  lessThanXMinutes: {
    one: {
      regular: "méně než 1 minuta",
      past: "před méně než 1 minutou",
      future: "za méně než 1 minutu",
    },
    few: {
      regular: "méně než {{count}} minuty",
      past: "před méně než {{count}} minutami",
      future: "za méně než {{count}} minuty",
    },
    many: {
      regular: "méně než {{count}} minut",
      past: "před méně než {{count}} minutami",
      future: "za méně než {{count}} minut",
    },
  },

  xMinutes: {
    one: {
      regular: "1 minuta",
      past: "před 1 minutou",
      future: "za 1 minutu",
    },
    few: {
      regular: "{{count}} minuty",
      past: "před {{count}} minutami",
      future: "za {{count}} minuty",
    },
    many: {
      regular: "{{count}} minut",
      past: "před {{count}} minutami",
      future: "za {{count}} minut",
    },
  },

  aboutXHours: {
    one: {
      regular: "přibližně 1 hodina",
      past: "přibližně před 1 hodinou",
      future: "přibližně za 1 hodinu",
    },
    few: {
      regular: "přibližně {{count}} hodiny",
      past: "přibližně před {{count}} hodinami",
      future: "přibližně za {{count}} hodiny",
    },
    many: {
      regular: "přibližně {{count}} hodin",
      past: "přibližně před {{count}} hodinami",
      future: "přibližně za {{count}} hodin",
    },
  },

  xHours: {
    one: {
      regular: "1 hodina",
      past: "před 1 hodinou",
      future: "za 1 hodinu",
    },
    few: {
      regular: "{{count}} hodiny",
      past: "před {{count}} hodinami",
      future: "za {{count}} hodiny",
    },
    many: {
      regular: "{{count}} hodin",
      past: "před {{count}} hodinami",
      future: "za {{count}} hodin",
    },
  },

  xDays: {
    one: {
      regular: "1 den",
      past: "před 1 dnem",
      future: "za 1 den",
    },
    few: {
      regular: "{{count}} dny",
      past: "před {{count}} dny",
      future: "za {{count}} dny",
    },
    many: {
      regular: "{{count}} dní",
      past: "před {{count}} dny",
      future: "za {{count}} dní",
    },
  },

  aboutXWeeks: {
    one: {
      regular: "přibližně 1 týden",
      past: "přibližně před 1 týdnem",
      future: "přibližně za 1 týden",
    },

    few: {
      regular: "přibližně {{count}} týdny",
      past: "přibližně před {{count}} týdny",
      future: "přibližně za {{count}} týdny",
    },

    many: {
      regular: "přibližně {{count}} týdnů",
      past: "přibližně před {{count}} týdny",
      future: "přibližně za {{count}} týdnů",
    },
  },

  xWeeks: {
    one: {
      regular: "1 týden",
      past: "před 1 týdnem",
      future: "za 1 týden",
    },

    few: {
      regular: "{{count}} týdny",
      past: "před {{count}} týdny",
      future: "za {{count}} týdny",
    },

    many: {
      regular: "{{count}} týdnů",
      past: "před {{count}} týdny",
      future: "za {{count}} týdnů",
    },
  },

  aboutXMonths: {
    one: {
      regular: "přibližně 1 měsíc",
      past: "přibližně před 1 měsícem",
      future: "přibližně za 1 měsíc",
    },

    few: {
      regular: "přibližně {{count}} měsíce",
      past: "přibližně před {{count}} měsíci",
      future: "přibližně za {{count}} měsíce",
    },

    many: {
      regular: "přibližně {{count}} měsíců",
      past: "přibližně před {{count}} měsíci",
      future: "přibližně za {{count}} měsíců",
    },
  },

  xMonths: {
    one: {
      regular: "1 měsíc",
      past: "před 1 měsícem",
      future: "za 1 měsíc",
    },

    few: {
      regular: "{{count}} měsíce",
      past: "před {{count}} měsíci",
      future: "za {{count}} měsíce",
    },

    many: {
      regular: "{{count}} měsíců",
      past: "před {{count}} měsíci",
      future: "za {{count}} měsíců",
    },
  },

  aboutXYears: {
    one: {
      regular: "přibližně 1 rok",
      past: "přibližně před 1 rokem",
      future: "přibližně za 1 rok",
    },
    few: {
      regular: "přibližně {{count}} roky",
      past: "přibližně před {{count}} roky",
      future: "přibližně za {{count}} roky",
    },
    many: {
      regular: "přibližně {{count}} roků",
      past: "přibližně před {{count}} roky",
      future: "přibližně za {{count}} roků",
    },
  },

  xYears: {
    one: {
      regular: "1 rok",
      past: "před 1 rokem",
      future: "za 1 rok",
    },
    few: {
      regular: "{{count}} roky",
      past: "před {{count}} roky",
      future: "za {{count}} roky",
    },
    many: {
      regular: "{{count}} roků",
      past: "před {{count}} roky",
      future: "za {{count}} roků",
    },
  },

  overXYears: {
    one: {
      regular: "více než 1 rok",
      past: "před více než 1 rokem",
      future: "za více než 1 rok",
    },
    few: {
      regular: "více než {{count}} roky",
      past: "před více než {{count}} roky",
      future: "za více než {{count}} roky",
    },
    many: {
      regular: "více než {{count}} roků",
      past: "před více než {{count}} roky",
      future: "za více než {{count}} roků",
    },
  },

  almostXYears: {
    one: {
      regular: "skoro 1 rok",
      past: "skoro před 1 rokem",
      future: "skoro za 1 rok",
    },
    few: {
      regular: "skoro {{count}} roky",
      past: "skoro před {{count}} roky",
      future: "skoro za {{count}} roky",
    },
    many: {
      regular: "skoro {{count}} roků",
      past: "skoro před {{count}} roky",
      future: "skoro za {{count}} roků",
    },
  },
};

const formatDistance = (token, count, options) => {
  let pluralResult;

  const tokenValue = formatDistanceLocale[token];

  // cs pluralization
  if (tokenValue.type === "other") {
    pluralResult = tokenValue.other;
  } else if (count === 1) {
    pluralResult = tokenValue.one;
  } else if (count > 1 && count < 5) {
    pluralResult = tokenValue.few;
  } else {
    pluralResult = tokenValue.many;
  }

  // times
  const suffixExist = options?.addSuffix === true;
  const comparison = options?.comparison;

  let timeResult;
  if (suffixExist && comparison === -1) {
    timeResult = pluralResult.past;
  } else if (suffixExist && comparison === 1) {
    timeResult = pluralResult.future;
  } else {
    timeResult = pluralResult.regular;
  }

  return timeResult.replace("{{count}}", String(count));
};
exports.formatDistance = formatDistance;
