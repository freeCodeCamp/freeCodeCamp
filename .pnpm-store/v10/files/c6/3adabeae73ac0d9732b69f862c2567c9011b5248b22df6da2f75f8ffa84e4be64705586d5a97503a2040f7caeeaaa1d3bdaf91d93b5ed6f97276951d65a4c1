const formatRelativeLocale = {
  lastWeek: (date) => {
    const day = date.getDay();
    let result = "'läschte";
    if (day === 2 || day === 4) {
      // Eifeler Regel: Add an n before the consonant d; Here "Dënschdeg" "and Donneschde".
      result += "n";
    }
    result += "' eeee 'um' p";
    return result;
  },
  yesterday: "'gëschter um' p",
  today: "'haut um' p",
  tomorrow: "'moien um' p",
  nextWeek: "eeee 'um' p",
  other: "P",
};

export const formatRelative = (token, date, _baseDate, _options) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date);
  }

  return format;
};
