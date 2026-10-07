var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'sekunddan kam',
    other: '{{count}} sekunddan kam'
  },
  xSeconds: {
    one: '1 sekund',
    other: '{{count}} sekund'
  },
  halfAMinute: 'yarim minut',
  lessThanXMinutes: {
    one: 'bir minutdan kam',
    other: '{{count}} minutdan kam'
  },
  xMinutes: {
    one: '1 minut',
    other: '{{count}} minut'
  },
  aboutXHours: {
    one: 'tahminan 1 soat',
    other: 'tahminan {{count}} soat'
  },
  xHours: {
    one: '1 soat',
    other: '{{count}} soat'
  },
  xDays: {
    one: '1 kun',
    other: '{{count}} kun'
  },
  aboutXWeeks: {
    one: 'tahminan 1 hafta',
    other: 'tahminan {{count}} hafta'
  },
  xWeeks: {
    one: '1 hafta',
    other: '{{count}} hafta'
  },
  aboutXMonths: {
    one: 'tahminan 1 oy',
    other: 'tahminan {{count}} oy'
  },
  xMonths: {
    one: '1 oy',
    other: '{{count}} oy'
  },
  aboutXYears: {
    one: 'tahminan 1 yil',
    other: 'tahminan {{count}} yil'
  },
  xYears: {
    one: '1 yil',
    other: '{{count}} yil'
  },
  overXYears: {
    one: "1 yildan ko'p",
    other: "{{count}} yildan ko'p"
  },
  almostXYears: {
    one: 'deyarli 1 yil',
    other: 'deyarli {{count}} yil'
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
      return result + ' dan keyin';
    } else {
      return result + ' oldin';
    }
  }
  return result;
};
export default formatDistance;