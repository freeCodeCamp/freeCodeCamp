(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';

    //! moment.js locale configuration
    //! locale : afrikaans (af)
    //! author : Werner Mollentze : https://github.com/wernerm

    var af = moment.defineLocale('af', {
        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM : function (input) {
            return /^nm$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'vm' : 'VM';
            } else {
                return isLower ? 'nm' : 'NM';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Vandag om] LT',
            nextDay : '[Môre om] LT',
            nextWeek : 'dddd [om] LT',
            lastDay : '[Gister om] LT',
            lastWeek : '[Laas] dddd [om] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'oor %s',
            past : '%s gelede',
            s : '\'n paar sekondes',
            m : '\'n minuut',
            mm : '%d minute',
            h : '\'n uur',
            hh : '%d ure',
            d : '\'n dag',
            dd : '%d dae',
            M : '\'n maand',
            MM : '%d maande',
            y : '\'n jaar',
            yy : '%d jaar'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
        },
        week : {
            dow : 1, // Maandag is die eerste dag van die week.
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        }
    });

    //! moment.js locale configuration
    //! locale : Moroccan Arabic (ar-ma)
    //! author : ElFadili Yassine : https://github.com/ElFadiliY
    //! author : Abdel Said : https://github.com/abdelsaid

    var ar_ma = moment.defineLocale('ar-ma', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Arabic Saudi Arabia (ar-sa)
    //! author : Suhail Alkowaileet : https://github.com/xsoh

    var ar_sa__symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, ar_sa__numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    };

    var ar_sa = moment.defineLocale('ar-sa', {
        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return ar_sa__numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return ar_sa__symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale  : Tunisian Arabic (ar-tn)

    var ar_tn = moment.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! Locale: Arabic (ar)
    //! Author: Abdel Said: https://github.com/abdelsaid
    //! Changes in months, weekdays: Ahmed Elkhatib
    //! Native plural forms: forabi https://github.com/forabi

    var ar__symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, ar__numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, ar__months = [
        'كانون الثاني يناير',
        'شباط فبراير',
        'آذار مارس',
        'نيسان أبريل',
        'أيار مايو',
        'حزيران يونيو',
        'تموز يوليو',
        'آب أغسطس',
        'أيلول سبتمبر',
        'تشرين الأول أكتوبر',
        'تشرين الثاني نوفمبر',
        'كانون الأول ديسمبر'
    ];

    var ar = moment.defineLocale('ar', {
        months : ar__months,
        monthsShort : ar__months,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return ar__numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return ar__symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : azerbaijani (az)
    //! author : topchiyev : https://github.com/topchiyev

    var az__suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
    };

    var az = moment.defineLocale('az', {
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[sabah saat] LT',
            nextWeek : '[gələn həftə] dddd [saat] LT',
            lastDay : '[dünən] LT',
            lastWeek : '[keçən həftə] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s əvvəl',
            s : 'birneçə saniyyə',
            m : 'bir dəqiqə',
            mm : '%d dəqiqə',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir il',
            yy : '%d il'
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM : function (input) {
            return /^(gündüz|axşam)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'gecə';
            } else if (hour < 12) {
                return 'səhər';
            } else if (hour < 17) {
                return 'gündüz';
            } else {
                return 'axşam';
            }
        },
        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '-ıncı';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (az__suffixes[a] || az__suffixes[b] || az__suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : belarusian (be)
    //! author : Dmitry Demidov : https://github.com/demidov91
    //! author: Praleska: http://praleska.pro/
    //! Author : Menelion Elensúle : https://github.com/Oire

    function be__plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function be__relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            'dd': 'дзень_дні_дзён',
            'MM': 'месяц_месяцы_месяцаў',
            'yy': 'год_гады_гадоў'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвіліна' : 'хвіліну';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'гадзіна' : 'гадзіну';
        }
        else {
            return number + ' ' + be__plural(format[key], +number);
        }
    }
    function be__monthsCaseReplace(m, format) {
        var months = {
            'nominative': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
            'accusative': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_')
        },
        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
            'accusative' :
            'nominative';
        return months[nounCase][m.month()];
    }
    function be__weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            'accusative': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')
        },
        nounCase = (/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/).test(format) ?
            'accusative' :
            'nominative';
        return weekdays[nounCase][m.day()];
    }

    var be = moment.defineLocale('be', {
        months : be__monthsCaseReplace,
        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays : be__weekdaysCaseReplace,
        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., HH:mm',
            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar : {
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
            sameElse: 'L'
        },
        relativeTime : {
            future : 'праз %s',
            past : '%s таму',
            s : 'некалькі секунд',
            m : be__relativeTimeWithPlural,
            mm : be__relativeTimeWithPlural,
            h : be__relativeTimeWithPlural,
            hh : be__relativeTimeWithPlural,
            d : 'дзень',
            dd : be__relativeTimeWithPlural,
            M : 'месяц',
            MM : be__relativeTimeWithPlural,
            y : 'год',
            yy : be__relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM : function (input) {
            return /^(дня|вечара)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
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
        ordinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
            case 'D':
                return number + '-га';
            default:
                return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : bulgarian (bg)
    //! author : Krasen Borisov : https://github.com/kraz

    var bg = moment.defineLocale('bg', {
        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Днес в] LT',
            nextDay : '[Утре в] LT',
            nextWeek : 'dddd [в] LT',
            lastDay : '[Вчера в] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'след %s',
            past : 'преди %s',
            s : 'няколко секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дни',
            M : 'месец',
            MM : '%d месеца',
            y : 'година',
            yy : '%d години'
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
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
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Bengali (bn)
    //! author : Kaushik Gandhi : https://github.com/kaushikgandhi

    var bn__symbolMap = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০'
    },
    bn__numberMap = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0'
    };

    var bn = moment.defineLocale('bn', {
        months : 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort : 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),
        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),
        weekdaysMin : 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
        longDateFormat : {
            LT : 'A h:mm সময়',
            LTS : 'A h:mm:ss সময়',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm সময়',
            LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar : {
            sameDay : '[আজ] LT',
            nextDay : '[আগামীকাল] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[গতকাল] LT',
            lastWeek : '[গত] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s পরে',
            past : '%s আগে',
            s : 'কএক সেকেন্ড',
            m : 'এক মিনিট',
            mm : '%d মিনিট',
            h : 'এক ঘন্টা',
            hh : '%d ঘন্টা',
            d : 'এক দিন',
            dd : '%d দিন',
            M : 'এক মাস',
            MM : '%d মাস',
            y : 'এক বছর',
            yy : '%d বছর'
        },
        preparse: function (string) {
            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
                return bn__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return bn__symbolMap[match];
            });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকেল|রাত/,
        isPM: function (input) {
            return /^(দুপুর|বিকেল|রাত)$/.test(input);
        },
        //Bengali is a vast language its spoken
        //in different forms in various parts of the world.
        //I have just generalized with most common one used
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'রাত';
            } else if (hour < 10) {
                return 'সকাল';
            } else if (hour < 17) {
                return 'দুপুর';
            } else if (hour < 20) {
                return 'বিকেল';
            } else {
                return 'রাত';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : tibetan (bo)
    //! author : Thupten N. Chakrishar : https://github.com/vajradog

    var bo__symbolMap = {
        '1': '༡',
        '2': '༢',
        '3': '༣',
        '4': '༤',
        '5': '༥',
        '6': '༦',
        '7': '༧',
        '8': '༨',
        '9': '༩',
        '0': '༠'
    },
    bo__numberMap = {
        '༡': '1',
        '༢': '2',
        '༣': '3',
        '༤': '4',
        '༥': '5',
        '༦': '6',
        '༧': '7',
        '༨': '8',
        '༩': '9',
        '༠': '0'
    };

    var bo = moment.defineLocale('bo', {
        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[དི་རིང] LT',
            nextDay : '[སང་ཉིན] LT',
            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
            lastDay : '[ཁ་སང] LT',
            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ལ་',
            past : '%s སྔན་ལ',
            s : 'ལམ་སང',
            m : 'སྐར་མ་གཅིག',
            mm : '%d སྐར་མ',
            h : 'ཆུ་ཚོད་གཅིག',
            hh : '%d ཆུ་ཚོད',
            d : 'ཉིན་གཅིག',
            dd : '%d ཉིན་',
            M : 'ཟླ་བ་གཅིག',
            MM : '%d ཟླ་བ',
            y : 'ལོ་གཅིག',
            yy : '%d ལོ'
        },
        preparse: function (string) {
            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
                return bo__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return bo__symbolMap[match];
            });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        isPM: function (input) {
            return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'མཚན་མོ';
            } else if (hour < 10) {
                return 'ཞོགས་ཀས';
            } else if (hour < 17) {
                return 'ཉིན་གུང';
            } else if (hour < 20) {
                return 'དགོང་དག';
            } else {
                return 'མཚན་མོ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : breton (br)
    //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

    function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
            'mm': 'munutenn',
            'MM': 'miz',
            'dd': 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
    }
    function specialMutationForYears(number) {
        switch (lastNumber(number)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
            return number + ' bloaz';
        default:
            return number + ' vloaz';
        }
    }
    function lastNumber(number) {
        if (number > 9) {
            return lastNumber(number % 10);
        }
        return number;
    }
    function mutation(text, number) {
        if (number === 2) {
            return softMutation(text);
        }
        return text;
    }
    function softMutation(text) {
        var mutationTable = {
            'm': 'v',
            'b': 'v',
            'd': 'z'
        };
        if (mutationTable[text.charAt(0)] === undefined) {
            return text;
        }
        return mutationTable[text.charAt(0)] + text.substring(1);
    }

    var br = moment.defineLocale('br', {
        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        longDateFormat : {
            LT : 'h[e]mm A',
            LTS : 'h[e]mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [a viz] MMMM YYYY',
            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
        },
        calendar : {
            sameDay : '[Hiziv da] LT',
            nextDay : '[Warc\'hoazh da] LT',
            nextWeek : 'dddd [da] LT',
            lastDay : '[Dec\'h da] LT',
            lastWeek : 'dddd [paset da] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'a-benn %s',
            past : '%s \'zo',
            s : 'un nebeud segondennoù',
            m : 'ur vunutenn',
            mm : relativeTimeWithMutation,
            h : 'un eur',
            hh : '%d eur',
            d : 'un devezh',
            dd : relativeTimeWithMutation,
            M : 'ur miz',
            MM : relativeTimeWithMutation,
            y : 'ur bloaz',
            yy : specialMutationForYears
        },
        ordinalParse: /\d{1,2}(añ|vet)/,
        ordinal : function (number) {
            var output = (number === 1) ? 'añ' : 'vet';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : bosnian (bs)
    //! author : Nedim Cholich : https://github.com/frontyard
    //! based on (hr) translation by Bojan Marković

    function bs__translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
        }
    }

    var bs = moment.defineLocale('bs', {
        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            m      : bs__translate,
            mm     : bs__translate,
            h      : bs__translate,
            hh     : bs__translate,
            d      : 'dan',
            dd     : bs__translate,
            M      : 'mjesec',
            MM     : bs__translate,
            y      : 'godinu',
            yy     : bs__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : catalan (ca)
    //! author : Juan G. Hurtado : https://github.com/juanghurtado

    var ca = moment.defineLocale('ca', {
        months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextDay : function () {
                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastDay : function () {
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'fa %s',
            s : 'uns segons',
            m : 'un minut',
            mm : '%d minuts',
            h : 'una hora',
            hh : '%d hores',
            d : 'un dia',
            dd : '%d dies',
            M : 'un mes',
            MM : '%d mesos',
            y : 'un any',
            yy : '%d anys'
        },
        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal : function (number, period) {
            var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : 'è';
            if (period === 'w' || period === 'W') {
                output = 'a';
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : czech (cs)
    //! author : petrbela : https://github.com/petrbela

    var cs__months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        cs__monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    function cs__plural(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }
    function cs__translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'minuty' : 'minut');
            } else {
                return result + 'minutami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'hodiny' : 'hodin');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'dny' : 'dní');
            } else {
                return result + 'dny';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'měsíce' : 'měsíců');
            } else {
                return result + 'měsíci';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'roky' : 'let');
            } else {
                return result + 'lety';
            }
            break;
        }
    }

    var cs = moment.defineLocale('cs', {
        months : cs__months,
        monthsShort : cs__monthsShort,
        monthsParse : (function (months, monthsShort) {
            var i, _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (červenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(cs__months, cs__monthsShort)),
        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'před %s',
            s : cs__translate,
            m : cs__translate,
            mm : cs__translate,
            h : cs__translate,
            hh : cs__translate,
            d : cs__translate,
            dd : cs__translate,
            M : cs__translate,
            MM : cs__translate,
            y : cs__translate,
            yy : cs__translate
        },
        ordinalParse : /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : chuvash (cv)
    //! author : Anatoly Mironov : https://github.com/mirontoli

    var cv = moment.defineLocale('cv', {
        months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar : {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
                return output + affix;
            },
            past : '%s каялла',
            s : 'пӗр-ик ҫеккунт',
            m : 'пӗр минут',
            mm : '%d минут',
            h : 'пӗр сехет',
            hh : '%d сехет',
            d : 'пӗр кун',
            dd : '%d кун',
            M : 'пӗр уйӑх',
            MM : '%d уйӑх',
            y : 'пӗр ҫул',
            yy : '%d ҫул'
        },
        ordinalParse: /\d{1,2}-мӗш/,
        ordinal : '%d-мӗш',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Welsh (cy)
    //! author : Robert Allen

    var cy = moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        // time formats are the same as en-gb
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
        },
        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function (number) {
            var b = number,
                output = '',
                lookup = [
                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
                ];
            if (b > 20) {
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                    output = 'fed'; // not 30ain, 70ain or 90ain
                } else {
                    output = 'ain';
                }
            } else if (b > 0) {
                output = lookup[b];
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : danish (da)
    //! author : Ulrik Nielsen : https://github.com/mrbase

    var da = moment.defineLocale('da', {
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[I dag kl.] LT',
            nextDay : '[I morgen kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[I går kl.] LT',
            lastWeek : '[sidste] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'få sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en måned',
            MM : '%d måneder',
            y : 'et år',
            yy : '%d år'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : austrian german (de-at)
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elensúle: https://github.com/Oire
    //! author : Martin Groller : https://github.com/MadMG

    function de_at__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var de_at = moment.defineLocale('de-at', {
        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[Morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[Gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            m : de_at__processRelativeTime,
            mm : '%d Minuten',
            h : de_at__processRelativeTime,
            hh : '%d Stunden',
            d : de_at__processRelativeTime,
            dd : de_at__processRelativeTime,
            M : de_at__processRelativeTime,
            MM : de_at__processRelativeTime,
            y : de_at__processRelativeTime,
            yy : de_at__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : german (de)
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elensúle: https://github.com/Oire

    function de__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var de = moment.defineLocale('de', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[Morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[Gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            m : de__processRelativeTime,
            mm : '%d Minuten',
            h : de__processRelativeTime,
            hh : '%d Stunden',
            d : de__processRelativeTime,
            dd : de__processRelativeTime,
            M : de__processRelativeTime,
            MM : de__processRelativeTime,
            y : de__processRelativeTime,
            yy : de__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : modern greek (el)
    //! author : Aggelos Karalias : https://github.com/mehiel

    var el = moment.defineLocale('el', {
        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months : function (momentToFormat, format) {
            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'μμ' : 'ΜΜ';
            } else {
                return isLower ? 'πμ' : 'ΠΜ';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'μ');
        },
        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl : {
            sameDay : '[Σήμερα {}] LT',
            nextDay : '[Αύριο {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[Χθες {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[το προηγούμενο] dddd [{}] LT';
                    default:
                        return '[την προηγούμενη] dddd [{}] LT';
                }
            },
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();
            if (typeof output === 'function') {
                output = output.apply(mom);
            }
            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
        },
        relativeTime : {
            future : 'σε %s',
            past : '%s πριν',
            s : 'λίγα δευτερόλεπτα',
            m : 'ένα λεπτό',
            mm : '%d λεπτά',
            h : 'μία ώρα',
            hh : '%d ώρες',
            d : 'μία μέρα',
            dd : '%d μέρες',
            M : 'ένας μήνας',
            MM : '%d μήνες',
            y : 'ένας χρόνος',
            yy : '%d χρόνια'
        },
        ordinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : australian english (en-au)

    var en_au = moment.defineLocale('en-au', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : canadian english (en-ca)
    //! author : Jonathan Abourbih : https://github.com/jonbca

    var en_ca = moment.defineLocale('en-ca', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM, YYYY',
            LLL : 'D MMMM, YYYY h:mm A',
            LLLL : 'dddd, D MMMM, YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    //! moment.js locale configuration
    //! locale : great britain english (en-gb)
    //! author : Chris Gedrim : https://github.com/chrisgedrim

    var en_gb = moment.defineLocale('en-gb', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : esperanto (eo)
    //! author : Colin Dean : https://github.com/colindean
    //! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
    //!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

    var eo = moment.defineLocale('eo', {
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
        weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D[-an de] MMMM, YYYY',
            LLL : 'D[-an de] MMMM, YYYY HH:mm',
            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (input) {
            return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'p.t.m.' : 'P.T.M.';
            } else {
                return isLower ? 'a.t.m.' : 'A.T.M.';
            }
        },
        calendar : {
            sameDay : '[Hodiaŭ je] LT',
            nextDay : '[Morgaŭ je] LT',
            nextWeek : 'dddd [je] LT',
            lastDay : '[Hieraŭ je] LT',
            lastWeek : '[pasinta] dddd [je] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'je %s',
            past : 'antaŭ %s',
            s : 'sekundoj',
            m : 'minuto',
            mm : '%d minutoj',
            h : 'horo',
            hh : '%d horoj',
            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
            dd : '%d tagoj',
            M : 'monato',
            MM : '%d monatoj',
            y : 'jaro',
            yy : '%d jaroj'
        },
        ordinalParse: /\d{1,2}a/,
        ordinal : '%da',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : spanish (es)
    //! author : Julio Napurí : https://github.com/julionc

    var monthsShortDot = 'Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.'.split('_'),
        es__monthsShort = 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_');

    var es = moment.defineLocale('es', {
        months : 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return es__monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        weekdays : 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
        weekdaysShort : 'Dom._Lun._Mar._Mié._Jue._Vie._Sáb.'.split('_'),
        weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        ordinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : estonian (et)
    //! author : Henry Kehlmann : https://github.com/madhenry
    //! improvements : Illimar Tambek : https://github.com/ragulka

    function et__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
            'm' : ['ühe minuti', 'üks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd' : ['ühe päeva', 'üks päev'],
            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
        };
        if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
    }

    var et = moment.defineLocale('et', {
        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat : {
            LT   : 'H:mm',
            LTS : 'H:mm:ss',
            L    : 'DD.MM.YYYY',
            LL   : 'D. MMMM YYYY',
            LLL  : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[Täna,] LT',
            nextDay  : '[Homme,] LT',
            nextWeek : '[Järgmine] dddd LT',
            lastDay  : '[Eile,] LT',
            lastWeek : '[Eelmine] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pärast',
            past   : '%s tagasi',
            s      : et__processRelativeTime,
            m      : et__processRelativeTime,
            mm     : et__processRelativeTime,
            h      : et__processRelativeTime,
            hh     : et__processRelativeTime,
            d      : et__processRelativeTime,
            dd     : '%d päeva',
            M      : et__processRelativeTime,
            MM     : et__processRelativeTime,
            y      : et__processRelativeTime,
            yy     : et__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : euskara (eu)
    //! author : Eneko Illarramendi : https://github.com/eillarra

    var eu = moment.defineLocale('eu', {
        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY[ko] MMMM[ren] D[a]',
            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l : 'YYYY-M-D',
            ll : 'YYYY[ko] MMM D[a]',
            lll : 'YYYY[ko] MMM D[a] HH:mm',
            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar : {
            sameDay : '[gaur] LT[etan]',
            nextDay : '[bihar] LT[etan]',
            nextWeek : 'dddd LT[etan]',
            lastDay : '[atzo] LT[etan]',
            lastWeek : '[aurreko] dddd LT[etan]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s barru',
            past : 'duela %s',
            s : 'segundo batzuk',
            m : 'minutu bat',
            mm : '%d minutu',
            h : 'ordu bat',
            hh : '%d ordu',
            d : 'egun bat',
            dd : '%d egun',
            M : 'hilabete bat',
            MM : '%d hilabete',
            y : 'urte bat',
            yy : '%d urte'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Persian (fa)
    //! author : Ebrahim Byagowi : https://github.com/ebraminio

    var fa__symbolMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    }, fa__numberMap = {
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '۰': '0'
    };

    var fa = moment.defineLocale('fa', {
        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (input) {
            return /بعد از ظهر/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'قبل از ظهر';
            } else {
                return 'بعد از ظهر';
            }
        },
        calendar : {
            sameDay : '[امروز ساعت] LT',
            nextDay : '[فردا ساعت] LT',
            nextWeek : 'dddd [ساعت] LT',
            lastDay : '[دیروز ساعت] LT',
            lastWeek : 'dddd [پیش] [ساعت] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'در %s',
            past : '%s پیش',
            s : 'چندین ثانیه',
            m : 'یک دقیقه',
            mm : '%d دقیقه',
            h : 'یک ساعت',
            hh : '%d ساعت',
            d : 'یک روز',
            dd : '%d روز',
            M : 'یک ماه',
            MM : '%d ماه',
            y : 'یک سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/[۰-۹]/g, function (match) {
                return fa__numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return fa__symbolMap[match];
            }).replace(/,/g, '،');
        },
        ordinalParse: /\d{1,2}م/,
        ordinal : '%dم',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : finnish (fi)
    //! author : Tarmo Aidantausta : https://github.com/bleadof

    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
        numbersFuture = [
            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
            numbersPast[7], numbersPast[8], numbersPast[9]
        ];
    function fi__translate(number, withoutSuffix, key, isFuture) {
        var result = '';
        switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
        }
        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
    }
    function verbalNumber(number, isFuture) {
        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
    }

    var fi = moment.defineLocale('fi', {
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'Do MMMM[ta] YYYY',
            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l : 'D.M.YYYY',
            ll : 'Do MMM YYYY',
            lll : 'Do MMM YYYY, [klo] HH.mm',
            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar : {
            sameDay : '[tänään] [klo] LT',
            nextDay : '[huomenna] [klo] LT',
            nextWeek : 'dddd [klo] LT',
            lastDay : '[eilen] [klo] LT',
            lastWeek : '[viime] dddd[na] [klo] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s päästä',
            past : '%s sitten',
            s : fi__translate,
            m : fi__translate,
            mm : fi__translate,
            h : fi__translate,
            hh : fi__translate,
            d : fi__translate,
            dd : fi__translate,
            M : fi__translate,
            MM : fi__translate,
            y : fi__translate,
            yy : fi__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : faroese (fo)
    //! author : Ragnar Johannesen : https://github.com/ragnar123

    var fo = moment.defineLocale('fo', {
        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Í dag kl.] LT',
            nextDay : '[Í morgin kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Í gjár kl.] LT',
            lastWeek : '[síðstu] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'um %s',
            past : '%s síðani',
            s : 'fá sekund',
            m : 'ein minutt',
            mm : '%d minuttir',
            h : 'ein tími',
            hh : '%d tímar',
            d : 'ein dagur',
            dd : '%d dagar',
            M : 'ein mánaði',
            MM : '%d mánaðir',
            y : 'eitt ár',
            yy : '%d ár'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : canadian french (fr-ca)
    //! author : Jonathan Abourbih : https://github.com/jonbca

    var fr_ca = moment.defineLocale('fr-ca', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Aujourd\'hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : 'e');
        }
    });

    //! moment.js locale configuration
    //! locale : french (fr)
    //! author : John Fischer : https://github.com/jfroffice

    var fr = moment.defineLocale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Aujourd\'hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : '');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : frisian (fy)
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v

    var fy__monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        fy__monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

    var fy = moment.defineLocale('fy', {
        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return fy__monthsShortWithoutDots[m.month()];
            } else {
                return fy__monthsShortWithDots[m.month()];
            }
        },
        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'oer %s',
            past : '%s lyn',
            s : 'in pear sekonden',
            m : 'ien minút',
            mm : '%d minuten',
            h : 'ien oere',
            hh : '%d oeren',
            d : 'ien dei',
            dd : '%d dagen',
            M : 'ien moanne',
            MM : '%d moannen',
            y : 'ien jier',
            yy : '%d jierren'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : galician (gl)
    //! author : Juan G. Hurtado : https://github.com/juanghurtado

    var gl = moment.defineLocale('gl', {
        months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
        monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
        weekdays : 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
        weekdaysShort : 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
        weekdaysMin : 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextDay : function () {
                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            lastDay : function () {
                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
            },
            lastWeek : function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : function (str) {
                if (str === 'uns segundos') {
                    return 'nuns segundos';
                }
                return 'en ' + str;
            },
            past : 'hai %s',
            s : 'uns segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'unha hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un ano',
            yy : '%d anos'
        },
        ordinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Hebrew (he)
    //! author : Tomer Cohen : https://github.com/tomer
    //! author : Moshe Simantov : https://github.com/DevelopmentIL
    //! author : Tal Ater : https://github.com/TalAter

    var he = moment.defineLocale('he', {
        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [ב]MMMM YYYY',
            LLL : 'D [ב]MMMM YYYY HH:mm',
            LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[היום ב־]LT',
            nextDay : '[מחר ב־]LT',
            nextWeek : 'dddd [בשעה] LT',
            lastDay : '[אתמול ב־]LT',
            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'בעוד %s',
            past : 'לפני %s',
            s : 'מספר שניות',
            m : 'דקה',
            mm : '%d דקות',
            h : 'שעה',
            hh : function (number) {
                if (number === 2) {
                    return 'שעתיים';
                }
                return number + ' שעות';
            },
            d : 'יום',
            dd : function (number) {
                if (number === 2) {
                    return 'יומיים';
                }
                return number + ' ימים';
            },
            M : 'חודש',
            MM : function (number) {
                if (number === 2) {
                    return 'חודשיים';
                }
                return number + ' חודשים';
            },
            y : 'שנה',
            yy : function (number) {
                if (number === 2) {
                    return 'שנתיים';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' שנה';
                }
                return number + ' שנים';
            }
        }
    });

    //! moment.js locale configuration
    //! locale : hindi (hi)
    //! author : Mayank Singhal : https://github.com/mayanksinghal

    var hi__symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    hi__numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var hi = moment.defineLocale('hi', {
        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm बजे',
            LTS : 'A h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[कल] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[कल] LT',
            lastWeek : '[पिछले] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s में',
            past : '%s पहले',
            s : 'कुछ ही क्षण',
            m : 'एक मिनट',
            mm : '%d मिनट',
            h : 'एक घंटा',
            hh : '%d घंटे',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महीने',
            MM : '%d महीने',
            y : 'एक वर्ष',
            yy : '%d वर्ष'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return hi__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return hi__symbolMap[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सुबह') {
                return hour;
            } else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'शाम') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात';
            } else if (hour < 10) {
                return 'सुबह';
            } else if (hour < 17) {
                return 'दोपहर';
            } else if (hour < 20) {
                return 'शाम';
            } else {
                return 'रात';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : hrvatski (hr)
    //! author : Bojan Marković : https://github.com/bmarkovic

    function hr__translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
        }
    }

    var hr = moment.defineLocale('hr', {
        months : 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
        monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            m      : hr__translate,
            mm     : hr__translate,
            h      : hr__translate,
            hh     : hr__translate,
            d      : 'dan',
            dd     : hr__translate,
            M      : 'mjesec',
            MM     : hr__translate,
            y      : 'godinu',
            yy     : hr__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : hungarian (hu)
    //! author : Adam Brunner : https://github.com/adambrunner

    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function hu__translate(number, withoutSuffix, key, isFuture) {
        var num = number,
            suffix;
        switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    var hu = moment.defineLocale('hu', {
        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D. H:mm',
            LLLL : 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s múlva',
            past : '%s',
            s : hu__translate,
            m : hu__translate,
            mm : hu__translate,
            h : hu__translate,
            hh : hu__translate,
            d : hu__translate,
            dd : hu__translate,
            M : hu__translate,
            MM : hu__translate,
            y : hu__translate,
            yy : hu__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Armenian (hy-am)
    //! author : Armendarabyan : https://github.com/armendarabyan

    function hy_am__monthsCaseReplace(m, format) {
        var months = {
            'nominative': 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
            'accusative': 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_')
        },
        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
            'accusative' :
            'nominative';
        return months[nounCase][m.month()];
    }
    function hy_am__monthsShortCaseReplace(m, format) {
        var monthsShort = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');
        return monthsShort[m.month()];
    }
    function hy_am__weekdaysCaseReplace(m, format) {
        var weekdays = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_');
        return weekdays[m.day()];
    }

    var hy_am = moment.defineLocale('hy-am', {
        months : hy_am__monthsCaseReplace,
        monthsShort : hy_am__monthsShortCaseReplace,
        weekdays : hy_am__weekdaysCaseReplace,
        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY թ.',
            LLL : 'D MMMM YYYY թ., HH:mm',
            LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar : {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function () {
                return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function () {
                return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s հետո',
            past : '%s առաջ',
            s : 'մի քանի վայրկյան',
            m : 'րոպե',
            mm : '%d րոպե',
            h : 'ժամ',
            hh : '%d ժամ',
            d : 'օր',
            dd : '%d օր',
            M : 'ամիս',
            MM : '%d ամիս',
            y : 'տարի',
            yy : '%d տարի'
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (input) {
            return /^(ցերեկվա|երեկոյան)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return 'գիշերվա';
            } else if (hour < 12) {
                return 'առավոտվա';
            } else if (hour < 17) {
                return 'ցերեկվա';
            } else {
                return 'երեկոյան';
            }
        },
        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
                if (number === 1) {
                    return number + '-ին';
                }
                return number + '-րդ';
            default:
                return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Bahasa Indonesia (id)
    //! author : Mohammad Satrio Utomo : https://github.com/tyok
    //! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

    var id = moment.defineLocale('id', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'siang';
            } else if (hours < 19) {
                return 'sore';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Besok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kemarin pukul] LT',
            lastWeek : 'dddd [lalu pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lalu',
            s : 'beberapa detik',
            m : 'semenit',
            mm : '%d menit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : icelandic (is)
    //! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

    function is__plural(n) {
        if (n % 100 === 11) {
            return true;
        } else if (n % 10 === 1) {
            return false;
        }
        return true;
    }
    function is__translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
        case 'm':
            return withoutSuffix ? 'mínúta' : 'mínútu';
        case 'mm':
            if (is__plural(number)) {
                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
            } else if (withoutSuffix) {
                return result + 'mínúta';
            }
            return result + 'mínútu';
        case 'hh':
            if (is__plural(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }
            return result + 'klukkustund';
        case 'd':
            if (withoutSuffix) {
                return 'dagur';
            }
            return isFuture ? 'dag' : 'degi';
        case 'dd':
            if (is__plural(number)) {
                if (withoutSuffix) {
                    return result + 'dagar';
                }
                return result + (isFuture ? 'daga' : 'dögum');
            } else if (withoutSuffix) {
                return result + 'dagur';
            }
            return result + (isFuture ? 'dag' : 'degi');
        case 'M':
            if (withoutSuffix) {
                return 'mánuður';
            }
            return isFuture ? 'mánuð' : 'mánuði';
        case 'MM':
            if (is__plural(number)) {
                if (withoutSuffix) {
                    return result + 'mánuðir';
                }
                return result + (isFuture ? 'mánuði' : 'mánuðum');
            } else if (withoutSuffix) {
                return result + 'mánuður';
            }
            return result + (isFuture ? 'mánuð' : 'mánuði');
        case 'y':
            return withoutSuffix || isFuture ? 'ár' : 'ári';
        case 'yy':
            if (is__plural(number)) {
                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
            }
            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
        }
    }

    var is = moment.defineLocale('is', {
        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar : {
            sameDay : '[í dag kl.] LT',
            nextDay : '[á morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[í gær kl.] LT',
            lastWeek : '[síðasta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s síðan',
            s : is__translate,
            m : is__translate,
            mm : is__translate,
            h : 'klukkustund',
            hh : is__translate,
            d : is__translate,
            dd : is__translate,
            M : is__translate,
            MM : is__translate,
            y : is__translate,
            yy : is__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : italian (it)
    //! author : Lorenzo : https://github.com/aliem
    //! author: Mattia Larentis: https://github.com/nostalgiaz

    var it = moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
        weekdaysMin : 'D_L_Ma_Me_G_V_S'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        ordinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : japanese (ja)
    //! author : LI Long : https://github.com/baryon

    var ja = moment.defineLocale('ja', {
        months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
        longDateFormat : {
            LT : 'Ah時m分',
            LTS : 'Ah時m分s秒',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日Ah時m分',
            LLLL : 'YYYY年M月D日Ah時m分 dddd'
        },
        meridiemParse: /午前|午後/i,
        isPM : function (input) {
            return input === '午後';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '午前';
            } else {
                return '午後';
            }
        },
        calendar : {
            sameDay : '[今日] LT',
            nextDay : '[明日] LT',
            nextWeek : '[来週]dddd LT',
            lastDay : '[昨日] LT',
            lastWeek : '[前週]dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s後',
            past : '%s前',
            s : '数秒',
            m : '1分',
            mm : '%d分',
            h : '1時間',
            hh : '%d時間',
            d : '1日',
            dd : '%d日',
            M : '1ヶ月',
            MM : '%dヶ月',
            y : '1年',
            yy : '%d年'
        }
    });

    //! moment.js locale configuration
    //! locale : Boso Jowo (jv)
    //! author : Rony Lantip : https://github.com/lantip
    //! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

    var jv = moment.defineLocale('jv', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'enjing') {
                return hour;
            } else if (meridiem === 'siyang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'enjing';
            } else if (hours < 15) {
                return 'siyang';
            } else if (hours < 19) {
                return 'sonten';
            } else {
                return 'ndalu';
            }
        },
        calendar : {
            sameDay : '[Dinten puniko pukul] LT',
            nextDay : '[Mbenjang pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kala wingi pukul] LT',
            lastWeek : 'dddd [kepengker pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'wonten ing %s',
            past : '%s ingkang kepengker',
            s : 'sawetawis detik',
            m : 'setunggal menit',
            mm : '%d menit',
            h : 'setunggal jam',
            hh : '%d jam',
            d : 'sedinten',
            dd : '%d dinten',
            M : 'sewulan',
            MM : '%d wulan',
            y : 'setaun',
            yy : '%d taun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Georgian (ka)
    //! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

    function ka__monthsCaseReplace(m, format) {
        var months = {
            'nominative': 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            'accusative': 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        nounCase = (/D[oD] *MMMM?/).test(format) ?
            'accusative' :
            'nominative';
        return months[nounCase][m.month()];
    }
    function ka__weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            'accusative': 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_')
        },
        nounCase = (/(წინა|შემდეგ)/).test(format) ?
            'accusative' :
            'nominative';
        return weekdays[nounCase][m.day()];
    }

    var ka = moment.defineLocale('ka', {
        months : ka__monthsCaseReplace,
        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays : ka__weekdaysCaseReplace,
        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[დღეს] LT[-ზე]',
            nextDay : '[ხვალ] LT[-ზე]',
            lastDay : '[გუშინ] LT[-ზე]',
            nextWeek : '[შემდეგ] dddd LT[-ზე]',
            lastWeek : '[წინა] dddd LT-ზე',
            sameElse : 'L'
        },
        relativeTime : {
            future : function (s) {
                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                    s.replace(/ი$/, 'ში') :
                    s + 'ში';
            },
            past : function (s) {
                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                    return s.replace(/(ი|ე)$/, 'ის წინ');
                }
                if ((/წელი/).test(s)) {
                    return s.replace(/წელი$/, 'წლის წინ');
                }
            },
            s : 'რამდენიმე წამი',
            m : 'წუთი',
            mm : '%d წუთი',
            h : 'საათი',
            hh : '%d საათი',
            d : 'დღე',
            dd : '%d დღე',
            M : 'თვე',
            MM : '%d თვე',
            y : 'წელი',
            yy : '%d წელი'
        },
        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal : function (number) {
            if (number === 0) {
                return number;
            }
            if (number === 1) {
                return number + '-ლი';
            }
            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return 'მე-' + number;
            }
            return number + '-ე';
        },
        week : {
            dow : 1,
            doy : 7
        }
    });

    //! moment.js locale configuration
    //! locale : khmer (km)
    //! author : Kruy Vanna : https://github.com/kruyvanna

    var km = moment.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : korean (ko)
    //!
    //! authors
    //!
    //! - Kyungwook, Park : https://github.com/kyungw00k
    //! - Jeeeyul Lee <jeeeyul@gmail.com>

    var ko = moment.defineLocale('ko', {
        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
        longDateFormat : {
            LT : 'A h시 m분',
            LTS : 'A h시 m분 s초',
            L : 'YYYY.MM.DD',
            LL : 'YYYY년 MMMM D일',
            LLL : 'YYYY년 MMMM D일 A h시 m분',
            LLLL : 'YYYY년 MMMM D일 dddd A h시 m분'
        },
        calendar : {
            sameDay : '오늘 LT',
            nextDay : '내일 LT',
            nextWeek : 'dddd LT',
            lastDay : '어제 LT',
            lastWeek : '지난주 dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s 후',
            past : '%s 전',
            s : '몇초',
            ss : '%d초',
            m : '일분',
            mm : '%d분',
            h : '한시간',
            hh : '%d시간',
            d : '하루',
            dd : '%d일',
            M : '한달',
            MM : '%d달',
            y : '일년',
            yy : '%d년'
        },
        ordinalParse : /\d{1,2}일/,
        ordinal : '%d일',
        meridiemParse : /오전|오후/,
        isPM : function (token) {
            return token === '오후';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        }
    });

    //! moment.js locale configuration
    //! locale : Luxembourgish (lb)
    //! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

    function lb__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eng Minutt', 'enger Minutt'],
            'h': ['eng Stonn', 'enger Stonn'],
            'd': ['een Dag', 'engem Dag'],
            'M': ['ee Mount', 'engem Mount'],
            'y': ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'a ' + string;
        }
        return 'an ' + string;
    }
    function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'viru ' + string;
        }
        return 'virun ' + string;
    }
    /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
    function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
            return false;
        }
        if (number < 0) {
            // Negative Number --> always true
            return true;
        } else if (number < 10) {
            // Only 1 digit
            if (4 <= number && number <= 7) {
                return true;
            }
            return false;
        } else if (number < 100) {
            // 2 digits
            var lastDigit = number % 10, firstDigit = number / 10;
            if (lastDigit === 0) {
                return eifelerRegelAppliesToNumber(firstDigit);
            }
            return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
            // 3 or 4 digits --> recursively check first digit
            while (number >= 10) {
                number = number / 10;
            }
            return eifelerRegelAppliesToNumber(number);
        } else {
            // Anything larger than 4 digits: recursively check first n-3 digits
            number = number / 1000;
            return eifelerRegelAppliesToNumber(number);
        }
    }

    var lb = moment.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function () {
                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {
                    case 2:
                    case 4:
                        return '[Leschten] dddd [um] LT';
                    default:
                        return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime : {
            future : processFutureTime,
            past : processPastTime,
            s : 'e puer Sekonnen',
            m : lb__processRelativeTime,
            mm : '%d Minutten',
            h : lb__processRelativeTime,
            hh : '%d Stonnen',
            d : lb__processRelativeTime,
            dd : '%d Deeg',
            M : lb__processRelativeTime,
            MM : '%d Méint',
            y : lb__processRelativeTime,
            yy : '%d Joer'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Lithuanian (lt)
    //! author : Mindaugas Mozūras : https://github.com/mmozuras

    var lt__units = {
        'm' : 'minutė_minutės_minutę',
        'mm': 'minutės_minučių_minutes',
        'h' : 'valanda_valandos_valandą',
        'hh': 'valandos_valandų_valandas',
        'd' : 'diena_dienos_dieną',
        'dd': 'dienos_dienų_dienas',
        'M' : 'mėnuo_mėnesio_mėnesį',
        'MM': 'mėnesiai_mėnesių_mėnesius',
        'y' : 'metai_metų_metus',
        'yy': 'metai_metų_metus'
    },
    weekDays = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_');
    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundės';
        } else {
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
    }
    function lt__monthsCaseReplace(m, format) {
        var months = {
                'nominative': 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
                'accusative': 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_')
            },
            nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
                'accusative' :
                'nominative';
        return months[nounCase][m.month()];
    }
    function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    function special(number) {
        return number % 10 === 0 || (number > 10 && number < 20);
    }
    function forms(key) {
        return lt__units[key].split('_');
    }
    function lt__translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
            if (isFuture) {
                return result + forms(key)[1];
            } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    function relativeWeekDay(moment, format) {
        var nominative = format.indexOf('dddd HH:mm') === -1,
            weekDay = weekDays[moment.day()];
        return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + 'į';
    }

    var lt = moment.defineLocale('lt', {
        months : lt__monthsCaseReplace,
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : relativeWeekDay,
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY [m.] MMMM D [d.]',
            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l : 'YYYY-MM-DD',
            ll : 'YYYY [m.] MMMM D [d.]',
            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar : {
            sameDay : '[Šiandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[Praėjusį] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prieš %s',
            s : translateSeconds,
            m : translateSingular,
            mm : lt__translate,
            h : translateSingular,
            hh : lt__translate,
            d : translateSingular,
            dd : lt__translate,
            M : translateSingular,
            MM : lt__translate,
            y : translateSingular,
            yy : lt__translate
        },
        ordinalParse: /\d{1,2}-oji/,
        ordinal : function (number) {
            return number + '-oji';
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : latvian (lv)
    //! author : Kristaps Karlsons : https://github.com/skakri
    //! author : Jānis Elmeris : https://github.com/JanisE

    var lv__units = {
        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'h': 'stundas_stundām_stunda_stundas'.split('_'),
        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
        'd': 'dienas_dienām_diena_dienas'.split('_'),
        'dd': 'dienas_dienām_diena_dienas'.split('_'),
        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minūte", "3 minūtes".
            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minūtes" as in "pēc 21 minūtes".
            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
        }
    }
    function lv__relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(lv__units[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(lv__units[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
    }

    var lv = moment.defineLocale('lv', {
        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY.',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar : {
            sameDay : '[Šodien pulksten] LT',
            nextDay : '[Rīt pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[Pagājušā] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pēc %s',
            past : 'pirms %s',
            s : relativeSeconds,
            m : relativeTimeWithSingular,
            mm : lv__relativeTimeWithPlural,
            h : relativeTimeWithSingular,
            hh : lv__relativeTimeWithPlural,
            d : relativeTimeWithSingular,
            dd : lv__relativeTimeWithPlural,
            M : relativeTimeWithSingular,
            MM : lv__relativeTimeWithPlural,
            y : relativeTimeWithSingular,
            yy : lv__relativeTimeWithPlural
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Montenegrin (me)
    //! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

    var me__translator = {
        words: { //Different grammatical cases
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = me__translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + me__translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var me = moment.defineLocale('me', {
        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
        weekdays: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sri.', 'čet.', 'pet.', 'sub.'],
        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',

            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedjelje] [u] LT',
                    '[prošlog] [ponedjeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srijede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'nekoliko sekundi',
            m      : me__translator.translate,
            mm     : me__translator.translate,
            h      : me__translator.translate,
            hh     : me__translator.translate,
            d      : 'dan',
            dd     : me__translator.translate,
            M      : 'mjesec',
            MM     : me__translator.translate,
            y      : 'godinu',
            yy     : me__translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : macedonian (mk)
    //! author : Borislav Mickov : https://github.com/B0k0

    var mk = moment.defineLocale('mk', {
        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Денес во] LT',
            nextDay : '[Утре во] LT',
            nextWeek : 'dddd [во] LT',
            lastDay : '[Вчера во] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[Во изминатата] dddd [во] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[Во изминатиот] dddd [во] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'после %s',
            past : 'пред %s',
            s : 'неколку секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дена',
            M : 'месец',
            MM : '%d месеци',
            y : 'година',
            yy : '%d години'
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
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
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : malayalam (ml)
    //! author : Floyd Pink : https://github.com/floydpink

    var ml = moment.defineLocale('ml', {
        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -നു',
            LTS : 'A h:mm:ss -നു',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm -നു',
            LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar : {
            sameDay : '[ഇന്ന്] LT',
            nextDay : '[നാളെ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ഇന്നലെ] LT',
            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s കഴിഞ്ഞ്',
            past : '%s മുൻപ്',
            s : 'അൽപ നിമിഷങ്ങൾ',
            m : 'ഒരു മിനിറ്റ്',
            mm : '%d മിനിറ്റ്',
            h : 'ഒരു മണിക്കൂർ',
            hh : '%d മണിക്കൂർ',
            d : 'ഒരു ദിവസം',
            dd : '%d ദിവസം',
            M : 'ഒരു മാസം',
            MM : '%d മാസം',
            y : 'ഒരു വർഷം',
            yy : '%d വർഷം'
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        isPM : function (input) {
            return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'രാത്രി';
            } else if (hour < 12) {
                return 'രാവിലെ';
            } else if (hour < 17) {
                return 'ഉച്ച കഴിഞ്ഞ്';
            } else if (hour < 20) {
                return 'വൈകുന്നേരം';
            } else {
                return 'രാത്രി';
            }
        }
    });

    //! moment.js locale configuration
    //! locale : Marathi (mr)
    //! author : Harshad Kale : https://github.com/kalehv

    var mr__symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    mr__numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var mr = moment.defineLocale('mr', {
        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm वाजता',
            LTS : 'A h:mm:ss वाजता',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm वाजता',
            LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[उद्या] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s नंतर',
            past : '%s पूर्वी',
            s : 'सेकंद',
            m: 'एक मिनिट',
            mm: '%d मिनिटे',
            h : 'एक तास',
            hh : '%d तास',
            d : 'एक दिवस',
            dd : '%d दिवस',
            M : 'एक महिना',
            MM : '%d महिने',
            y : 'एक वर्ष',
            yy : '%d वर्षे'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return mr__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return mr__symbolMap[match];
            });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात्री') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सकाळी') {
                return hour;
            } else if (meridiem === 'दुपारी') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'सायंकाळी') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात्री';
            } else if (hour < 10) {
                return 'सकाळी';
            } else if (hour < 17) {
                return 'दुपारी';
            } else if (hour < 20) {
                return 'सायंकाळी';
            } else {
                return 'रात्री';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Bahasa Malaysia (ms-MY)
    //! author : Weldan Jamili : https://github.com/weldan

    var ms_my = moment.defineLocale('ms-my', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Bahasa Malaysia (ms-MY)
    //! author : Weldan Jamili : https://github.com/weldan

    var ms = moment.defineLocale('ms', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Burmese (my)
    //! author : Squar team, mysquar.com

    var my__symbolMap = {
        '1': '၁',
        '2': '၂',
        '3': '၃',
        '4': '၄',
        '5': '၅',
        '6': '၆',
        '7': '၇',
        '8': '၈',
        '9': '၉',
        '0': '၀'
    }, my__numberMap = {
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        '၀': '0'
    };

    var my = moment.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်'
        },
        preparse: function (string) {
            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
                return my__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return my__symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : norwegian bokmål (nb)
    //! authors : Espen Hovlandsdal : https://github.com/rexxars
    //!           Sigurd Gartmann : https://github.com/sigurdga

    var nb = moment.defineLocale('nb', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'søn_man_tirs_ons_tors_fre_lør'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'H.mm',
            LTS : 'H.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H.mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] H.mm'
        },
        calendar : {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'for %s siden',
            s : 'noen sekunder',
            m : 'ett minutt',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dager',
            M : 'en måned',
            MM : '%d måneder',
            y : 'ett år',
            yy : '%d år'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : nepali/nepalese
    //! author : suvash : https://github.com/suvash

    var ne__symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    ne__numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var ne = moment.defineLocale('ne', {
        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin : 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),
        longDateFormat : {
            LT : 'Aको h:mm बजे',
            LTS : 'Aको h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, Aको h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return ne__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return ne__symbolMap[match];
            });
        },
        meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'राती') {
                return hour < 3 ? hour : hour + 12;
            } else if (meridiem === 'बिहान') {
                return hour;
            } else if (meridiem === 'दिउँसो') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'बेलुका' || meridiem === 'साँझ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 3) {
                return 'राती';
            } else if (hour < 10) {
                return 'बिहान';
            } else if (hour < 15) {
                return 'दिउँसो';
            } else if (hour < 18) {
                return 'बेलुका';
            } else if (hour < 20) {
                return 'साँझ';
            } else {
                return 'राती';
            }
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[भोली] LT',
            nextWeek : '[आउँदो] dddd[,] LT',
            lastDay : '[हिजो] LT',
            lastWeek : '[गएको] dddd[,] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sमा',
            past : '%s अगाडी',
            s : 'केही समय',
            m : 'एक मिनेट',
            mm : '%d मिनेट',
            h : 'एक घण्टा',
            hh : '%d घण्टा',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महिना',
            MM : '%d महिना',
            y : 'एक बर्ष',
            yy : '%d बर्ष'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : dutch (nl)
    //! author : Joris Röling : https://github.com/jjupiter

    var nl__monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        nl__monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var nl = moment.defineLocale('nl', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return nl__monthsShortWithoutDots[m.month()];
            } else {
                return nl__monthsShortWithDots[m.month()];
            }
        },
        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : norwegian nynorsk (nn)
    //! author : https://github.com/mechuwind

    var nn = moment.defineLocale('nn', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'for %s sidan',
            s : 'nokre sekund',
            m : 'eit minutt',
            mm : '%d minutt',
            h : 'ein time',
            hh : '%d timar',
            d : 'ein dag',
            dd : '%d dagar',
            M : 'ein månad',
            MM : '%d månader',
            y : 'eit år',
            yy : '%d år'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : polish (pl)
    //! author : Rafal Hirsz : https://github.com/evoL

    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function pl__plural(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }
    function pl__translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (pl__plural(number) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix  ? 'godzina'  : 'godzinę';
        case 'hh':
            return result + (pl__plural(number) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (pl__plural(number) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (pl__plural(number) ? 'lata' : 'lat');
        }
    }

    var pl = moment.defineLocale('pl', {
        months : function (momentToFormat, format) {
            if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
            } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
        weekdaysMin : 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: '[W] dddd [o] LT',
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : '%s temu',
            s : 'kilka sekund',
            m : pl__translate,
            mm : pl__translate,
            h : pl__translate,
            hh : pl__translate,
            d : '1 dzień',
            dd : '%d dni',
            M : 'miesiąc',
            MM : pl__translate,
            y : 'rok',
            yy : pl__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : brazilian portuguese (pt-br)
    //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

    var pt_br = moment.defineLocale('pt-br', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : '%s atrás',
            s : 'poucos segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinalParse: /\d{1,2}º/,
        ordinal : '%dº'
    });

    //! moment.js locale configuration
    //! locale : portuguese (pt)
    //! author : Jefferson : https://github.com/jalex79

    var pt = moment.defineLocale('pt', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinalParse: /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : romanian (ro)
    //! author : Vlad Gurdiga : https://github.com/gurdiga
    //! author : Valentin Agachi : https://github.com/avaly

    function ro__relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
                'mm': 'minute',
                'hh': 'ore',
                'dd': 'zile',
                'MM': 'luni',
                'yy': 'ani'
            },
            separator = ' ';
        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
            separator = ' de ';
        }
        return number + separator + format[key];
    }

    var ro = moment.defineLocale('ro', {
        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'peste %s',
            past : '%s în urmă',
            s : 'câteva secunde',
            m : 'un minut',
            mm : ro__relativeTimeWithPlural,
            h : 'o oră',
            hh : ro__relativeTimeWithPlural,
            d : 'o zi',
            dd : ro__relativeTimeWithPlural,
            M : 'o lună',
            MM : ro__relativeTimeWithPlural,
            y : 'un an',
            yy : ro__relativeTimeWithPlural
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : russian (ru)
    //! author : Viktorminator : https://github.com/Viktorminator
    //! Author : Menelion Elensúle : https://github.com/Oire

    function ru__plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function ru__relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            'hh': 'час_часа_часов',
            'dd': 'день_дня_дней',
            'MM': 'месяц_месяца_месяцев',
            'yy': 'год_года_лет'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        else {
            return number + ' ' + ru__plural(format[key], +number);
        }
    }
    function ru__monthsCaseReplace(m, format) {
        var months = {
            'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
            'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
        },
        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
            'accusative' :
            'nominative';
        return months[nounCase][m.month()];
    }
    function ru__monthsShortCaseReplace(m, format) {
        var monthsShort = {
            'nominative': 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
            'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
        },
        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
            'accusative' :
            'nominative';
        return monthsShort[nounCase][m.month()];
    }
    function ru__weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
        },
        nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/).test(format) ?
            'accusative' :
            'nominative';
        return weekdays[nounCase][m.day()];
    }

    var ru = moment.defineLocale('ru', {
        months : ru__monthsCaseReplace,
        monthsShort : ru__monthsShortCaseReplace,
        weekdays : ru__weekdaysCaseReplace,
        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse : [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., HH:mm',
            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar : {
            sameDay: '[Сегодня в] LT',
            nextDay: '[Завтра в] LT',
            lastDay: '[Вчера в] LT',
            nextWeek: function () {
                return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd [в] LT';
                    } else {
                        return '[В] dddd [в] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'через %s',
            past : '%s назад',
            s : 'несколько секунд',
            m : ru__relativeTimeWithPlural,
            mm : ru__relativeTimeWithPlural,
            h : 'час',
            hh : ru__relativeTimeWithPlural,
            d : 'день',
            dd : ru__relativeTimeWithPlural,
            M : 'месяц',
            MM : ru__relativeTimeWithPlural,
            y : 'год',
            yy : ru__relativeTimeWithPlural
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM : function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            } else if (hour < 12) {
                return 'утра';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечера';
            }
        },
        ordinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return number + '-й';
            case 'D':
                return number + '-го';
            case 'w':
            case 'W':
                return number + '-я';
            default:
                return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Sinhalese (si)
    //! author : Sampath Sitinamaluwa : https://github.com/sampathsris

    var si = moment.defineLocale('si', {
        months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        longDateFormat : {
            LT : 'a h:mm',
            LTS : 'a h:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY MMMM D',
            LLL : 'YYYY MMMM D, a h:mm',
            LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar : {
            sameDay : '[අද] LT[ට]',
            nextDay : '[හෙට] LT[ට]',
            nextWeek : 'dddd LT[ට]',
            lastDay : '[ඊයේ] LT[ට]',
            lastWeek : '[පසුගිය] dddd LT[ට]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sකින්',
            past : '%sකට පෙර',
            s : 'තත්පර කිහිපය',
            m : 'මිනිත්තුව',
            mm : 'මිනිත්තු %d',
            h : 'පැය',
            hh : 'පැය %d',
            d : 'දිනය',
            dd : 'දින %d',
            M : 'මාසය',
            MM : 'මාස %d',
            y : 'වසර',
            yy : 'වසර %d'
        },
        ordinalParse: /\d{1,2} වැනි/,
        ordinal : function (number) {
            return number + ' වැනි';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'ප.ව.' : 'පස් වරු';
            } else {
                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
            }
        }
    });

    //! moment.js locale configuration
    //! locale : slovak (sk)
    //! author : Martin Minka : https://github.com/k2s
    //! based on work of petrbela : https://github.com/petrbela

    var sk__months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        sk__monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function sk__plural(n) {
        return (n > 1) && (n < 5);
    }
    function sk__translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'minúty' : 'minút');
            } else {
                return result + 'minútami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'hodiny' : 'hodín');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'dni' : 'dní');
            } else {
                return result + 'dňami';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'mesiace' : 'mesiacov');
            } else {
                return result + 'mesiacmi';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'roky' : 'rokov');
            } else {
                return result + 'rokmi';
            }
            break;
        }
    }

    var sk = moment.defineLocale('sk', {
        months : sk__months,
        monthsShort : sk__monthsShort,
        monthsParse : (function (months, monthsShort) {
            var i, _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (červenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(sk__months, sk__monthsShort)),
        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v nedeľu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo štvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                    return '[minulý] dddd [o] LT';
                case 3:
                    return '[minulú stredu o] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [o] LT';
                case 6:
                    return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'pred %s',
            s : sk__translate,
            m : sk__translate,
            mm : sk__translate,
            h : sk__translate,
            hh : sk__translate,
            d : sk__translate,
            dd : sk__translate,
            M : sk__translate,
            MM : sk__translate,
            y : sk__translate,
            yy : sk__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : slovenian (sl)
    //! author : Robert Sedovšek : https://github.com/sedovsek

    function sl__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            } else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            } else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            } else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            } else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            } else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
        }
    }

    var sl = moment.defineLocale('sl', {
        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danes ob] LT',
            nextDay  : '[jutri ob] LT',

            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
                }
            },
            lastDay  : '[včeraj ob] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'čez %s',
            past   : 'pred %s',
            s      : sl__processRelativeTime,
            m      : sl__processRelativeTime,
            mm     : sl__processRelativeTime,
            h      : sl__processRelativeTime,
            hh     : sl__processRelativeTime,
            d      : sl__processRelativeTime,
            dd     : sl__processRelativeTime,
            M      : sl__processRelativeTime,
            MM     : sl__processRelativeTime,
            y      : sl__processRelativeTime,
            yy     : sl__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Albanian (sq)
    //! author : Flakërim Ismani : https://github.com/flakerimi
    //! author: Menelion Elensúle: https://github.com/Oire (tests)
    //! author : Oerd Cukalla : https://github.com/oerd (fixes)

    var sq = moment.defineLocale('sq', {
        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
        meridiemParse: /PD|MD/,
        isPM: function (input) {
            return input.charAt(0) === 'M';
        },
        meridiem : function (hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Sot në] LT',
            nextDay : '[Nesër në] LT',
            nextWeek : 'dddd [në] LT',
            lastDay : '[Dje në] LT',
            lastWeek : 'dddd [e kaluar në] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'në %s',
            past : '%s më parë',
            s : 'disa sekonda',
            m : 'një minutë',
            mm : '%d minuta',
            h : 'një orë',
            hh : '%d orë',
            d : 'një ditë',
            dd : '%d ditë',
            M : 'një muaj',
            MM : '%d muaj',
            y : 'një vit',
            yy : '%d vite'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Serbian-cyrillic (sr-cyrl)
    //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

    var sr_cyrl__translator = {
        words: { //Different grammatical cases
            m: ['један минут', 'једне минуте'],
            mm: ['минут', 'минуте', 'минута'],
            h: ['један сат', 'једног сата'],
            hh: ['сат', 'сата', 'сати'],
            dd: ['дан', 'дана', 'дана'],
            MM: ['месец', 'месеца', 'месеци'],
            yy: ['година', 'године', 'година']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = sr_cyrl__translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + sr_cyrl__translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var sr_cyrl = moment.defineLocale('sr-cyrl', {
        months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
        monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
        weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
        weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],
        weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[данас у] LT',
            nextDay: '[сутра у] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[у] [недељу] [у] LT';
                case 3:
                    return '[у] [среду] [у] LT';
                case 6:
                    return '[у] [суботу] [у] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[у] dddd [у] LT';
                }
            },
            lastDay  : '[јуче у] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[прошле] [недеље] [у] LT',
                    '[прошлог] [понедељка] [у] LT',
                    '[прошлог] [уторка] [у] LT',
                    '[прошле] [среде] [у] LT',
                    '[прошлог] [четвртка] [у] LT',
                    '[прошлог] [петка] [у] LT',
                    '[прошле] [суботе] [у] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'за %s',
            past   : 'пре %s',
            s      : 'неколико секунди',
            m      : sr_cyrl__translator.translate,
            mm     : sr_cyrl__translator.translate,
            h      : sr_cyrl__translator.translate,
            hh     : sr_cyrl__translator.translate,
            d      : 'дан',
            dd     : sr_cyrl__translator.translate,
            M      : 'месец',
            MM     : sr_cyrl__translator.translate,
            y      : 'годину',
            yy     : sr_cyrl__translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Serbian-latin (sr)
    //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

    var sr__translator = {
        words: { //Different grammatical cases
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = sr__translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + sr__translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var sr = moment.defineLocale('sr', {
        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
        weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedelju] [u] LT';
                case 3:
                    return '[u] [sredu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedelje] [u] LT',
                    '[prošlog] [ponedeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'pre %s',
            s      : 'nekoliko sekundi',
            m      : sr__translator.translate,
            mm     : sr__translator.translate,
            h      : sr__translator.translate,
            hh     : sr__translator.translate,
            d      : 'dan',
            dd     : sr__translator.translate,
            M      : 'mesec',
            MM     : sr__translator.translate,
            y      : 'godinu',
            yy     : sr__translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : swedish (sv)
    //! author : Jens Alm : https://github.com/ulmus

    var sv = moment.defineLocale('sv', {
        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'för %s sedan',
            s : 'några sekunder',
            m : 'en minut',
            mm : '%d minuter',
            h : 'en timme',
            hh : '%d timmar',
            d : 'en dag',
            dd : '%d dagar',
            M : 'en månad',
            MM : '%d månader',
            y : 'ett år',
            yy : '%d år'
        },
        ordinalParse: /\d{1,2}(e|a)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                (b === 3) ? 'e' : 'e';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : tamil (ta)
    //! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

    var ta = moment.defineLocale('ta', {
        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, HH:mm',
            LLLL : 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar : {
            sameDay : '[இன்று] LT',
            nextDay : '[நாளை] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[நேற்று] LT',
            lastWeek : '[கடந்த வாரம்] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s இல்',
            past : '%s முன்',
            s : 'ஒரு சில விநாடிகள்',
            m : 'ஒரு நிமிடம்',
            mm : '%d நிமிடங்கள்',
            h : 'ஒரு மணி நேரம்',
            hh : '%d மணி நேரம்',
            d : 'ஒரு நாள்',
            dd : '%d நாட்கள்',
            M : 'ஒரு மாதம்',
            MM : '%d மாதங்கள்',
            y : 'ஒரு வருடம்',
            yy : '%d ஆண்டுகள்'
        },
        ordinalParse: /\d{1,2}வது/,
        ordinal : function (number) {
            return number + 'வது';
        },
        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem : function (hour, minute, isLower) {
            if (hour < 2) {
                return ' யாமம்';
            } else if (hour < 6) {
                return ' வைகறை';  // வைகறை
            } else if (hour < 10) {
                return ' காலை'; // காலை
            } else if (hour < 14) {
                return ' நண்பகல்'; // நண்பகல்
            } else if (hour < 18) {
                return ' எற்பாடு'; // எற்பாடு
            } else if (hour < 22) {
                return ' மாலை'; // மாலை
            } else {
                return ' யாமம்';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'யாமம்') {
                return hour < 2 ? hour : hour + 12;
            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
                return hour;
            } else if (meridiem === 'நண்பகல்') {
                return hour >= 10 ? hour : hour + 12;
            } else {
                return hour + 12;
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : thai (th)
    //! author : Kridsada Thanabulpong : https://github.com/sirn

    var th = moment.defineLocale('th', {
        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort : 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        longDateFormat : {
            LT : 'H นาฬิกา m นาที',
            LTS : 'H นาฬิกา m นาที s วินาที',
            L : 'YYYY/MM/DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY เวลา H นาฬิกา m นาที',
            LLLL : 'วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (input) {
            return input === 'หลังเที่ยง';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ก่อนเที่ยง';
            } else {
                return 'หลังเที่ยง';
            }
        },
        calendar : {
            sameDay : '[วันนี้ เวลา] LT',
            nextDay : '[พรุ่งนี้ เวลา] LT',
            nextWeek : 'dddd[หน้า เวลา] LT',
            lastDay : '[เมื่อวานนี้ เวลา] LT',
            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'อีก %s',
            past : '%sที่แล้ว',
            s : 'ไม่กี่วินาที',
            m : '1 นาที',
            mm : '%d นาที',
            h : '1 ชั่วโมง',
            hh : '%d ชั่วโมง',
            d : '1 วัน',
            dd : '%d วัน',
            M : '1 เดือน',
            MM : '%d เดือน',
            y : '1 ปี',
            yy : '%d ปี'
        }
    });

    //! moment.js locale configuration
    //! locale : Tagalog/Filipino (tl-ph)
    //! author : Dan Hagman

    var tl_ph = moment.defineLocale('tl-ph', {
        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'MM/D/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY HH:mm',
            LLLL : 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Ngayon sa] LT',
            nextDay: '[Bukas sa] LT',
            nextWeek: 'dddd [sa] LT',
            lastDay: '[Kahapon sa] LT',
            lastWeek: 'dddd [huling linggo] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'sa loob ng %s',
            past : '%s ang nakalipas',
            s : 'ilang segundo',
            m : 'isang minuto',
            mm : '%d minuto',
            h : 'isang oras',
            hh : '%d oras',
            d : 'isang araw',
            dd : '%d araw',
            M : 'isang buwan',
            MM : '%d buwan',
            y : 'isang taon',
            yy : '%d taon'
        },
        ordinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : turkish (tr)
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak Yiğit Kaya: https://github.com/BYK

    var tr__suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };

    var tr = moment.defineLocale('tr', {
        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[yarın saat] LT',
            nextWeek : '[haftaya] dddd [saat] LT',
            lastDay : '[dün] LT',
            lastWeek : '[geçen hafta] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s önce',
            s : 'birkaç saniye',
            m : 'bir dakika',
            mm : '%d dakika',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir yıl',
            yy : '%d yıl'
        },
        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '\'ıncı';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (tr__suffixes[a] || tr__suffixes[b] || tr__suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : talossan (tzl)
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v with the help of Iustì Canun


    var tzl = moment.defineLocale('tzl', {
        months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'LT.ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM [dallas] YYYY',
            LLL : 'D. MMMM [dallas] YYYY LT',
            LLLL : 'dddd, [li] D. MMMM [dallas] YYYY LT'
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'd\'o' : 'D\'O';
            } else {
                return isLower ? 'd\'a' : 'D\'A';
            }
        },
        calendar : {
            sameDay : '[oxhi à] LT',
            nextDay : '[demà à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[ieiri à] LT',
            lastWeek : '[sür el] dddd [lasteu à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'osprei %s',
            past : 'ja%s',
            s : tzl__processRelativeTime,
            m : tzl__processRelativeTime,
            mm : tzl__processRelativeTime,
            h : tzl__processRelativeTime,
            hh : tzl__processRelativeTime,
            d : tzl__processRelativeTime,
            dd : tzl__processRelativeTime,
            M : tzl__processRelativeTime,
            MM : tzl__processRelativeTime,
            y : tzl__processRelativeTime,
            yy : tzl__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    function tzl__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['viensas secunds', '\'iensas secunds'],
            'm': ['\'n míut', '\'iens míut'],
            'mm': [number + ' míuts', ' ' + number + ' míuts'],
            'h': ['\'n þora', '\'iensa þora'],
            'hh': [number + ' þoras', ' ' + number + ' þoras'],
            'd': ['\'n ziua', '\'iensa ziua'],
            'dd': [number + ' ziuas', ' ' + number + ' ziuas'],
            'M': ['\'n mes', '\'iens mes'],
            'MM': [number + ' mesen', ' ' + number + ' mesen'],
            'y': ['\'n ar', '\'iens ar'],
            'yy': [number + ' ars', ' ' + number + ' ars']
        };
        return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1].trim());
    }

    //! moment.js locale configuration
    //! locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
    //! author : Abdel Said : https://github.com/abdelsaid

    var tzm_latn = moment.defineLocale('tzm-latn', {
        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dadkh s yan %s',
            past : 'yan %s',
            s : 'imik',
            m : 'minuḍ',
            mm : '%d minuḍ',
            h : 'saɛa',
            hh : '%d tassaɛin',
            d : 'ass',
            dd : '%d ossan',
            M : 'ayowr',
            MM : '%d iyyirn',
            y : 'asgas',
            yy : '%d isgasn'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Morocco Central Atlas Tamaziɣt (tzm)
    //! author : Abdel Said : https://github.com/abdelsaid

    var tzm = moment.defineLocale('tzm', {
        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
            nextWeek: 'dddd [ⴴ] LT',
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
            lastWeek: 'dddd [ⴴ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
            past : 'ⵢⴰⵏ %s',
            s : 'ⵉⵎⵉⴽ',
            m : 'ⵎⵉⵏⵓⴺ',
            mm : '%d ⵎⵉⵏⵓⴺ',
            h : 'ⵙⴰⵄⴰ',
            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
            d : 'ⴰⵙⵙ',
            dd : '%d oⵙⵙⴰⵏ',
            M : 'ⴰⵢoⵓⵔ',
            MM : '%d ⵉⵢⵢⵉⵔⵏ',
            y : 'ⴰⵙⴳⴰⵙ',
            yy : '%d ⵉⵙⴳⴰⵙⵏ'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : ukrainian (uk)
    //! author : zemlanin : https://github.com/zemlanin
    //! Author : Menelion Elensúle : https://github.com/Oire

    function uk__plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function uk__relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': 'хвилина_хвилини_хвилин',
            'hh': 'година_години_годин',
            'dd': 'день_дні_днів',
            'MM': 'місяць_місяці_місяців',
            'yy': 'рік_роки_років'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвилина' : 'хвилину';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'година' : 'годину';
        }
        else {
            return number + ' ' + uk__plural(format[key], +number);
        }
    }
    function uk__monthsCaseReplace(m, format) {
        var months = {
            'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
            'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
        },
        nounCase = (/D[oD]? *MMMM?/).test(format) ?
            'accusative' :
            'nominative';
        return months[nounCase][m.month()];
    }
    function uk__weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
        },
        nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
            'accusative' :
            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
                'genitive' :
                'nominative');
        return weekdays[nounCase][m.day()];
    }
    function processHoursFunction(str) {
        return function () {
            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
        };
    }

    var uk = moment.defineLocale('uk', {
        months : uk__monthsCaseReplace,
        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays : uk__weekdaysCaseReplace,
        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY р.',
            LLL : 'D MMMM YYYY р., HH:mm',
            LLLL : 'dddd, D MMMM YYYY р., HH:mm'
        },
        calendar : {
            sameDay: processHoursFunction('[Сьогодні '),
            nextDay: processHoursFunction('[Завтра '),
            lastDay: processHoursFunction('[Вчора '),
            nextWeek: processHoursFunction('[У] dddd ['),
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return processHoursFunction('[Минулої] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                    return processHoursFunction('[Минулого] dddd [').call(this);
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'за %s',
            past : '%s тому',
            s : 'декілька секунд',
            m : uk__relativeTimeWithPlural,
            mm : uk__relativeTimeWithPlural,
            h : 'годину',
            hh : uk__relativeTimeWithPlural,
            d : 'день',
            dd : uk__relativeTimeWithPlural,
            M : 'місяць',
            MM : uk__relativeTimeWithPlural,
            y : 'рік',
            yy : uk__relativeTimeWithPlural
        },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (input) {
            return /^(дня|вечора)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночі';
            } else if (hour < 12) {
                return 'ранку';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечора';
            }
        },
        ordinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return number + '-й';
            case 'D':
                return number + '-го';
            default:
                return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : uzbek (uz)
    //! author : Sardor Muminov : https://github.com/muminoff

    var uz = moment.defineLocale('uz', {
        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[Бугун соат] LT [да]',
            nextDay : '[Эртага] LT [да]',
            nextWeek : 'dddd [куни соат] LT [да]',
            lastDay : '[Кеча соат] LT [да]',
            lastWeek : '[Утган] dddd [куни соат] LT [да]',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Якин %s ичида',
            past : 'Бир неча %s олдин',
            s : 'фурсат',
            m : 'бир дакика',
            mm : '%d дакика',
            h : 'бир соат',
            hh : '%d соат',
            d : 'бир кун',
            dd : '%d кун',
            M : 'бир ой',
            MM : '%d ой',
            y : 'бир йил',
            yy : '%d йил'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : vietnamese (vi)
    //! author : Bang Nguyen : https://github.com/bangnk

    var vi = moment.defineLocale('vi', {
        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [năm] YYYY',
            LLL : 'D MMMM [năm] YYYY HH:mm',
            LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
            l : 'DD/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hôm nay lúc] LT',
            nextDay: '[Ngày mai lúc] LT',
            nextWeek: 'dddd [tuần tới lúc] LT',
            lastDay: '[Hôm qua lúc] LT',
            lastWeek: 'dddd [tuần rồi lúc] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s tới',
            past : '%s trước',
            s : 'vài giây',
            m : 'một phút',
            mm : '%d phút',
            h : 'một giờ',
            hh : '%d giờ',
            d : 'một ngày',
            dd : '%d ngày',
            M : 'một tháng',
            MM : '%d tháng',
            y : 'một năm',
            yy : '%d năm'
        },
        ordinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : chinese (zh-cn)
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng

    var zh_cn = moment.defineLocale('zh-cn', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'Ah点mm分',
            LTS : 'Ah点m分s秒',
            L : 'YYYY-MM-DD',
            LL : 'YYYY年MMMD日',
            LLL : 'YYYY年MMMD日Ah点mm分',
            LLLL : 'YYYY年MMMD日ddddAh点mm分',
            l : 'YYYY-MM-DD',
            ll : 'YYYY年MMMD日',
            lll : 'YYYY年MMMD日Ah点mm分',
            llll : 'YYYY年MMMD日ddddAh点mm分'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                    meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : function () {
                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
            },
            nextDay : function () {
                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
            },
            lastDay : function () {
                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
            },
            nextWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
            },
            lastWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
            },
            sameElse : 'LL'
        },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            case 'M':
                return number + '月';
            case 'w':
            case 'W':
                return number + '周';
            default:
                return number;
            }
        },
        relativeTime : {
            future : '%s内',
            past : '%s前',
            s : '几秒',
            m : '1 分钟',
            mm : '%d 分钟',
            h : '1 小时',
            hh : '%d 小时',
            d : '1 天',
            dd : '%d 天',
            M : '1 个月',
            MM : '%d 个月',
            y : '1 年',
            yy : '%d 年'
        },
        week : {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : traditional chinese (zh-tw)
    //! author : Ben : https://github.com/ben-lin

    var zh_tw = moment.defineLocale('zh-tw', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'Ah點mm分',
            LTS : 'Ah點m分s秒',
            L : 'YYYY年MMMD日',
            LL : 'YYYY年MMMD日',
            LLL : 'YYYY年MMMD日Ah點mm分',
            LLLL : 'YYYY年MMMD日ddddAh點mm分',
            l : 'YYYY年MMMD日',
            ll : 'YYYY年MMMD日',
            lll : 'YYYY年MMMD日Ah點mm分',
            llll : 'YYYY年MMMD日ddddAh點mm分'
        },
        meridiemParse: /早上|上午|中午|下午|晚上/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天]LT',
            nextDay : '[明天]LT',
            nextWeek : '[下]ddddLT',
            lastDay : '[昨天]LT',
            lastWeek : '[上]ddddLT',
            sameElse : 'L'
        },
        ordinalParse: /\d{1,2}(日|月|週)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + '日';
            case 'M' :
                return number + '月';
            case 'w' :
            case 'W' :
                return number + '週';
            default :
                return number;
            }
        },
        relativeTime : {
            future : '%s內',
            past : '%s前',
            s : '幾秒',
            m : '一分鐘',
            mm : '%d分鐘',
            h : '一小時',
            hh : '%d小時',
            d : '一天',
            dd : '%d天',
            M : '一個月',
            MM : '%d個月',
            y : '一年',
            yy : '%d年'
        }
    });



}));