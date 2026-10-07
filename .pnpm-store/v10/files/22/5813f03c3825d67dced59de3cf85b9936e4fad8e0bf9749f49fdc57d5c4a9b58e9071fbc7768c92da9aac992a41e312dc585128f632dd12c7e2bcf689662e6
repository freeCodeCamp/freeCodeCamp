"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'أقل من ثانية',
    two: 'أقل من ثانيتين',
    threeToTen: 'أقل من {{count}} ثواني',
    other: 'أقل من {{count}} ثانية'
  },
  xSeconds: {
    one: 'ثانية',
    two: 'ثانيتين',
    threeToTen: '{{count}} ثواني',
    other: '{{count}} ثانية'
  },
  halfAMinute: 'نص دقيقة',
  lessThanXMinutes: {
    one: 'أقل من دقيقة',
    two: 'أقل من دقيقتين',
    threeToTen: 'أقل من {{count}} دقايق',
    other: 'أقل من {{count}} دقيقة'
  },
  xMinutes: {
    one: 'دقيقة',
    two: 'دقيقتين',
    threeToTen: '{{count}} دقايق',
    other: '{{count}} دقيقة'
  },
  aboutXHours: {
    one: 'حوالي ساعة',
    two: 'حوالي ساعتين',
    threeToTen: 'حوالي {{count}} ساعات',
    other: 'حوالي {{count}} ساعة'
  },
  xHours: {
    one: 'ساعة',
    two: 'ساعتين',
    threeToTen: '{{count}} ساعات',
    other: '{{count}} ساعة'
  },
  xDays: {
    one: 'يوم',
    two: 'يومين',
    threeToTen: '{{count}} أيام',
    other: '{{count}} يوم'
  },
  aboutXWeeks: {
    one: 'حوالي أسبوع',
    two: 'حوالي أسبوعين',
    threeToTen: 'حوالي {{count}} أسابيع',
    other: 'حوالي {{count}} أسبوع'
  },
  xWeeks: {
    one: 'أسبوع',
    two: 'أسبوعين',
    threeToTen: '{{count}} أسابيع',
    other: '{{count}} أسبوع'
  },
  aboutXMonths: {
    one: 'حوالي شهر',
    two: 'حوالي شهرين',
    threeToTen: 'حوالي {{count}} أشهر',
    other: 'حوالي {{count}} شهر'
  },
  xMonths: {
    one: 'شهر',
    two: 'شهرين',
    threeToTen: '{{count}} أشهر',
    other: '{{count}} شهر'
  },
  aboutXYears: {
    one: 'حوالي سنة',
    two: 'حوالي سنتين',
    threeToTen: 'حوالي {{count}} سنين',
    other: 'حوالي {{count}} سنة'
  },
  xYears: {
    one: 'عام',
    two: 'عامين',
    threeToTen: '{{count}} أعوام',
    other: '{{count}} عام'
  },
  overXYears: {
    one: 'أكثر من سنة',
    two: 'أكثر من سنتين',
    threeToTen: 'أكثر من {{count}} سنين',
    other: 'أكثر من {{count}} سنة'
  },
  almostXYears: {
    one: 'عام تقريبًا',
    two: 'عامين تقريبًا',
    threeToTen: '{{count}} أعوام تقريبًا',
    other: '{{count}} عام تقريبًا'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2) {
    result = tokenValue.two;
  } else if (count <= 10) {
    result = tokenValue.threeToTen.replace('{{count}}', String(count));
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "\u0641\u064A \u062E\u0644\u0627\u0644 ".concat(result);
    } else {
      return "\u0645\u0646\u0630 ".concat(result);
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;