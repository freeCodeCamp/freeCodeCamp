//! moment.js locale configuration
//! locale : Kannada [kn]
//! author : Rajeev Naik : https://github.com/rajeevnaikte

import moment from '../moment';

var symbolMap = {
        1: '೧',
        2: '೨',
        3: '೩',
        4: '೪',
        5: '೫',
        6: '೬',
        7: '೭',
        8: '೮',
        9: '೯',
        0: '೦',
    },
    numberMap = {
        '೧': '1',
        '೨': '2',
        '೩': '3',
        '೪': '4',
        '೫': '5',
        '೬': '6',
        '೭': '7',
        '೮': '8',
        '೯': '9',
        '೦': '0',
    };

export default moment.defineLocale('kn', {
    months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split(
        '_'
    ),
    monthsShort:
        'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split(
            '_'
        ),
    monthsParseExact: true,
    weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split(
        '_'
    ),
    weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
    weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm',
        LLLL: 'dddd, D MMMM YYYY, A h:mm',
    },
    calendar: {
        sameDay: '[ಇಂದು] LT',
        nextDay: '[ನಾಳೆ] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[ನಿನ್ನೆ] LT',
        lastWeek: '[ಕೊನೆಯ] dddd, LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: '%s ನಂತರ',
        past: '%s ಹಿಂದೆ',
        s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
        ss: '%d ಸೆಕೆಂಡುಗಳು',
        m: 'ಒಂದು ನಿಮಿಷ',
        mm: '%d ನಿಮಿಷ',
        h: 'ಒಂದು ಗಂಟೆ',
        hh: '%d ಗಂಟೆ',
        d: 'ಒಂದು ದಿನ',
        dd: '%d ದಿನ',
        M: 'ಒಂದು ತಿಂಗಳು',
        MM: '%d ತಿಂಗಳು',
        y: 'ಒಂದು ವರ್ಷ',
        yy: '%d ವರ್ಷ',
    },
    preparse: function (string) {
        return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ರಾತ್ರಿ') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
            return hour;
        } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'ಸಂಜೆ') {
            return hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ರಾತ್ರಿ';
        } else if (hour < 10) {
            return 'ಬೆಳಿಗ್ಗೆ';
        } else if (hour < 17) {
            return 'ಮಧ್ಯಾಹ್ನ';
        } else if (hour < 20) {
            return 'ಸಂಜೆ';
        } else {
            return 'ರಾತ್ರಿ';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
    ordinal: function (number) {
        return number + 'ನೇ';
    },
    week: {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    },
});
