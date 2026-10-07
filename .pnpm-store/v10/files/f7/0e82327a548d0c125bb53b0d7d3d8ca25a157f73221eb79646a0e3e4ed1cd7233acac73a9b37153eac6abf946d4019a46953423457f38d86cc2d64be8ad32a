const formatRelativeLocale = {
  lastWeek: (date) => {
    const weekday = date.getDay();
    const last = weekday === 0 || weekday === 6 ? "último" : "última";
    return "'" + last + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P",
};

export const formatRelative = (token, date, _baseDate, _options) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date);
  }

  return format;
};
