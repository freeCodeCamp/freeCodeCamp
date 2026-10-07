// Kurdish [ku]
import dayjs from '../index';
export var englishToArabicNumbersMap = {
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
var arabicToEnglishNumbersMap = {
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
var months = ['کانوونی دووەم', 'شوبات', 'ئادار', 'نیسان', 'ئایار', 'حوزەیران', 'تەممووز', 'ئاب', 'ئەیلوول', 'تشرینی یەکەم', 'تشرینی دووەم', 'کانوونی یەکەم'];
var locale = {
  name: 'ku',
  months: months,
  monthsShort: months,
  weekdays: 'یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە'.split('_'),
  weekdaysShort: 'یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە'.split('_'),
  weekStart: 6,
  weekdaysMin: 'ی_د_س_چ_پ_هـ_ش'.split('_'),
  preparse: function preparse(string) {
    return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
      return arabicToEnglishNumbersMap[match];
    }).replace(/،/g, ',');
  },
  postformat: function postformat(string) {
    return string.replace(/\d/g, function (match) {
      return englishToArabicNumbersMap[match];
    }).replace(/,/g, '،');
  },
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  meridiem: function meridiem(hour) {
    return hour < 12 ? 'پ.ن' : 'د.ن';
  },
  relativeTime: {
    future: 'لە %s',
    past: 'لەمەوپێش %s',
    s: 'چەند چرکەیەک',
    m: 'یەک خولەک',
    mm: '%d خولەک',
    h: 'یەک کاتژمێر',
    hh: '%d کاتژمێر',
    d: 'یەک ڕۆژ',
    dd: '%d ڕۆژ',
    M: 'یەک مانگ',
    MM: '%d مانگ',
    y: 'یەک ساڵ',
    yy: '%d ساڵ'
  }
};
dayjs.locale(locale, null, true);
export default locale;