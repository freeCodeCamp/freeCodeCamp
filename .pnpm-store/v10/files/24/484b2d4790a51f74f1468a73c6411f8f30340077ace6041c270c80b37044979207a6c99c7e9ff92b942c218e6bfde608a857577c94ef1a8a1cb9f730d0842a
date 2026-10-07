//! moment.js locale configuration
//! locale : Nynorsk [nn]
//! authors : https://github.com/mechuwind
//!           Stephen Ramthun : https://github.com/stephenramthun

import moment from '../moment';

export default moment.defineLocale('nn', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
        '_'
    ),
    monthsShort:
        'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort: 'su._må._ty._on._to._fr._lau.'.split('_'),
    weekdaysMin: 'su_må_ty_on_to_fr_la'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY [kl.] H:mm',
        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
    },
    calendar: {
        sameDay: '[I dag klokka] LT',
        nextDay: '[I morgon klokka] LT',
        nextWeek: 'dddd [klokka] LT',
        lastDay: '[I går klokka] LT',
        lastWeek: '[Føregåande] dddd [klokka] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: 'om %s',
        past: '%s sidan',
        s: 'nokre sekund',
        ss: '%d sekund',
        m: 'eit minutt',
        mm: '%d minutt',
        h: 'ein time',
        hh: '%d timar',
        d: 'ein dag',
        dd: '%d dagar',
        w: 'ei veke',
        ww: '%d veker',
        M: 'ein månad',
        MM: '%d månader',
        y: 'eit år',
        yy: '%d år',
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
});
