// Czech [cs]
import dayjs from '../index';

function plural(n) {
  return n > 1 && n < 5 && ~~(n / 10) !== 1; // eslint-disable-line
}
/* eslint-disable */


function translate(number, withoutSuffix, key, isFuture) {
  var result = number + " ";

  switch (key) {
    case 's':
      // a few seconds / in a few seconds / a few seconds ago
      return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';

    case 'm':
      // a minute / in a minute / a minute ago
      return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';

    case 'mm':
      // 9 minutes / in 9 minutes / 9 minutes ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'minuty' : 'minut');
      }

      return result + "minutami";

    case 'h':
      // an hour / in an hour / an hour ago
      return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

    case 'hh':
      // 9 hours / in 9 hours / 9 hours ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'hodiny' : 'hodin');
      }

      return result + "hodinami";

    case 'd':
      // a day / in a day / a day ago
      return withoutSuffix || isFuture ? 'den' : 'dnem';

    case 'dd':
      // 9 days / in 9 days / 9 days ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'dny' : 'dní');
      }

      return result + "dny";

    case 'M':
      // a month / in a month / a month ago
      return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';

    case 'MM':
      // 9 months / in 9 months / 9 months ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'měsíce' : 'měsíců');
      }

      return result + "m\u011Bs\xEDci";

    case 'y':
      // a year / in a year / a year ago
      return withoutSuffix || isFuture ? 'rok' : 'rokem';

    case 'yy':
      // 9 years / in 9 years / 9 years ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'roky' : 'let');
      }

      return result + "lety";
  }
}
/* eslint-enable */


var locale = {
  name: 'cs',
  weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
  weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
  weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
  months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
  monthsShort: 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
  weekStart: 1,
  yearStart: 4,
  ordinal: function ordinal(n) {
    return n + ".";
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm',
    l: 'D. M. YYYY'
  },
  relativeTime: {
    future: 'za %s',
    past: 'před %s',
    s: translate,
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: translate,
    dd: translate,
    M: translate,
    MM: translate,
    y: translate,
    yy: translate
  }
};
dayjs.locale(locale, null, true);
export default locale;