// Arabic (Algeria) [ar-dz]
import dayjs from '../index';
var locale = {
  name: 'ar-dz',
  weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
  monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  meridiem: function meridiem(hour) {
    return hour > 12 ? 'م' : 'ص';
  },
  relativeTime: {
    future: 'في %s',
    past: 'منذ %s',
    s: 'ثوان',
    m: 'دقيقة',
    mm: '%d دقائق',
    h: 'ساعة',
    hh: '%d ساعات',
    d: 'يوم',
    dd: '%d أيام',
    M: 'شهر',
    MM: '%d أشهر',
    y: 'سنة',
    yy: '%d سنوات'
  }
};
dayjs.locale(locale, null, true);
export default locale;