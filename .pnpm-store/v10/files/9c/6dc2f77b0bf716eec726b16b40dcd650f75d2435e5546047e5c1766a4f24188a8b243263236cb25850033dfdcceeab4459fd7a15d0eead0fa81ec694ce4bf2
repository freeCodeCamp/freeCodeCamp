"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'mindre enn ett sekund',
    other: 'mindre enn {{count}} sekunder'
  },
  xSeconds: {
    one: 'ett sekund',
    other: '{{count}} sekunder'
  },
  halfAMinute: 'et halvt minutt',
  lessThanXMinutes: {
    one: 'mindre enn ett minutt',
    other: 'mindre enn {{count}} minutter'
  },
  xMinutes: {
    one: 'ett minutt',
    other: '{{count}} minutter'
  },
  aboutXHours: {
    one: 'omtrent en time',
    other: 'omtrent {{count}} timer'
  },
  xHours: {
    one: 'en time',
    other: '{{count}} timer'
  },
  xDays: {
    one: 'en dag',
    other: '{{count}} dager'
  },
  aboutXWeeks: {
    one: 'omtrent en uke',
    other: 'omtrent {{count}} uker'
  },
  xWeeks: {
    one: 'en uke',
    other: '{{count}} uker'
  },
  aboutXMonths: {
    one: 'omtrent en måned',
    other: 'omtrent {{count}} måneder'
  },
  xMonths: {
    one: 'en måned',
    other: '{{count}} måneder'
  },
  aboutXYears: {
    one: 'omtrent ett år',
    other: 'omtrent {{count}} år'
  },
  xYears: {
    one: 'ett år',
    other: '{{count}} år'
  },
  overXYears: {
    one: 'over ett år',
    other: 'over {{count}} år'
  },
  almostXYears: {
    one: 'nesten ett år',
    other: 'nesten {{count}} år'
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
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;