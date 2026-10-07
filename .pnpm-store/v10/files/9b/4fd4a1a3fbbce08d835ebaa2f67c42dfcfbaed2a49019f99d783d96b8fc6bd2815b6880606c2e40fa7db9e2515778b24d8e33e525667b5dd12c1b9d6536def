function isPluralType(val) {
  return val.one !== undefined;
}

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      default: "ஒரு வினாடிக்கு குறைவாக",
      in: "ஒரு வினாடிக்குள்",
      ago: "ஒரு வினாடிக்கு முன்பு",
    },
    other: {
      default: "{{count}} வினாடிகளுக்கு குறைவாக",
      in: "{{count}} வினாடிகளுக்குள்",
      ago: "{{count}} வினாடிகளுக்கு முன்பு",
    },
  },

  xSeconds: {
    one: {
      default: "1 வினாடி",
      in: "1 வினாடியில்",
      ago: "1 வினாடி முன்பு",
    },
    other: {
      default: "{{count}} விநாடிகள்",
      in: "{{count}} வினாடிகளில்",
      ago: "{{count}} விநாடிகளுக்கு முன்பு",
    },
  },

  halfAMinute: {
    default: "அரை நிமிடம்",
    in: "அரை நிமிடத்தில்",
    ago: "அரை நிமிடம் முன்பு",
  },

  lessThanXMinutes: {
    one: {
      default: "ஒரு நிமிடத்திற்கும் குறைவாக",
      in: "ஒரு நிமிடத்திற்குள்",
      ago: "ஒரு நிமிடத்திற்கு முன்பு",
    },
    other: {
      default: "{{count}} நிமிடங்களுக்கும் குறைவாக",
      in: "{{count}} நிமிடங்களுக்குள்",
      ago: "{{count}} நிமிடங்களுக்கு முன்பு",
    },
  },

  xMinutes: {
    one: {
      default: "1 நிமிடம்",
      in: "1 நிமிடத்தில்",
      ago: "1 நிமிடம் முன்பு",
    },
    other: {
      default: "{{count}} நிமிடங்கள்",
      in: "{{count}} நிமிடங்களில்",
      ago: "{{count}} நிமிடங்களுக்கு முன்பு",
    },
  },

  aboutXHours: {
    one: {
      default: "சுமார் 1 மணி நேரம்",
      in: "சுமார் 1 மணி நேரத்தில்",
      ago: "சுமார் 1 மணி நேரத்திற்கு முன்பு",
    },
    other: {
      default: "சுமார் {{count}} மணி நேரம்",
      in: "சுமார் {{count}} மணி நேரத்திற்கு முன்பு",
      ago: "சுமார் {{count}} மணி நேரத்தில்",
    },
  },

  xHours: {
    one: {
      default: "1 மணி நேரம்",
      in: "1 மணி நேரத்தில்",
      ago: "1 மணி நேரத்திற்கு முன்பு",
    },
    other: {
      default: "{{count}} மணி நேரம்",
      in: "{{count}} மணி நேரத்தில்",
      ago: "{{count}} மணி நேரத்திற்கு முன்பு",
    },
  },

  xDays: {
    one: {
      default: "1 நாள்",
      in: "1 நாளில்",
      ago: "1 நாள் முன்பு",
    },
    other: {
      default: "{{count}} நாட்கள்",
      in: "{{count}} நாட்களில்",
      ago: "{{count}} நாட்களுக்கு முன்பு",
    },
  },

  aboutXWeeks: {
    one: {
      default: "சுமார் 1 வாரம்",
      in: "சுமார் 1 வாரத்தில்",
      ago: "சுமார் 1 வாரம் முன்பு",
    },
    other: {
      default: "சுமார் {{count}} வாரங்கள்",
      in: "சுமார் {{count}} வாரங்களில்",
      ago: "சுமார் {{count}} வாரங்களுக்கு முன்பு",
    },
  },

  xWeeks: {
    one: {
      default: "1 வாரம்",
      in: "1 வாரத்தில்",
      ago: "1 வாரம் முன்பு",
    },
    other: {
      default: "{{count}} வாரங்கள்",
      in: "{{count}} வாரங்களில்",
      ago: "{{count}} வாரங்களுக்கு முன்பு",
    },
  },

  aboutXMonths: {
    one: {
      default: "சுமார் 1 மாதம்",
      in: "சுமார் 1 மாதத்தில்",
      ago: "சுமார் 1 மாதத்திற்கு முன்பு",
    },
    other: {
      default: "சுமார் {{count}} மாதங்கள்",
      in: "சுமார் {{count}} மாதங்களில்",
      ago: "சுமார் {{count}} மாதங்களுக்கு முன்பு",
    },
  },

  xMonths: {
    one: {
      default: "1 மாதம்",
      in: "1 மாதத்தில்",
      ago: "1 மாதம் முன்பு",
    },
    other: {
      default: "{{count}} மாதங்கள்",
      in: "{{count}} மாதங்களில்",
      ago: "{{count}} மாதங்களுக்கு முன்பு",
    },
  },

  aboutXYears: {
    one: {
      default: "சுமார் 1 வருடம்",
      in: "சுமார் 1 ஆண்டில்",
      ago: "சுமார் 1 வருடம் முன்பு",
    },
    other: {
      default: "சுமார் {{count}} ஆண்டுகள்",
      in: "சுமார் {{count}} ஆண்டுகளில்",
      ago: "சுமார் {{count}} ஆண்டுகளுக்கு முன்பு",
    },
  },

  xYears: {
    one: {
      default: "1 வருடம்",
      in: "1 ஆண்டில்",
      ago: "1 வருடம் முன்பு",
    },
    other: {
      default: "{{count}} ஆண்டுகள்",
      in: "{{count}} ஆண்டுகளில்",
      ago: "{{count}} ஆண்டுகளுக்கு முன்பு",
    },
  },

  overXYears: {
    one: {
      default: "1 வருடத்திற்கு மேல்",
      in: "1 வருடத்திற்கும் மேலாக",
      ago: "1 வருடம் முன்பு",
    },
    other: {
      default: "{{count}} ஆண்டுகளுக்கும் மேலாக",
      in: "{{count}} ஆண்டுகளில்",
      ago: "{{count}} ஆண்டுகளுக்கு முன்பு",
    },
  },

  almostXYears: {
    one: {
      default: "கிட்டத்தட்ட 1 வருடம்",
      in: "கிட்டத்தட்ட 1 ஆண்டில்",
      ago: "கிட்டத்தட்ட 1 வருடம் முன்பு",
    },
    other: {
      default: "கிட்டத்தட்ட {{count}} ஆண்டுகள்",
      in: "கிட்டத்தட்ட {{count}} ஆண்டுகளில்",
      ago: "கிட்டத்தட்ட {{count}} ஆண்டுகளுக்கு முன்பு",
    },
  },
};

export const formatDistance = (token, count, options) => {
  const tense = options?.addSuffix
    ? options.comparison && options.comparison > 0
      ? "in"
      : "ago"
    : "default";

  const tokenValue = formatDistanceLocale[token];

  if (!isPluralType(tokenValue)) return tokenValue[tense];

  if (count === 1) {
    return tokenValue.one[tense];
  } else {
    return tokenValue.other[tense].replace("{{count}}", String(count));
  }
};
