var formatRelativeLocale = {
  lastWeek: "'el' eeee 'passat a la' LT",
  yesterday: "'ahir a la' p",
  today: "'avui a la' p",
  tomorrow: "'demà a la' p",
  nextWeek: "eeee 'a la' p",
  other: 'P'
};
var formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'passat a les' p",
  yesterday: "'ahir a les' p",
  today: "'avui a les' p",
  tomorrow: "'demà a les' p",
  nextWeek: "eeee 'a les' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token];
  }
  return formatRelativeLocale[token];
};
export default formatRelative;