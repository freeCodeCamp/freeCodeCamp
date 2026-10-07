const formatRelativeLocale = {
  lastWeek: (date) => {
    const day = date.getDay();

    switch (day) {
      case 0:
        return "'prejšnjo nedeljo ob' p";
      case 3:
        return "'prejšnjo sredo ob' p";
      case 6:
        return "'prejšnjo soboto ob' p";
      default:
        return "'prejšnji' EEEE 'ob' p";
    }
  },
  yesterday: "'včeraj ob' p",
  today: "'danes ob' p",
  tomorrow: "'jutri ob' p",
  nextWeek: (date) => {
    const day = date.getDay();

    switch (day) {
      case 0:
        return "'naslednjo nedeljo ob' p";
      case 3:
        return "'naslednjo sredo ob' p";
      case 6:
        return "'naslednjo soboto ob' p";
      default:
        return "'naslednji' EEEE 'ob' p";
    }
  },
  other: "P",
};

export const formatRelative = (token, date, _baseDate, _options) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date);
  }

  return format;
};
