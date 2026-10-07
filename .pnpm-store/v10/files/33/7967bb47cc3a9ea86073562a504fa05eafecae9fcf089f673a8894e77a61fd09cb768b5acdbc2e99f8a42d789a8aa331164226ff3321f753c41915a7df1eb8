var formatDistanceLocale = {
  lessThanXSeconds: {
    standalone: {
      one: 'vähem kui üks sekund',
      other: 'vähem kui {{count}} sekundit'
    },
    withPreposition: {
      one: 'vähem kui ühe sekundi',
      other: 'vähem kui {{count}} sekundi'
    }
  },
  xSeconds: {
    standalone: {
      one: 'üks sekund',
      other: '{{count}} sekundit'
    },
    withPreposition: {
      one: 'ühe sekundi',
      other: '{{count}} sekundi'
    }
  },
  halfAMinute: {
    standalone: 'pool minutit',
    withPreposition: 'poole minuti'
  },
  lessThanXMinutes: {
    standalone: {
      one: 'vähem kui üks minut',
      other: 'vähem kui {{count}} minutit'
    },
    withPreposition: {
      one: 'vähem kui ühe minuti',
      other: 'vähem kui {{count}} minuti'
    }
  },
  xMinutes: {
    standalone: {
      one: 'üks minut',
      other: '{{count}} minutit'
    },
    withPreposition: {
      one: 'ühe minuti',
      other: '{{count}} minuti'
    }
  },
  aboutXHours: {
    standalone: {
      one: 'umbes üks tund',
      other: 'umbes {{count}} tundi'
    },
    withPreposition: {
      one: 'umbes ühe tunni',
      other: 'umbes {{count}} tunni'
    }
  },
  xHours: {
    standalone: {
      one: 'üks tund',
      other: '{{count}} tundi'
    },
    withPreposition: {
      one: 'ühe tunni',
      other: '{{count}} tunni'
    }
  },
  xDays: {
    standalone: {
      one: 'üks päev',
      other: '{{count}} päeva'
    },
    withPreposition: {
      one: 'ühe päeva',
      other: '{{count}} päeva'
    }
  },
  aboutXWeeks: {
    standalone: {
      one: 'umbes üks nädal',
      other: 'umbes {{count}} nädalat'
    },
    withPreposition: {
      one: 'umbes ühe nädala',
      other: 'umbes {{count}} nädala'
    }
  },
  xWeeks: {
    standalone: {
      one: 'üks nädal',
      other: '{{count}} nädalat'
    },
    withPreposition: {
      one: 'ühe nädala',
      other: '{{count}} nädala'
    }
  },
  aboutXMonths: {
    standalone: {
      one: 'umbes üks kuu',
      other: 'umbes {{count}} kuud'
    },
    withPreposition: {
      one: 'umbes ühe kuu',
      other: 'umbes {{count}} kuu'
    }
  },
  xMonths: {
    standalone: {
      one: 'üks kuu',
      other: '{{count}} kuud'
    },
    withPreposition: {
      one: 'ühe kuu',
      other: '{{count}} kuu'
    }
  },
  aboutXYears: {
    standalone: {
      one: 'umbes üks aasta',
      other: 'umbes {{count}} aastat'
    },
    withPreposition: {
      one: 'umbes ühe aasta',
      other: 'umbes {{count}} aasta'
    }
  },
  xYears: {
    standalone: {
      one: 'üks aasta',
      other: '{{count}} aastat'
    },
    withPreposition: {
      one: 'ühe aasta',
      other: '{{count}} aasta'
    }
  },
  overXYears: {
    standalone: {
      one: 'rohkem kui üks aasta',
      other: 'rohkem kui {{count}} aastat'
    },
    withPreposition: {
      one: 'rohkem kui ühe aasta',
      other: 'rohkem kui {{count}} aasta'
    }
  },
  almostXYears: {
    standalone: {
      one: 'peaaegu üks aasta',
      other: 'peaaegu {{count}} aastat'
    },
    withPreposition: {
      one: 'peaaegu ühe aasta',
      other: 'peaaegu {{count}} aasta'
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var usageGroup = options !== null && options !== void 0 && options.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
  var result;
  if (typeof usageGroup === 'string') {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else {
    result = usageGroup.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + ' pärast';
    } else {
      return result + ' eest';
    }
  }
  return result;
};
export default formatDistance;