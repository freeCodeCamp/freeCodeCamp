//! moment.js locale configuration
//! locale : Tajik [tg]
//! author : Orif N. Jr. : https://github.com/orif-jr

import moment from '../moment';

var suffixes = {
    0: '-ум',
    1: '-ум',
    2: '-юм',
    3: '-юм',
    4: '-ум',
    5: '-ум',
    6: '-ум',
    7: '-ум',
    8: '-ум',
    9: '-ум',
    10: '-ум',
    12: '-ум',
    13: '-ум',
    20: '-ум',
    30: '-юм',
    40: '-ум',
    50: '-ум',
    60: '-ум',
    70: '-ум',
    80: '-ум',
    90: '-ум',
    100: '-ум',
};

export default moment.defineLocale('tg', {
    months: {
        format: 'январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри'.split(
            '_'
        ),
        standalone:
            'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split(
                '_'
            ),
    },
    monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split(
        '_'
    ),
    weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
    weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm',
    },
    calendar: {
        sameDay: '[Имрӯз соати] LT',
        nextDay: '[Фардо соати] LT',
        lastDay: '[Дирӯз соати] LT',
        nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
        lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: 'баъди %s',
        past: '%s пеш',
        s: 'якчанд сония',
        m: 'як дақиқа',
        mm: '%d дақиқа',
        h: 'як соат',
        hh: '%d соат',
        d: 'як рӯз',
        dd: '%d рӯз',
        M: 'як моҳ',
        MM: '%d моҳ',
        y: 'як сол',
        yy: '%d сол',
    },
    meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'шаб') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'субҳ') {
            return hour;
        } else if (meridiem === 'рӯз') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'бегоҳ') {
            return hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'шаб';
        } else if (hour < 11) {
            return 'субҳ';
        } else if (hour < 16) {
            return 'рӯз';
        } else if (hour < 19) {
            return 'бегоҳ';
        } else {
            return 'шаб';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
    ordinal: function (number) {
        var a = number % 10,
            b = number >= 100 ? 100 : null;
        return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 7, // The week that contains Jan 1th is the first week of the year.
    },
});
