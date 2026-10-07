"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'më pak se një sekondë',
    other: 'më pak se {{count}} sekonda'
  },
  xSeconds: {
    one: '1 sekondë',
    other: '{{count}} sekonda'
  },
  halfAMinute: 'gjysëm minuti',
  lessThanXMinutes: {
    one: 'më pak se një minute',
    other: 'më pak se {{count}} minuta'
  },
  xMinutes: {
    one: '1 minutë',
    other: '{{count}} minuta'
  },
  aboutXHours: {
    one: 'rreth 1 orë',
    other: 'rreth {{count}} orë'
  },
  xHours: {
    one: '1 orë',
    other: '{{count}} orë'
  },
  xDays: {
    one: '1 ditë',
    other: '{{count}} ditë'
  },
  aboutXWeeks: {
    one: 'rreth 1 javë',
    other: 'rreth {{count}} javë'
  },
  xWeeks: {
    one: '1 javë',
    other: '{{count}} javë'
  },
  aboutXMonths: {
    one: 'rreth 1 muaj',
    other: 'rreth {{count}} muaj'
  },
  xMonths: {
    one: '1 muaj',
    other: '{{count}} muaj'
  },
  aboutXYears: {
    one: 'rreth 1 vit',
    other: 'rreth {{count}} vite'
  },
  xYears: {
    one: '1 vit',
    other: '{{count}} vite'
  },
  overXYears: {
    one: 'mbi 1 vit',
    other: 'mbi {{count}} vite'
  },
  almostXYears: {
    one: 'pothuajse 1 vit',
    other: 'pothuajse {{count}} vite'
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
      return 'në ' + result;
    } else {
      return result + ' më parë';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;