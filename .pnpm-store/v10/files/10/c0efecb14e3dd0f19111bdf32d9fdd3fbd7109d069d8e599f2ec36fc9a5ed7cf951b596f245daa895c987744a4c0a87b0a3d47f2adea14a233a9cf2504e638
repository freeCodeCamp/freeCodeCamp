"use strict";
exports.formatDistance = void 0;

// note: no implementation for weeks

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      default: "1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
      future: "1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
      past: "1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
    },
    other: {
      default: "{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
      future: "{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
      past: "{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
    },
  },

  xSeconds: {
    one: {
      default: "1 ಸೆಕೆಂಡ್",
      future: "1 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ",
      past: "1 ಸೆಕೆಂಡ್ ಹಿಂದೆ",
    },
    other: {
      default: "{{count}} ಸೆಕೆಂಡುಗಳು",
      future: "{{count}} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ",
      past: "{{count}} ಸೆಕೆಂಡ್ ಹಿಂದೆ",
    },
  },

  halfAMinute: {
    other: {
      default: "ಅರ್ಧ ನಿಮಿಷ",
      future: "ಅರ್ಧ ನಿಮಿಷದಲ್ಲಿ",
      past: "ಅರ್ಧ ನಿಮಿಷದ ಹಿಂದೆ",
    },
  },

  lessThanXMinutes: {
    one: {
      default: "1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
      future: "1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
      past: "1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
    },
    other: {
      default: "{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
      future: "{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
      past: "{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
    },
  },

  xMinutes: {
    one: {
      default: "1 ನಿಮಿಷ",
      future: "1 ನಿಮಿಷದಲ್ಲಿ",
      past: "1 ನಿಮಿಷದ ಹಿಂದೆ",
    },
    other: {
      default: "{{count}} ನಿಮಿಷಗಳು",
      future: "{{count}} ನಿಮಿಷಗಳಲ್ಲಿ",
      past: "{{count}} ನಿಮಿಷಗಳ ಹಿಂದೆ",
    },
  },

  aboutXHours: {
    one: {
      default: "ಸುಮಾರು 1 ಗಂಟೆ",
      future: "ಸುಮಾರು 1 ಗಂಟೆಯಲ್ಲಿ",
      past: "ಸುಮಾರು 1 ಗಂಟೆ ಹಿಂದೆ",
    },
    other: {
      default: "ಸುಮಾರು {{count}} ಗಂಟೆಗಳು",
      future: "ಸುಮಾರು {{count}} ಗಂಟೆಗಳಲ್ಲಿ",
      past: "ಸುಮಾರು {{count}} ಗಂಟೆಗಳ ಹಿಂದೆ",
    },
  },

  xHours: {
    one: {
      default: "1 ಗಂಟೆ",
      future: "1 ಗಂಟೆಯಲ್ಲಿ",
      past: "1 ಗಂಟೆ ಹಿಂದೆ",
    },
    other: {
      default: "{{count}} ಗಂಟೆಗಳು",
      future: "{{count}} ಗಂಟೆಗಳಲ್ಲಿ",
      past: "{{count}} ಗಂಟೆಗಳ ಹಿಂದೆ",
    },
  },

  xDays: {
    one: {
      default: "1 ದಿನ",
      future: "1 ದಿನದಲ್ಲಿ",
      past: "1 ದಿನದ ಹಿಂದೆ",
    },
    other: {
      default: "{{count}} ದಿನಗಳು",
      future: "{{count}} ದಿನಗಳಲ್ಲಿ",
      past: "{{count}} ದಿನಗಳ ಹಿಂದೆ",
    },
  },

  // TODO
  // aboutXWeeks: {},

  // TODO
  // xWeeks: {},

  aboutXMonths: {
    one: {
      default: "ಸುಮಾರು 1 ತಿಂಗಳು",
      future: "ಸುಮಾರು 1 ತಿಂಗಳಲ್ಲಿ",
      past: "ಸುಮಾರು 1 ತಿಂಗಳ ಹಿಂದೆ",
    },
    other: {
      default: "ಸುಮಾರು {{count}} ತಿಂಗಳು",
      future: "ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳಲ್ಲಿ",
      past: "ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ",
    },
  },

  xMonths: {
    one: {
      default: "1 ತಿಂಗಳು",
      future: "1 ತಿಂಗಳಲ್ಲಿ",
      past: "1 ತಿಂಗಳ ಹಿಂದೆ",
    },
    other: {
      default: "{{count}} ತಿಂಗಳು",
      future: "{{count}} ತಿಂಗಳುಗಳಲ್ಲಿ",
      past: "{{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ",
    },
  },

  aboutXYears: {
    one: {
      default: "ಸುಮಾರು 1 ವರ್ಷ",
      future: "ಸುಮಾರು 1 ವರ್ಷದಲ್ಲಿ",
      past: "ಸುಮಾರು 1 ವರ್ಷದ ಹಿಂದೆ",
    },
    other: {
      default: "ಸುಮಾರು {{count}} ವರ್ಷಗಳು",
      future: "ಸುಮಾರು {{count}} ವರ್ಷಗಳಲ್ಲಿ",
      past: "ಸುಮಾರು {{count}} ವರ್ಷಗಳ ಹಿಂದೆ",
    },
  },

  xYears: {
    one: {
      default: "1 ವರ್ಷ",
      future: "1 ವರ್ಷದಲ್ಲಿ",
      past: "1 ವರ್ಷದ ಹಿಂದೆ",
    },
    other: {
      default: "{{count}} ವರ್ಷಗಳು",
      future: "{{count}} ವರ್ಷಗಳಲ್ಲಿ",
      past: "{{count}} ವರ್ಷಗಳ ಹಿಂದೆ",
    },
  },

  overXYears: {
    one: {
      default: "1 ವರ್ಷದ ಮೇಲೆ",
      future: "1 ವರ್ಷದ ಮೇಲೆ",
      past: "1 ವರ್ಷದ ಮೇಲೆ",
    },
    other: {
      default: "{{count}} ವರ್ಷಗಳ ಮೇಲೆ",
      future: "{{count}} ವರ್ಷಗಳ ಮೇಲೆ",
      past: "{{count}} ವರ್ಷಗಳ ಮೇಲೆ",
    },
  },

  almostXYears: {
    one: {
      default: "ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",
      future: "ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",
      past: "ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",
    },
    other: {
      default: "ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",
      future: "ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",
      past: "ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",
    },
  },
};

function getResultByTense(parentToken, options) {
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return parentToken.future;
    } else {
      return parentToken.past;
    }
  }
  return parentToken.default;
}

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];

  if (tokenValue.one && count === 1) {
    result = getResultByTense(tokenValue.one, options);
  } else {
    result = getResultByTense(tokenValue.other, options);
  }

  return result.replace("{{count}}", String(count));
};
exports.formatDistance = formatDistance;
