"use strict";
exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: "តិចជាង {{count}} វិនាទី",
  xSeconds: "{{count}} វិនាទី",
  halfAMinute: "កន្លះនាទី",
  lessThanXMinutes: "តិចជាង {{count}} នាទី",
  xMinutes: "{{count}} នាទី",
  aboutXHours: "ប្រហែល {{count}} ម៉ោង",
  xHours: "{{count}} ម៉ោង",
  xDays: "{{count}} ថ្ងៃ",
  aboutXWeeks: "ប្រហែល {{count}} សប្តាហ៍",
  xWeeks: "{{count}} សប្តាហ៍",
  aboutXMonths: "ប្រហែល {{count}} ខែ",
  xMonths: "{{count}} ខែ",
  aboutXYears: "ប្រហែល {{count}} ឆ្នាំ",
  xYears: "{{count}} ឆ្នាំ",
  overXYears: "ជាង {{count}} ឆ្នាំ",
  almostXYears: "ជិត {{count}} ឆ្នាំ",
};

const formatDistance = (token, count, options) => {
  const tokenValue = formatDistanceLocale[token];

  let result = tokenValue;

  if (typeof count === "number") {
    result = result.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "ក្នុងរយៈពេល " + result;
    } else {
      return result + "មុន";
    }
  }

  return result;
};
exports.formatDistance = formatDistance;
