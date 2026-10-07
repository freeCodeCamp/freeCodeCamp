// Arabic (Lybia) [ar-ly]
import dayjs from '../index';
var locale = {
  name: 'ar-ly',
  weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  weekStart: 6,
  weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
  monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
  ordinal: function ordinal(n) {
    return n;
  },
  meridiem: function meridiem(hour) {
    return hour > 12 ? 'م' : 'ص';
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