// English (Australia) [en-au]
import dayjs from '../index';
var locale = {
  name: 'en-au',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A'
  },
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  },
  ordinal: function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};
dayjs.locale(locale, null, true);
export default locale;