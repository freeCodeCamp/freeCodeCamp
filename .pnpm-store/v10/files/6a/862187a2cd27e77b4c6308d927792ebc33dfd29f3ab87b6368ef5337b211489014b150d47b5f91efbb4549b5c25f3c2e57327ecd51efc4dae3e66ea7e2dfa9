"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'segundo bat baino gutxiago',
    other: '{{count}} segundo baino gutxiago'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundo'
  },
  halfAMinute: 'minutu erdi',
  lessThanXMinutes: {
    one: 'minutu bat baino gutxiago',
    other: '{{count}} minutu baino gutxiago'
  },
  xMinutes: {
    one: '1 minutu',
    other: '{{count}} minutu'
  },
  aboutXHours: {
    one: '1 ordu gutxi gorabehera',
    other: '{{count}} ordu gutxi gorabehera'
  },
  xHours: {
    one: '1 ordu',
    other: '{{count}} ordu'
  },
  xDays: {
    one: '1 egun',
    other: '{{count}} egun'
  },
  aboutXWeeks: {
    one: 'aste 1 inguru',
    other: '{{count}} aste inguru'
  },
  xWeeks: {
    one: '1 aste',
    other: '{{count}} astean'
  },
  aboutXMonths: {
    one: '1 hilabete gutxi gorabehera',
    other: '{{count}} hilabete gutxi gorabehera'
  },
  xMonths: {
    one: '1 hilabete',
    other: '{{count}} hilabete'
  },
  aboutXYears: {
    one: '1 urte gutxi gorabehera',
    other: '{{count}} urte gutxi gorabehera'
  },
  xYears: {
    one: '1 urte',
    other: '{{count}} urte'
  },
  overXYears: {
    one: '1 urte baino gehiago',
    other: '{{count}} urte baino gehiago'
  },
  almostXYears: {
    one: 'ia 1 urte',
    other: 'ia {{count}} urte'
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
      return 'en ' + result;
    } else {
      return 'duela ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;