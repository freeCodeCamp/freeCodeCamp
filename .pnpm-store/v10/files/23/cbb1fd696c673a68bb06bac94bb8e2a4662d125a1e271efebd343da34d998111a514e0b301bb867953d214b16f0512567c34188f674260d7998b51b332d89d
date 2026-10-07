//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

import moment from '../moment';

function isFunction(input) {
    return (
        (typeof Function !== 'undefined' && input instanceof Function) ||
        Object.prototype.toString.call(input) === '[object Function]'
    );
}

export default moment.defineLocale('el', {
    monthsNominativeEl:
        'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split(
            '_'
        ),
    monthsGenitiveEl:
        'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split(
            '_'
        ),
    months: function (momentToFormat, format) {
        if (!momentToFormat) {
            return this._monthsNominativeEl;
        } else if (
            typeof format === 'string' &&
            /D/.test(format.substring(0, format.indexOf('MMMM')))
        ) {
            // if there is a day number before 'MMMM'
            return this._monthsGenitiveEl[momentToFormat.month()];
        } else {
            return this._monthsNominativeEl[momentToFormat.month()];
        }
    },
    monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
    weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split(
        '_'
    ),
    weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
    meridiem: function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'μμ' : 'ΜΜ';
        } else {
            return isLower ? 'πμ' : 'ΠΜ';
        }
    },
    isPM: function (input) {
        return (input + '').toLowerCase()[0] === 'μ';
    },
    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY h:mm A',
        LLLL: 'dddd, D MMMM YYYY h:mm A',
    },
    calendarEl: {
        sameDay: '[Σήμερα {}] LT',
        nextDay: '[Αύριο {}] LT',
        nextWeek: 'dddd [{}] LT',
        lastDay: '[Χθες {}] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 6:
                    return '[το προηγούμενο] dddd [{}] LT';
                default:
                    return '[την προηγούμενη] dddd [{}] LT';
            }
        },
        sameElse: 'L',
    },
    calendar: function (key, mom) {
        var output = this._calendarEl[key],
            hours = mom && mom.hours();
        if (isFunction(output)) {
            output = output.apply(mom);
        }
        return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
    },
    relativeTime: {
        future: 'σε %s',
        past: '%s πριν',
        s: 'λίγα δευτερόλεπτα',
        ss: '%d δευτερόλεπτα',
        m: 'ένα λεπτό',
        mm: '%d λεπτά',
        h: 'μία ώρα',
        hh: '%d ώρες',
        d: 'μία μέρα',
        dd: '%d μέρες',
        M: 'ένας μήνας',
        MM: '%d μήνες',
        y: 'ένας χρόνος',
        yy: '%d χρόνια',
    },
    dayOfMonthOrdinalParse: /\d{1,2}η/,
    ordinal: '%dη',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4, // The week that contains Jan 4st is the first week of the year.
    },
});
