const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "dưới 1 giây",
    other: "dưới {{count}} giây",
  },

  xSeconds: {
    one: "1 giây",
    other: "{{count}} giây",
  },

  halfAMinute: "nửa phút",

  lessThanXMinutes: {
    one: "dưới 1 phút",
    other: "dưới {{count}} phút",
  },

  xMinutes: {
    one: "1 phút",
    other: "{{count}} phút",
  },

  aboutXHours: {
    one: "khoảng 1 giờ",
    other: "khoảng {{count}} giờ",
  },

  xHours: {
    one: "1 giờ",
    other: "{{count}} giờ",
  },

  xDays: {
    one: "1 ngày",
    other: "{{count}} ngày",
  },

  aboutXWeeks: {
    one: "khoảng 1 tuần",
    other: "khoảng {{count}} tuần",
  },

  xWeeks: {
    one: "1 tuần",
    other: "{{count}} tuần",
  },

  aboutXMonths: {
    one: "khoảng 1 tháng",
    other: "khoảng {{count}} tháng",
  },

  xMonths: {
    one: "1 tháng",
    other: "{{count}} tháng",
  },

  aboutXYears: {
    one: "khoảng 1 năm",
    other: "khoảng {{count}} năm",
  },

  xYears: {
    one: "1 năm",
    other: "{{count}} năm",
  },

  overXYears: {
    one: "hơn 1 năm",
    other: "hơn {{count}} năm",
  },

  almostXYears: {
    one: "gần 1 năm",
    other: "gần {{count}} năm",
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
      return result + " nữa";
    } else {
      return result + " trước";
    }
  }

  return result;
};
