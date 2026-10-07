//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elensúle : https://github.com/Oire

import moment from '../moment';

function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11
        ? forms[0]
        : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
          ? forms[1]
          : forms[2];
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
        hh: withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
        dd: 'дзень_дні_дзён',
        MM: 'месяц_месяцы_месяцаў',
        yy: 'год_гады_гадоў',
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвіліна' : 'хвіліну';
    } else if (key === 'h') {
        return withoutSuffix ? 'гадзіна' : 'гадзіну';
    } else {
        return number + ' ' + plural(format[key], +number);
    }
}

export default moment.defineLocale('be', {
    months: {
        format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split(
            '_'
        ),
        standalone:
            'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split(
                '_'
            ),
    },
    monthsShort:
        'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
    weekdays: {
        format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split(
            '_'
        ),
        standalone:
            'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split(
                '_'
            ),
        isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
    },
    weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., HH:mm',
        LLLL: 'dddd, D MMMM YYYY г., HH:mm',
    },
    calendar: {
        sameDay: '[Сёння ў] LT',
        nextDay: '[Заўтра ў] LT',
        lastDay: '[Учора ў] LT',
        nextWeek: function () {
            return '[У] dddd [ў] LT';
        },
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return '[У мінулую] dddd [ў] LT';
                case 1:
                case 2:
                case 4:
                    return '[У мінулы] dddd [ў] LT';
            }
        },
        sameElse: 'L',
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
        yy: relativeTimeWithPlural,
    },
    meridiemParse: /ночы|раніцы|дня|вечара/,
    isPM: function (input) {
        return /^(дня|вечара)$/.test(input);
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночы';
        } else if (hour < 12) {
            return 'раніцы';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечара';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return (number % 10 === 2 || number % 10 === 3) &&
                    number % 100 !== 12 &&
                    number % 100 !== 13
                    ? number + '-і'
                    : number + '-ы';
            case 'D':
                return number + '-га';
            default:
                return number;
        }
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 7, // The week that contains Jan 7th is the first week of the year.
    },
});
