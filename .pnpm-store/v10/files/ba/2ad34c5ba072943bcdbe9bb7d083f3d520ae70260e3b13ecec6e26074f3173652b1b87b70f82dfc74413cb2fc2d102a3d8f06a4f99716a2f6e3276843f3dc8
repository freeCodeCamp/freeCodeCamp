var formatRelativeLocale = {
  lastWeek: "'joan den' eeee, LT",
  yesterday: "'atzo,' p",
  today: "'gaur,' p",
  tomorrow: "'bihar,' p",
  nextWeek: 'eeee, p',
  other: 'P'
};
var formatRelativeLocalePlural = {
  lastWeek: "'joan den' eeee, p",
  yesterday: "'atzo,' p",
  today: "'gaur,' p",
  tomorrow: "'bihar,' p",
  nextWeek: 'eeee, p',
  other: 'P'
};
var formatRelative = function formatRelative(token, date) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token];
  }
  return formatRelativeLocale[token];
};
export default formatRelative;