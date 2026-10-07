const formatRelativeLocale = {
  lastWeek: "'el' eeee 'passat a la' LT",
  yesterday: "'ahir a la' p",
  today: "'avui a la' p",
  tomorrow: "'demà a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P",
};

const formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'passat a les' p",
  yesterday: "'ahir a les' p",
  today: "'avui a les' p",
  tomorrow: "'demà a les' p",
  nextWeek: "eeee 'a les' p",
  other: "P",
};

export const formatRelative = (token, date, _baseDate, _options) => {
  if (date.getHours() !== 1) {
    return formatRelativeLocalePlural[token];
  }
  return formatRelativeLocale[token];
};
