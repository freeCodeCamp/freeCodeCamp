var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'mindre end ét sekund',
    other: 'mindre end {{count}} sekunder'
  },
  xSeconds: {
    one: '1 sekund',
    other: '{{count}} sekunder'
  },
  halfAMinute: 'ét halvt minut',
  lessThanXMinutes: {
    one: 'mindre end ét minut',
    other: 'mindre end {{count}} minutter'
  },
  xMinutes: {
    one: '1 minut',
    other: '{{count}} minutter'
  },
  aboutXHours: {
    one: 'cirka 1 time',
    other: 'cirka {{count}} timer'
  },
  xHours: {
    one: '1 time',
    other: '{{count}} timer'
  },
  xDays: {
    one: '1 dag',
    other: '{{count}} dage'
  },
  aboutXWeeks: {
    one: 'cirka 1 uge',
    other: 'cirka {{count}} uger'
  },
  xWeeks: {
    one: '1 uge',
    other: '{{count}} uger'
  },
  aboutXMonths: {
    one: 'cirka 1 måned',
    other: 'cirka {{count}} måneder'
  },
  xMonths: {
    one: '1 måned',
    other: '{{count}} måneder'
  },
  aboutXYears: {
    one: 'cirka 1 år',
    other: 'cirka {{count}} år'
  },
  xYears: {
    one: '1 år',
    other: '{{count}} år'
  },
  overXYears: {
    one: 'over 1 år',
    other: 'over {{count}} år'
  },
  almostXYears: {
    one: 'næsten 1 år',
    other: 'næsten {{count}} år'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'om ' + result;
    } else {
      return result + ' siden';
    }
  }
  return result;
};
export default formatDistance;