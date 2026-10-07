//! moment.js locale configuration
//! locale : Konkani Devanagari script [gom-deva]
//! author : The Discoverer : https://github.com/WikiDiscoverer

import moment from '../moment';

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        s: ['थोडया सॅकंडांनी', 'थोडे सॅकंड'],
        ss: [number + ' सॅकंडांनी', number + ' सॅकंड'],
        m: ['एका मिणटान', 'एक मिनूट'],
        mm: [number + ' मिणटांनी', number + ' मिणटां'],
        h: ['एका वरान', 'एक वर'],
        hh: [number + ' वरांनी', number + ' वरां'],
        d: ['एका दिसान', 'एक दीस'],
        dd: [number + ' दिसांनी', number + ' दीस'],
        M: ['एका म्हयन्यान', 'एक म्हयनो'],
        MM: [number + ' म्हयन्यानी', number + ' म्हयने'],
        y: ['एका वर्सान', 'एक वर्स'],
        yy: [number + ' वर्सांनी', number + ' वर्सां'],
    };
    return isFuture ? format[key][0] : format[key][1];
}

export default moment.defineLocale('gom-deva', {
    months: {
        standalone:
            'जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split(
                '_'
            ),
        format: 'जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या'.split(
            '_'
        ),
        isFormat: /MMMM(\s)+D[oD]?/,
    },
    monthsShort:
        'जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split(
            '_'
        ),
    monthsParseExact: true,
    weekdays: 'आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार'.split('_'),
    weekdaysShort: 'आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.'.split('_'),
    weekdaysMin: 'आ_सो_मं_बु_ब्रे_सु_शे'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'A h:mm [वाजतां]',
        LTS: 'A h:mm:ss [वाजतां]',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY A h:mm [वाजतां]',
        LLLL: 'dddd, MMMM Do, YYYY, A h:mm [वाजतां]',
        llll: 'ddd, D MMM YYYY, A h:mm [वाजतां]',
    },
    calendar: {
        sameDay: '[आयज] LT',
        nextDay: '[फाल्यां] LT',
        nextWeek: '[फुडलो] dddd[,] LT',
        lastDay: '[काल] LT',
        lastWeek: '[फाटलो] dddd[,] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: '%s',
        past: '%s आदीं',
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
    dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
    ordinal: function (number, period) {
        switch (period) {
            // the ordinal 'वेर' only applies to day of the month
            case 'D':
                return number + 'वेर';
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
    meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'राती') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सकाळीं') {
            return hour;
        } else if (meridiem === 'दनपारां') {
            return hour > 12 ? hour : hour + 12;
        } else if (meridiem === 'सांजे') {
            return hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'राती';
        } else if (hour < 12) {
            return 'सकाळीं';
        } else if (hour < 16) {
            return 'दनपारां';
        } else if (hour < 20) {
            return 'सांजे';
        } else {
            return 'राती';
        }
    },
});
