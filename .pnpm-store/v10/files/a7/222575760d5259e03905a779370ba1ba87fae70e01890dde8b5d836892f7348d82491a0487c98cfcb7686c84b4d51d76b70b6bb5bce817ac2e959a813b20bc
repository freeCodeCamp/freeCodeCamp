//! moment.js locale configuration
//! locale : Macedonian [mk]
//! author : Borislav Mickov : https://github.com/B0k0
//! author : Sashko Todorov : https://github.com/bkyceh
import moment from '../moment';

export default moment.defineLocale('mk', {
    months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split(
        '_'
    ),
    monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split(
        '_'
    ),
    weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
    weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm',
    },
    calendar: {
        sameDay: '[Денес во] LT',
        nextDay: '[Утре во] LT',
        nextWeek: '[Во] dddd [во] LT',
        lastDay: '[Вчера во] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[Изминатата] dddd [во] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[Изминатиот] dddd [во] LT';
            }
        },
        sameElse: 'L',
    },
    relativeTime: {
        future: 'за %s',
        past: 'пред %s',
        s: 'неколку секунди',
        ss: '%d секунди',
        m: 'една минута',
        mm: '%d минути',
        h: 'еден час',
        hh: '%d часа',
        d: 'еден ден',
        dd: '%d дена',
        M: 'еден месец',
        MM: '%d месеци',
        y: 'една година',
        yy: '%d години',
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function (number) {
        var lastDigit = number % 10,
            last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        } else if (last2Digits === 0) {
            return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        } else if (lastDigit === 1) {
            return number + '-ви';
        } else if (lastDigit === 2) {
            return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        } else {
            return number + '-ти';
        }
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 7, // The week that contains Jan 7th is the first week of the year.
    },
});
