"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      standalone: "мање од 1 секунде",
      withPrepositionAgo: "мање од 1 секунде",
      withPrepositionIn: "мање од 1 секунду",
    },
    dual: "мање од {{count}} секунде",
    other: "мање од {{count}} секунди",
  },

  xSeconds: {
    one: {
      standalone: "1 секунда",
      withPrepositionAgo: "1 секунде",
      withPrepositionIn: "1 секунду",
    },
    dual: "{{count}} секунде",
    other: "{{count}} секунди",
  },

  halfAMinute: "пола минуте",

  lessThanXMinutes: {
    one: {
      standalone: "мање од 1 минуте",
      withPrepositionAgo: "мање од 1 минуте",
      withPrepositionIn: "мање од 1 минуту",
    },
    dual: "мање од {{count}} минуте",
    other: "мање од {{count}} минута",
  },

  xMinutes: {
    one: {
      standalone: "1 минута",
      withPrepositionAgo: "1 минуте",
      withPrepositionIn: "1 минуту",
    },
    dual: "{{count}} минуте",
    other: "{{count}} минута",
  },

  aboutXHours: {
    one: {
      standalone: "око 1 сат",
      withPrepositionAgo: "око 1 сат",
      withPrepositionIn: "око 1 сат",
    },
    dual: "око {{count}} сата",
    other: "око {{count}} сати",
  },

  xHours: {
    one: {
      standalone: "1 сат",
      withPrepositionAgo: "1 сат",
      withPrepositionIn: "1 сат",
    },
    dual: "{{count}} сата",
    other: "{{count}} сати",
  },

  xDays: {
    one: {
      standalone: "1 дан",
      withPrepositionAgo: "1 дан",
      withPrepositionIn: "1 дан",
    },
    dual: "{{count}} дана",
    other: "{{count}} дана",
  },

  aboutXWeeks: {
    one: {
      standalone: "око 1 недељу",
      withPrepositionAgo: "око 1 недељу",
      withPrepositionIn: "око 1 недељу",
    },
    dual: "око {{count}} недеље",
    other: "око {{count}} недеље",
  },

  xWeeks: {
    one: {
      standalone: "1 недељу",
      withPrepositionAgo: "1 недељу",
      withPrepositionIn: "1 недељу",
    },
    dual: "{{count}} недеље",
    other: "{{count}} недеље",
  },

  aboutXMonths: {
    one: {
      standalone: "око 1 месец",
      withPrepositionAgo: "око 1 месец",
      withPrepositionIn: "око 1 месец",
    },
    dual: "око {{count}} месеца",
    other: "око {{count}} месеци",
  },

  xMonths: {
    one: {
      standalone: "1 месец",
      withPrepositionAgo: "1 месец",
      withPrepositionIn: "1 месец",
    },
    dual: "{{count}} месеца",
    other: "{{count}} месеци",
  },

  aboutXYears: {
    one: {
      standalone: "око 1 годину",
      withPrepositionAgo: "око 1 годину",
      withPrepositionIn: "око 1 годину",
    },
    dual: "око {{count}} године",
    other: "око {{count}} година",
  },

  xYears: {
    one: {
      standalone: "1 година",
      withPrepositionAgo: "1 године",
      withPrepositionIn: "1 годину",
    },
    dual: "{{count}} године",
    other: "{{count}} година",
  },

  overXYears: {
    one: {
      standalone: "преко 1 годину",
      withPrepositionAgo: "преко 1 годину",
      withPrepositionIn: "преко 1 годину",
    },
    dual: "преко {{count}} године",
    other: "преко {{count}} година",
  },

  almostXYears: {
    one: {
      standalone: "готово 1 годину",
      withPrepositionAgo: "готово 1 годину",
      withPrepositionIn: "готово 1 годину",
    },
    dual: "готово {{count}} године",
    other: "готово {{count}} година",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        result = tokenValue.one.withPrepositionIn;
      } else {
        result = tokenValue.one.withPrepositionAgo;
      }
    } else {
      result = tokenValue.one.standalone;
    }
  } else if (
    count % 10 > 1 &&
    count % 10 < 5 && // if last digit is between 2 and 4
    String(count).substr(-2, 1) !== "1" // unless the 2nd to last digit is "1"
  ) {
    result = tokenValue.dual.replace("{{count}}", String(count));
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "за " + result;
    } else {
      return "пре " + result;
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
