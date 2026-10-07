const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "meno di un secondo",
    other: "meno di {{count}} secondi",
  },

  xSeconds: {
    one: "un secondo",
    other: "{{count}} secondi",
  },

  halfAMinute: "alcuni secondi",

  lessThanXMinutes: {
    one: "meno di un minuto",
    other: "meno di {{count}} minuti",
  },

  xMinutes: {
    one: "un minuto",
    other: "{{count}} minuti",
  },

  aboutXHours: {
    one: "circa un'ora",
    other: "circa {{count}} ore",
  },

  xHours: {
    one: "un'ora",
    other: "{{count}} ore",
  },

  xDays: {
    one: "un giorno",
    other: "{{count}} giorni",
  },

  aboutXWeeks: {
    one: "circa una settimana",
    other: "circa {{count}} settimane",
  },

  xWeeks: {
    one: "una settimana",
    other: "{{count}} settimane",
  },

  aboutXMonths: {
    one: "circa un mese",
    other: "circa {{count}} mesi",
  },

  xMonths: {
    one: "un mese",
    other: "{{count}} mesi",
  },

  aboutXYears: {
    one: "circa un anno",
    other: "circa {{count}} anni",
  },

  xYears: {
    one: "un anno",
    other: "{{count}} anni",
  },

  overXYears: {
    one: "più di un anno",
    other: "più di {{count}} anni",
  },

  almostXYears: {
    one: "quasi un anno",
    other: "quasi {{count}} anni",
  },
};

export const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "tra " + result;
    } else {
      return result + " fa";
    }
  }

  return result;
};
