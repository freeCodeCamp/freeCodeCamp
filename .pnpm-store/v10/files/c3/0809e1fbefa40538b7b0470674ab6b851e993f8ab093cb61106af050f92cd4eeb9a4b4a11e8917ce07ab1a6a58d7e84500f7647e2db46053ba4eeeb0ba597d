//! moment.js locale configuration
//! locale : Scottish Gaelic [gd]
//! author : Jon Ashdown : https://github.com/jonashdown

import moment from '../moment';

var months = [
        'Am Faoilleach',
        'An Gearran',
        'Am Màrt',
        'An Giblean',
        'An Cèitean',
        'An t-Ògmhios',
        'An t-Iuchar',
        'An Lùnastal',
        'An t-Sultain',
        'An Dàmhair',
        'An t-Samhain',
        'An Dùbhlachd',
    ],
    monthsShort = [
        'Faoi',
        'Gear',
        'Màrt',
        'Gibl',
        'Cèit',
        'Ògmh',
        'Iuch',
        'Lùn',
        'Sult',
        'Dàmh',
        'Samh',
        'Dùbh',
    ],
    weekdays = [
        'Didòmhnaich',
        'Diluain',
        'Dimàirt',
        'Diciadain',
        'Diardaoin',
        'Dihaoine',
        'Disathairne',
    ],
    weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
    weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

export default moment.defineLocale('gd', {
    months: months,
    monthsShort: monthsShort,
    monthsParseExact: true,
    weekdays: weekdays,
    weekdaysShort: weekdaysShort,
    weekdaysMin: weekdaysMin,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm',
    },
    calendar: {
        sameDay: '[An-diugh aig] LT',
        nextDay: '[A-màireach aig] LT',
        nextWeek: 'dddd [aig] LT',
        lastDay: '[An-dè aig] LT',
        lastWeek: 'dddd [seo chaidh] [aig] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: 'ann an %s',
        past: 'bho chionn %s',
        s: 'beagan diogan',
        ss: '%d diogan',
        m: 'mionaid',
        mm: '%d mionaidean',
        h: 'uair',
        hh: '%d uairean',
        d: 'latha',
        dd: '%d latha',
        M: 'mìos',
        MM: '%d mìosan',
        y: 'bliadhna',
        yy: '%d bliadhna',
    },
    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function (number) {
        var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
        return number + output;
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
});
