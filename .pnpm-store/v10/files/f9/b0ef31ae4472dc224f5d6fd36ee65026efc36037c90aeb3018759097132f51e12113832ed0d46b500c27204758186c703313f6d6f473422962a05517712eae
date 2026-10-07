const formatRelativeLocale = {
  lastWeek: "'joan den' eeee, LT",
  yesterday: "'atzo,' p",
  today: "'gaur,' p",
  tomorrow: "'bihar,' p",
  nextWeek: "eeee, p",
  other: "P",
};

const formatRelativeLocalePlural = {
  lastWeek: "'joan den' eeee, p",
  yesterday: "'atzo,' p",
  today: "'gaur,' p",
  tomorrow: "'bihar,' p",
  nextWeek: "eeee, p",
  other: "P",
};

export const formatRelative = (token, date) => {
  if (date.getHours() !== 1) {
    return formatRelativeLocalePlural[token];
  }
  return formatRelativeLocale[token];
};
