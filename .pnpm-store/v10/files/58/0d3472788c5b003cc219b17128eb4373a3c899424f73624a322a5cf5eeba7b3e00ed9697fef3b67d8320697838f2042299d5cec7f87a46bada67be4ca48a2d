"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'помалку од секунда',
    other: 'помалку од {{count}} секунди'
  },
  xSeconds: {
    one: '1 секунда',
    other: '{{count}} секунди'
  },
  halfAMinute: 'половина минута',
  lessThanXMinutes: {
    one: 'помалку од минута',
    other: 'помалку од {{count}} минути'
  },
  xMinutes: {
    one: '1 минута',
    other: '{{count}} минути'
  },
  aboutXHours: {
    one: 'околу 1 час',
    other: 'околу {{count}} часа'
  },
  xHours: {
    one: '1 час',
    other: '{{count}} часа'
  },
  xDays: {
    one: '1 ден',
    other: '{{count}} дена'
  },
  aboutXWeeks: {
    one: 'околу 1 недела',
    other: 'околу {{count}} месеци'
  },
  xWeeks: {
    one: '1 недела',
    other: '{{count}} недели'
  },
  aboutXMonths: {
    one: 'околу 1 месец',
    other: 'околу {{count}} недели'
  },
  xMonths: {
    one: '1 месец',
    other: '{{count}} месеци'
  },
  aboutXYears: {
    one: 'околу 1 година',
    other: 'околу {{count}} години'
  },
  xYears: {
    one: '1 година',
    other: '{{count}} години'
  },
  overXYears: {
    one: 'повеќе од 1 година',
    other: 'повеќе од {{count}} години'
  },
  almostXYears: {
    one: 'безмалку 1 година',
    other: 'безмалку {{count}} години'
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
      return 'за ' + result;
    } else {
      return 'пред ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;