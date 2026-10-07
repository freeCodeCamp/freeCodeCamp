const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "น้อยกว่า 1 วินาที",
    other: "น้อยกว่า {{count}} วินาที",
  },

  xSeconds: {
    one: "1 วินาที",
    other: "{{count}} วินาที",
  },

  halfAMinute: "ครึ่งนาที",

  lessThanXMinutes: {
    one: "น้อยกว่า 1 นาที",
    other: "น้อยกว่า {{count}} นาที",
  },

  xMinutes: {
    one: "1 นาที",
    other: "{{count}} นาที",
  },

  aboutXHours: {
    one: "ประมาณ 1 ชั่วโมง",
    other: "ประมาณ {{count}} ชั่วโมง",
  },

  xHours: {
    one: "1 ชั่วโมง",
    other: "{{count}} ชั่วโมง",
  },

  xDays: {
    one: "1 วัน",
    other: "{{count}} วัน",
  },

  aboutXWeeks: {
    one: "ประมาณ 1 สัปดาห์",
    other: "ประมาณ {{count}} สัปดาห์",
  },

  xWeeks: {
    one: "1 สัปดาห์",
    other: "{{count}} สัปดาห์",
  },

  aboutXMonths: {
    one: "ประมาณ 1 เดือน",
    other: "ประมาณ {{count}} เดือน",
  },

  xMonths: {
    one: "1 เดือน",
    other: "{{count}} เดือน",
  },

  aboutXYears: {
    one: "ประมาณ 1 ปี",
    other: "ประมาณ {{count}} ปี",
  },

  xYears: {
    one: "1 ปี",
    other: "{{count}} ปี",
  },

  overXYears: {
    one: "มากกว่า 1 ปี",
    other: "มากกว่า {{count}} ปี",
  },

  almostXYears: {
    one: "เกือบ 1 ปี",
    other: "เกือบ {{count}} ปี",
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
      if (token === "halfAMinute") {
        return "ใน" + result;
      } else {
        return "ใน " + result;
      }
    } else {
      return result + "ที่ผ่านมา";
    }
  }

  return result;
};
