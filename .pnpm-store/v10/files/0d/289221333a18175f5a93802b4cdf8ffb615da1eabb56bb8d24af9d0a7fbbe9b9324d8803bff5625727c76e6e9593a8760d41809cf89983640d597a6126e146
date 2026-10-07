const formatRelativeLocale = {
  lastWeek: (date) => {
    const day = date.getDay();

    switch (day) {
      case 0:
        return "'прошле недеље у' p";
      case 3:
        return "'прошле среде у' p";
      case 6:
        return "'прошле суботе у' p";
      default:
        return "'прошли' EEEE 'у' p";
    }
  },
  yesterday: "'јуче у' p",
  today: "'данас у' p",
  tomorrow: "'сутра у' p",
  nextWeek: (date) => {
    const day = date.getDay();

    switch (day) {
      case 0:
        return "'следеће недеље у' p";
      case 3:
        return "'следећу среду у' p";
      case 6:
        return "'следећу суботу у' p";
      default:
        return "'следећи' EEEE 'у' p";
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
