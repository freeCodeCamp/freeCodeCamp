var formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      standalone: 'manje od 1 sekunde',
      withPrepositionAgo: 'manje od 1 sekunde',
      withPrepositionIn: 'manje od 1 sekundu'
    },
    dual: 'manje od {{count}} sekunde',
    other: 'manje od {{count}} sekundi'
  },
  xSeconds: {
    one: {
      standalone: '1 sekunda',
      withPrepositionAgo: '1 sekunde',
      withPrepositionIn: '1 sekundu'
    },
    dual: '{{count}} sekunde',
    other: '{{count}} sekundi'
  },
  halfAMinute: 'pola minute',
  lessThanXMinutes: {
    one: {
      standalone: 'manje od 1 minute',
      withPrepositionAgo: 'manje od 1 minute',
      withPrepositionIn: 'manje od 1 minutu'
    },
    dual: 'manje od {{count}} minute',
    other: 'manje od {{count}} minuta'
  },
  xMinutes: {
    one: {
      standalone: '1 minuta',
      withPrepositionAgo: '1 minute',
      withPrepositionIn: '1 minutu'
    },
    dual: '{{count}} minute',
    other: '{{count}} minuta'
  },
  aboutXHours: {
    one: {
      standalone: 'oko 1 sat',
      withPrepositionAgo: 'oko 1 sat',
      withPrepositionIn: 'oko 1 sat'
    },
    dual: 'oko {{count}} sata',
    other: 'oko {{count}} sati'
  },
  xHours: {
    one: {
      standalone: '1 sat',
      withPrepositionAgo: '1 sat',
      withPrepositionIn: '1 sat'
    },
    dual: '{{count}} sata',
    other: '{{count}} sati'
  },
  xDays: {
    one: {
      standalone: '1 dan',
      withPrepositionAgo: '1 dan',
      withPrepositionIn: '1 dan'
    },
    dual: '{{count}} dana',
    other: '{{count}} dana'
  },
  aboutXWeeks: {
    one: {
      standalone: 'oko 1 sedmicu',
      withPrepositionAgo: 'oko 1 sedmicu',
      withPrepositionIn: 'oko 1 sedmicu'
    },
    dual: 'oko {{count}} sedmice',
    other: 'oko {{count}} sedmice'
  },
  xWeeks: {
    one: {
      standalone: '1 sedmicu',
      withPrepositionAgo: '1 sedmicu',
      withPrepositionIn: '1 sedmicu'
    },
    dual: '{{count}} sedmice',
    other: '{{count}} sedmice'
  },
  aboutXMonths: {
    one: {
      standalone: 'oko 1 mjesec',
      withPrepositionAgo: 'oko 1 mjesec',
      withPrepositionIn: 'oko 1 mjesec'
    },
    dual: 'oko {{count}} mjeseca',
    other: 'oko {{count}} mjeseci'
  },
  xMonths: {
    one: {
      standalone: '1 mjesec',
      withPrepositionAgo: '1 mjesec',
      withPrepositionIn: '1 mjesec'
    },
    dual: '{{count}} mjeseca',
    other: '{{count}} mjeseci'
  },
  aboutXYears: {
    one: {
      standalone: 'oko 1 godinu',
      withPrepositionAgo: 'oko 1 godinu',
      withPrepositionIn: 'oko 1 godinu'
    },
    dual: 'oko {{count}} godine',
    other: 'oko {{count}} godina'
  },
  xYears: {
    one: {
      standalone: '1 godina',
      withPrepositionAgo: '1 godine',
      withPrepositionIn: '1 godinu'
    },
    dual: '{{count}} godine',
    other: '{{count}} godina'
  },
  overXYears: {
    one: {
      standalone: 'preko 1 godinu',
      withPrepositionAgo: 'preko 1 godinu',
      withPrepositionIn: 'preko 1 godinu'
    },
    dual: 'preko {{count}} godine',
    other: 'preko {{count}} godina'
  },
  almostXYears: {
    one: {
      standalone: 'gotovo 1 godinu',
      withPrepositionAgo: 'gotovo 1 godinu',
      withPrepositionIn: 'gotovo 1 godinu'
    },
    dual: 'gotovo {{count}} godine',
    other: 'gotovo {{count}} godina'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        result = tokenValue.one.withPrepositionIn;
      } else {
        result = tokenValue.one.withPrepositionAgo;
      }
    } else {
      result = tokenValue.one.standalone;
    }
  } else if (count % 10 > 1 && count % 10 < 5 &&
  // if last digit is between 2 and 4
  String(count).substr(-2, 1) !== '1' // unless the 2nd to last digit is "1"
  ) {
    result = tokenValue.dual.replace('{{count}}', String(count));
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'za ' + result;
    } else {
      return 'prije ' + result;
    }
  }
  return result;
};
export default formatDistance;