const formatDistanceLocale = {
  lessThanXSeconds: {
    regular: {
      one: "1 секундтан аз",
      singularNominative: "{{count}} секундтан аз",
      singularGenitive: "{{count}} секундтан аз",
      pluralGenitive: "{{count}} секундтан аз",
    },
    future: {
      one: "бір секундтан кейін",
      singularNominative: "{{count}} секундтан кейін",
      singularGenitive: "{{count}} секундтан кейін",
      pluralGenitive: "{{count}} секундтан кейін",
    },
  },

  xSeconds: {
    regular: {
      singularNominative: "{{count}} секунд",
      singularGenitive: "{{count}} секунд",
      pluralGenitive: "{{count}} секунд",
    },
    past: {
      singularNominative: "{{count}} секунд бұрын",
      singularGenitive: "{{count}} секунд бұрын",
      pluralGenitive: "{{count}} секунд бұрын",
    },
    future: {
      singularNominative: "{{count}} секундтан кейін",
      singularGenitive: "{{count}} секундтан кейін",
      pluralGenitive: "{{count}} секундтан кейін",
    },
  },

  halfAMinute: (options) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "жарты минут ішінде";
      } else {
        return "жарты минут бұрын";
      }
    }

    return "жарты минут";
  },

  lessThanXMinutes: {
    regular: {
      one: "1 минуттан аз",
      singularNominative: "{{count}} минуттан аз",
      singularGenitive: "{{count}} минуттан аз",
      pluralGenitive: "{{count}} минуттан аз",
    },
    future: {
      one: "минуттан кем ",
      singularNominative: "{{count}} минуттан кем",
      singularGenitive: "{{count}} минуттан кем",
      pluralGenitive: "{{count}} минуттан кем",
    },
  },

  xMinutes: {
    regular: {
      singularNominative: "{{count}} минут",
      singularGenitive: "{{count}} минут",
      pluralGenitive: "{{count}} минут",
    },
    past: {
      singularNominative: "{{count}} минут бұрын",
      singularGenitive: "{{count}} минут бұрын",
      pluralGenitive: "{{count}} минут бұрын",
    },
    future: {
      singularNominative: "{{count}} минуттан кейін",
      singularGenitive: "{{count}} минуттан кейін",
      pluralGenitive: "{{count}} минуттан кейін",
    },
  },

  aboutXHours: {
    regular: {
      singularNominative: "шамамен {{count}} сағат",
      singularGenitive: "шамамен {{count}} сағат",
      pluralGenitive: "шамамен {{count}} сағат",
    },
    future: {
      singularNominative: "шамамен {{count}} сағаттан кейін",
      singularGenitive: "шамамен {{count}} сағаттан кейін",
      pluralGenitive: "шамамен {{count}} сағаттан кейін",
    },
  },

  xHours: {
    regular: {
      singularNominative: "{{count}} сағат",
      singularGenitive: "{{count}} сағат",
      pluralGenitive: "{{count}} сағат",
    },
  },

  xDays: {
    regular: {
      singularNominative: "{{count}} күн",
      singularGenitive: "{{count}} күн",
      pluralGenitive: "{{count}} күн",
    },
    future: {
      singularNominative: "{{count}} күннен кейін",
      singularGenitive: "{{count}} күннен кейін",
      pluralGenitive: "{{count}} күннен кейін",
    },
  },

  aboutXWeeks: {
    type: "weeks",
    one: "шамамен 1 апта",
    other: "шамамен {{count}} апта",
  },

  xWeeks: {
    type: "weeks",
    one: "1 апта",
    other: "{{count}} апта",
  },

  aboutXMonths: {
    regular: {
      singularNominative: "шамамен {{count}} ай",
      singularGenitive: "шамамен {{count}} ай",
      pluralGenitive: "шамамен {{count}} ай",
    },
    future: {
      singularNominative: "шамамен {{count}} айдан кейін",
      singularGenitive: "шамамен {{count}} айдан кейін",
      pluralGenitive: "шамамен {{count}} айдан кейін",
    },
  },

  xMonths: {
    regular: {
      singularNominative: "{{count}} ай",
      singularGenitive: "{{count}} ай",
      pluralGenitive: "{{count}} ай",
    },
  },

  aboutXYears: {
    regular: {
      singularNominative: "шамамен {{count}} жыл",
      singularGenitive: "шамамен {{count}} жыл",
      pluralGenitive: "шамамен {{count}} жыл",
    },
    future: {
      singularNominative: "шамамен {{count}} жылдан кейін",
      singularGenitive: "шамамен {{count}} жылдан кейін",
      pluralGenitive: "шамамен {{count}} жылдан кейін",
    },
  },

  xYears: {
    regular: {
      singularNominative: "{{count}} жыл",
      singularGenitive: "{{count}} жыл",
      pluralGenitive: "{{count}} жыл",
    },
    future: {
      singularNominative: "{{count}} жылдан кейін",
      singularGenitive: "{{count}} жылдан кейін",
      pluralGenitive: "{{count}} жылдан кейін",
    },
  },

  overXYears: {
    regular: {
      singularNominative: "{{count}} жылдан астам",
      singularGenitive: "{{count}} жылдан астам",
      pluralGenitive: "{{count}} жылдан астам",
    },
    future: {
      singularNominative: "{{count}} жылдан астам",
      singularGenitive: "{{count}} жылдан астам",
      pluralGenitive: "{{count}} жылдан астам",
    },
  },

  almostXYears: {
    regular: {
      singularNominative: "{{count}} жылға жақын",
      singularGenitive: "{{count}} жылға жақын",
      pluralGenitive: "{{count}} жылға жақын",
    },
    future: {
      singularNominative: "{{count}} жылдан кейін",
      singularGenitive: "{{count}} жылдан кейін",
      pluralGenitive: "{{count}} жылдан кейін",
    },
  },
};

function declension(scheme, count) {
  // scheme for count=1 exists
  if (scheme.one && count === 1) return scheme.one;

  const rem10 = count % 10;
  const rem100 = count % 100;

  // 1, 21, 31, ...
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace("{{count}}", String(count));

    // 2, 3, 4, 22, 23, 24, 32 ...
  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace("{{count}}", String(count));

    // 5, 6, 7, 8, 9, 10, 11, ...
  } else {
    return scheme.pluralGenitive.replace("{{count}}", String(count));
  }
}

export const formatDistance = (token, count, options) => {
  const tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === "function") return tokenValue(options);

  if (tokenValue.type === "weeks") {
    return count === 1
      ? tokenValue.one
      : tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      if (tokenValue.future) {
        return declension(tokenValue.future, count);
      } else {
        return declension(tokenValue.regular, count) + " кейін";
      }
    } else {
      if (tokenValue.past) {
        return declension(tokenValue.past, count);
      } else {
        return declension(tokenValue.regular, count) + " бұрын";
      }
    }
  } else {
    return declension(tokenValue.regular, count);
  }
};
