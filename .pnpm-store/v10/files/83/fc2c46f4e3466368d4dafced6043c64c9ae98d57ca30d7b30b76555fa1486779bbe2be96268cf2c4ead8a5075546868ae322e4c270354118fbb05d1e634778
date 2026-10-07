//! moment.js locale configuration
//! locale : Bengali (Bangladesh) [bn-bd]
//! author : Asraf Hossain Patoary : https://github.com/ashwoolford

import moment from '../moment';

var symbolMap = {
        1: '১',
        2: '২',
        3: '৩',
        4: '৪',
        5: '৫',
        6: '৬',
        7: '৭',
        8: '৮',
        9: '৯',
        0: '০',
    },
    numberMap = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0',
    };

export default moment.defineLocale('bn-bd', {
    months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split(
        '_'
    ),
    monthsShort:
        'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split(
            '_'
        ),
    weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split(
        '_'
    ),
    weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
    weekdaysMin: 'রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি'.split('_'),
    longDateFormat: {
        LT: 'A h:mm সময়',
        LTS: 'A h:mm:ss সময়',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm সময়',
        LLLL: 'dddd, D MMMM YYYY, A h:mm সময়',
    },
    calendar: {
        sameDay: '[আজ] LT',
        nextDay: '[আগামীকাল] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[গতকাল] LT',
        lastWeek: '[গত] dddd, LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: '%s পরে',
        past: '%s আগে',
        s: 'কয়েক সেকেন্ড',
        ss: '%d সেকেন্ড',
        m: 'এক মিনিট',
        mm: '%d মিনিট',
        h: 'এক ঘন্টা',
        hh: '%d ঘন্টা',
        d: 'এক দিন',
        dd: '%d দিন',
        M: 'এক মাস',
        MM: '%d মাস',
        y: 'এক বছর',
        yy: '%d বছর',
    },
    preparse: function (string) {
        return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },

    meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'রাত') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ভোর') {
            return hour;
        } else if (meridiem === 'সকাল') {
            return hour;
        } else if (meridiem === 'দুপুর') {
            return hour >= 3 ? hour : hour + 12;
        } else if (meridiem === 'বিকাল') {
            return hour + 12;
        } else if (meridiem === 'সন্ধ্যা') {
            return hour + 12;
        }
    },

    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'রাত';
        } else if (hour < 6) {
            return 'ভোর';
        } else if (hour < 12) {
            return 'সকাল';
        } else if (hour < 15) {
            return 'দুপুর';
        } else if (hour < 18) {
            return 'বিকাল';
        } else if (hour < 20) {
            return 'সন্ধ্যা';
        } else {
            return 'রাত';
        }
    },
    week: {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    },
});
