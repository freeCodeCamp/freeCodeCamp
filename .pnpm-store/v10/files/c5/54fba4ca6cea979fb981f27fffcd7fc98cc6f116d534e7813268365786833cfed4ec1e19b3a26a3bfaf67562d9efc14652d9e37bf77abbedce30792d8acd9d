// Belarusian [be]
import dayjs from '../index';
var monthFormat = 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_');
var monthStandalone = 'студзень_лютый_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_');
var monthShortFormat = 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж.'.split('_');
var monthShortStandalone = 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_');
var MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

function plural(word, num) {
  var forms = word.split('_');
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]; // eslint-disable-line
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
  var format = {
    ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
    mm: withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
    hh: withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
    dd: 'дзень_дні_дзён',
    MM: 'месяц_месяцы_месяцаў',
    yy: 'год_гады_гадоў'
  };

  if (key === 'm') {
    return withoutSuffix ? 'хвіліна' : 'хвіліну';
  } else if (key === 'h') {
    return withoutSuffix ? 'гадзіна' : 'гадзіну';
  }

  return number + " " + plural(format[key], +number);
}

var months = function months(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }

  return monthStandalone[dayjsInstance.month()];
};

months.s = monthStandalone;
months.f = monthFormat;

var monthsShort = function monthsShort(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthShortFormat[dayjsInstance.month()];
  }

  return monthShortStandalone[dayjsInstance.month()];
};

monthsShort.s = monthShortStandalone;
monthsShort.f = monthShortFormat;
var locale = {
  name: 'be',
  weekdays: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
  weekdaysShort: 'няд_пнд_аўт_сер_чцв_пят_суб'.split('_'),
  weekdaysMin: 'нд_пн_аў_ср_чц_пт_сб'.split('_'),
  months: months,
  monthsShort: monthsShort,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY г.',
    LLL: 'D MMMM YYYY г., HH:mm',
    LLLL: 'dddd, D MMMM YYYY г., HH:mm'
  },
  relativeTime: {
    future: 'праз %s',
    past: '%s таму',
    s: 'некалькі секунд',
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: relativeTimeWithPlural,
    hh: relativeTimeWithPlural,
    d: 'дзень',
    dd: relativeTimeWithPlural,
    M: 'месяц',
    MM: relativeTimeWithPlural,
    y: 'год',
    yy: relativeTimeWithPlural
  },
  ordinal: function ordinal(n) {
    return n;
  },
  meridiem: function meridiem(hour) {
    if (hour < 4) {
      return 'ночы';
    } else if (hour < 12) {
      return 'раніцы';
    } else if (hour < 17) {
      return 'дня';
    }

    return 'вечара';
  }
};
dayjs.locale(locale, null, true);
export default locale;