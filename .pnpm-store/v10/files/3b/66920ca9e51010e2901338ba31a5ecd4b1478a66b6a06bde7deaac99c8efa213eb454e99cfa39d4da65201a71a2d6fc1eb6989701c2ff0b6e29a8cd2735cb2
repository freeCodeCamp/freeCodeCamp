var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'nas lugha na diog',
    other: 'nas lugha na {{count}} diogan'
  },
  xSeconds: {
    one: '1 diog',
    two: '2 dhiog',
    twenty: '20 diog',
    other: '{{count}} diogan'
  },
  halfAMinute: 'leth mhionaid',
  lessThanXMinutes: {
    one: 'nas lugha na mionaid',
    other: 'nas lugha na {{count}} mionaidean'
  },
  xMinutes: {
    one: '1 mionaid',
    two: '2 mhionaid',
    twenty: '20 mionaid',
    other: '{{count}} mionaidean'
  },
  aboutXHours: {
    one: 'mu uair de thìde',
    other: 'mu {{count}} uairean de thìde'
  },
  xHours: {
    one: '1 uair de thìde',
    two: '2 uair de thìde',
    twenty: '20 uair de thìde',
    other: '{{count}} uairean de thìde'
  },
  xDays: {
    one: '1 là',
    other: '{{count}} là'
  },
  aboutXWeeks: {
    one: 'mu 1 seachdain',
    other: 'mu {{count}} seachdainean'
  },
  xWeeks: {
    one: '1 seachdain',
    other: '{{count}} seachdainean'
  },
  aboutXMonths: {
    one: 'mu mhìos',
    other: 'mu {{count}} mìosan'
  },
  xMonths: {
    one: '1 mìos',
    other: '{{count}} mìosan'
  },
  aboutXYears: {
    one: 'mu bhliadhna',
    other: 'mu {{count}} bliadhnaichean'
  },
  xYears: {
    one: '1 bhliadhna',
    other: '{{count}} bliadhna'
  },
  overXYears: {
    one: 'còrr is bliadhna',
    other: 'còrr is {{count}} bliadhnaichean'
  },
  almostXYears: {
    one: 'cha mhòr bliadhna',
    other: 'cha mhòr {{count}} bliadhnaichean'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2 && !!tokenValue.two) {
    result = tokenValue.two;
  } else if (count === 20 && !!tokenValue.twenty) {
    result = tokenValue.twenty;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'ann an ' + result;
    } else {
      return 'o chionn ' + result;
    }
  }
  return result;
};
export default formatDistance;