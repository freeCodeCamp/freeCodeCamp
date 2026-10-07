import { isSameWeek } from "../../../isSameWeek.js";

function checkWeek(date, baseDate, options) {
  const baseFormat = "eeee p";

  if (isSameWeek(date, baseDate, options)) {
    return baseFormat; // in same week
  } else if (date.getTime() > baseDate.getTime()) {
    return "'下个'" + baseFormat; // in next week
  }
  return "'上个'" + baseFormat; // in last week
}

const formatRelativeLocale = {
  lastWeek: checkWeek, // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: checkWeek, // days after tomorrow, maybe in this week or next week
  other: "PP p",
};

export const formatRelative = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date, baseDate, options);
  }

  return format;
};
