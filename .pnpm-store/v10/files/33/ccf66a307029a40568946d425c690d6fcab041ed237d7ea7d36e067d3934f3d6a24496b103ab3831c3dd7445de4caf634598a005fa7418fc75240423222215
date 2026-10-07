// Arabic [ar]
import dayjs from '../index';
var months = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_');
var symbolMap = {
  1: '١',
  2: '٢',
  3: '٣',
  4: '٤',
  5: '٥',
  6: '٦',
  7: '٧',
  8: '٨',
  9: '٩',
  0: '٠'
};
var numberMap = {
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '٠': '0'
};
var fromArabNumeralsRegex = /[١٢٣٤٥٦٧٨٩٠]/g;
var fromArabComaRegex = /،/g;
var toArabNumeralsRegex = /\d/g;
var toArabComaRegex = /,/g;
var locale = {
  name: 'ar',
  weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
  weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
  months: months,
  monthsShort: months,
  weekStart: 6,
  meridiem: function meridiem(hour) {
    return hour > 12 ? 'م' : 'ص';
  },
  relativeTime: {
    future: 'بعد %s',
    past: 'منذ %s',
    s: 'ثانية واحدة',
    m: 'دقيقة واحدة',
    mm: '%d دقائق',
    h: 'ساعة واحدة',
    hh: '%d ساعات',
    d: 'يوم واحد',
    dd: '%d أيام',
    M: 'شهر واحد',
    MM: '%d أشهر',
    y: 'عام واحد',
    yy: '%d أعوام'
  },
  preparse: function preparse(string) {
    return string.replace(fromArabNumeralsRegex, function (match) {
      return numberMap[match];
    }).replace(fromArabComaRegex, ',');
  },
  postformat: function postformat(string) {
    return string.replace(toArabNumeralsRegex, function (match) {
      return symbolMap[match];
    }).replace(toArabComaRegex, '،');
  },
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'D/‏M/‏YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  }
};
dayjs.locale(locale, null, true);
export default locale;