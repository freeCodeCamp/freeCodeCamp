var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'أقل من ثانية',
    two: 'أقل من ثانيتين',
    threeToTen: 'أقل من {{count}} ثواني',
    other: 'أقل من {{count}} ثانية'
  },
  xSeconds: {
    one: 'ثانية واحدة',
    two: 'ثانيتان',
    threeToTen: '{{count}} ثواني',
    other: '{{count}} ثانية'
  },
  halfAMinute: 'نصف دقيقة',
  lessThanXMinutes: {
    one: 'أقل من دقيقة',
    two: 'أقل من دقيقتين',
    threeToTen: 'أقل من {{count}} دقائق',
    other: 'أقل من {{count}} دقيقة'
  },
  xMinutes: {
    one: 'دقيقة واحدة',
    two: 'دقيقتان',
    threeToTen: '{{count}} دقائق',
    other: '{{count}} دقيقة'
  },
  aboutXHours: {
    one: 'ساعة واحدة تقريباً',
    two: 'ساعتين تقريبا',
    threeToTen: '{{count}} ساعات تقريباً',
    other: '{{count}} ساعة تقريباً'
  },
  xHours: {
    one: 'ساعة واحدة',
    two: 'ساعتان',
    threeToTen: '{{count}} ساعات',
    other: '{{count}} ساعة'
  },
  xDays: {
    one: 'يوم واحد',
    two: 'يومان',
    threeToTen: '{{count}} أيام',
    other: '{{count}} يوم'
  },
  aboutXWeeks: {
    one: 'أسبوع واحد تقريبا',
    two: 'أسبوعين تقريبا',
    threeToTen: '{{count}} أسابيع تقريبا',
    other: '{{count}} أسبوعا تقريبا'
  },
  xWeeks: {
    one: 'أسبوع واحد',
    two: 'أسبوعان',
    threeToTen: '{{count}} أسابيع',
    other: '{{count}} أسبوعا'
  },
  aboutXMonths: {
    one: 'شهر واحد تقريباً',
    two: 'شهرين تقريبا',
    threeToTen: '{{count}} أشهر تقريبا',
    other: '{{count}} شهرا تقريباً'
  },
  xMonths: {
    one: 'شهر واحد',
    two: 'شهران',
    threeToTen: '{{count}} أشهر',
    other: '{{count}} شهرا'
  },
  aboutXYears: {
    one: 'سنة واحدة تقريباً',
    two: 'سنتين تقريبا',
    threeToTen: '{{count}} سنوات تقريباً',
    other: '{{count}} سنة تقريباً'
  },
  xYears: {
    one: 'سنة واحد',
    two: 'سنتان',
    threeToTen: '{{count}} سنوات',
    other: '{{count}} سنة'
  },
  overXYears: {
    one: 'أكثر من سنة',
    two: 'أكثر من سنتين',
    threeToTen: 'أكثر من {{count}} سنوات',
    other: 'أكثر من {{count}} سنة'
  },
  almostXYears: {
    one: 'ما يقارب سنة واحدة',
    two: 'ما يقارب سنتين',
    threeToTen: 'ما يقارب {{count}} سنوات',
    other: 'ما يقارب {{count}} سنة'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var usageGroup = formatDistanceLocale[token];
  var result;
  if (typeof usageGroup === 'string') {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else if (count === 2) {
    result = usageGroup.two;
  } else if (count <= 10) {
    result = usageGroup.threeToTen.replace('{{count}}', String(count));
  } else {
    result = usageGroup.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'خلال ' + result;
    } else {
      return 'منذ ' + result;
    }
  }
  return result;
};
export default formatDistance;