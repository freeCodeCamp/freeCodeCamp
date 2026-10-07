"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'malpli ol sekundo',
    other: 'malpli ol {{count}} sekundoj'
  },
  xSeconds: {
    one: '1 sekundo',
    other: '{{count}} sekundoj'
  },
  halfAMinute: 'duonminuto',
  lessThanXMinutes: {
    one: 'malpli ol minuto',
    other: 'malpli ol {{count}} minutoj'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutoj'
  },
  aboutXHours: {
    one: 'proksimume 1 horo',
    other: 'proksimume {{count}} horoj'
  },
  xHours: {
    one: '1 horo',
    other: '{{count}} horoj'
  },
  xDays: {
    one: '1 tago',
    other: '{{count}} tagoj'
  },
  aboutXMonths: {
    one: 'proksimume 1 monato',
    other: 'proksimume {{count}} monatoj'
  },
  xWeeks: {
    one: '1 semajno',
    other: '{{count}} semajnoj'
  },
  aboutXWeeks: {
    one: 'proksimume 1 semajno',
    other: 'proksimume {{count}} semajnoj'
  },
  xMonths: {
    one: '1 monato',
    other: '{{count}} monatoj'
  },
  aboutXYears: {
    one: 'proksimume 1 jaro',
    other: 'proksimume {{count}} jaroj'
  },
  xYears: {
    one: '1 jaro',
    other: '{{count}} jaroj'
  },
  overXYears: {
    one: 'pli ol 1 jaro',
    other: 'pli ol {{count}} jaroj'
  },
  almostXYears: {
    one: 'preskaŭ 1 jaro',
    other: 'preskaŭ {{count}} jaroj'
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
    if (options !== null && options !== void 0 && options.comparison && options.comparison > 0) {
      return 'post ' + result;
    } else {
      return 'antaŭ ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;