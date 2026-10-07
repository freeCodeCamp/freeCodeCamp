//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj

import moment from '../moment';

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        m: ['eine Minute', 'einer Minute'],
        h: ['eine Stunde', 'einer Stunde'],
        d: ['ein Tag', 'einem Tag'],
        dd: [number + ' Tage', number + ' Tagen'],
        w: ['eine Woche', 'einer Woche'],
        M: ['ein Monat', 'einem Monat'],
        MM: [number + ' Monate', number + ' Monaten'],
        y: ['ein Jahr', 'einem Jahr'],
        yy: [number + ' Jahre', number + ' Jahren'],
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

export default moment.defineLocale('de', {
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
        '_'
    ),
    monthsShort:
        'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays:
        'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
            '_'
        ),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm',
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]',
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        w: processRelativeTime,
        ww: '%d Wochen',
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime,
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
});
