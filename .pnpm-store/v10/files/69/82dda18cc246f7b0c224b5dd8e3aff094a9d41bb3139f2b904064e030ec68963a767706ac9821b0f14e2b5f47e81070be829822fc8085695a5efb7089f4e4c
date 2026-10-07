//! moment.js locale configuration
//! locale : Konkani Latin script [gom-latn]
//! author : The Discoverer : https://github.com/WikiDiscoverer

import moment from '../moment';

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        s: ['thoddea sekondamni', 'thodde sekond'],
        ss: [number + ' sekondamni', number + ' sekond'],
        m: ['eka mintan', 'ek minut'],
        mm: [number + ' mintamni', number + ' mintam'],
        h: ['eka voran', 'ek vor'],
        hh: [number + ' voramni', number + ' voram'],
        d: ['eka disan', 'ek dis'],
        dd: [number + ' disamni', number + ' dis'],
        M: ['eka mhoinean', 'ek mhoino'],
        MM: [number + ' mhoineamni', number + ' mhoine'],
        y: ['eka vorsan', 'ek voros'],
        yy: [number + ' vorsamni', number + ' vorsam'],
    };
    return isFuture ? format[key][0] : format[key][1];
}

export default moment.defineLocale('gom-latn', {
    months: {
        standalone:
            'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split(
                '_'
            ),
        format: 'Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea'.split(
            '_'
        ),
        isFormat: /MMMM(\s)+D[oD]?/,
    },
    monthsShort:
        'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split('_'),
    weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
    weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'A h:mm [vazta]',
        LTS: 'A h:mm:ss [vazta]',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY A h:mm [vazta]',
        LLLL: 'dddd, MMMM Do, YYYY, A h:mm [vazta]',
        llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
    },
    calendar: {
        sameDay: '[Aiz] LT',
        nextDay: '[Faleam] LT',
        nextWeek: '[Fuddlo] dddd[,] LT',
        lastDay: '[Kal] LT',
        lastWeek: '[Fattlo] dddd[,] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: '%s',
        past: '%s adim',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime,
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
    ordinal: function (number, period) {
        switch (period) {
            // the ordinal 'er' only applies to day of the month
            case 'D':
                return number + 'er';
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
                return number;
        }
    },
    week: {
        dow: 0, // Sunday is the first day of the week
        doy: 3, // The week that contains Jan 4th is the first week of the year (7 + 0 - 4)
    },
    meridiemParse: /rati|sokallim|donparam|sanje/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'rati') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'sokallim') {
            return hour;
        } else if (meridiem === 'donparam') {
            return hour > 12 ? hour : hour + 12;
        } else if (meridiem === 'sanje') {
            return hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'rati';
        } else if (hour < 12) {
            return 'sokallim';
        } else if (hour < 16) {
            return 'donparam';
        } else if (hour < 20) {
            return 'sanje';
        } else {
            return 'rati';
        }
    },
});
