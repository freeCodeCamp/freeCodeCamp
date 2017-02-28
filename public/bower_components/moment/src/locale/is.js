//! moment.js locale configuration
//! locale : icelandic (is)
//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

import moment from '../moment';

function plural(n) {
    if (n % 100 === 11) {
        return true;
    } else if (n % 10 === 1) {
        return false;
    }
    return true;
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
    case 's':
        return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
    case 'm':
        return withoutSuffix ? 'mínúta' : 'mínútu';
    case 'mm':
        if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
        } else if (withoutSuffix) {
            return result + 'mínúta';
        }
        return result + 'mínútu';
    case 'hh':
        if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
        }
        return result + 'klukkustund';
    case 'd':
        if (withoutSuffix) {
            return 'dagur';
        }
        return isFuture ? 'dag' : 'degi';
    case 'dd':
        if (plural(number)) {
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
        if (plural(number)) {
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
        if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
        }
        return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
    }
}

export default moment.defineLocale('is', {
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
        s : translate,
        m : translate,
        mm : translate,
        h : 'klukkustund',
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

