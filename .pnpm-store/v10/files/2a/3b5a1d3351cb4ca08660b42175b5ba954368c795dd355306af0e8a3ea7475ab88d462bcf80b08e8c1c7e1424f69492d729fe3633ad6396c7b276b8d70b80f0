// Hungarian [hu]
import dayjs from '../index';
var locale = {
  name: 'hu',
  weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
  weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
  weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
  months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
  monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: '%s múlva',
    past: '%s',
    s: function s(_, _s, ___, isFuture) {
      return "n\xE9h\xE1ny m\xE1sodperc" + (isFuture || _s ? '' : 'e');
    },
    m: function m(_, s, ___, isFuture) {
      return "egy perc" + (isFuture || s ? '' : 'e');
    },
    mm: function mm(n, s, ___, isFuture) {
      return n + " perc" + (isFuture || s ? '' : 'e');
    },
    h: function h(_, s, ___, isFuture) {
      return "egy " + (isFuture || s ? 'óra' : 'órája');
    },
    hh: function hh(n, s, ___, isFuture) {
      return n + " " + (isFuture || s ? 'óra' : 'órája');
    },
    d: function d(_, s, ___, isFuture) {
      return "egy " + (isFuture || s ? 'nap' : 'napja');
    },
    dd: function dd(n, s, ___, isFuture) {
      return n + " " + (isFuture || s ? 'nap' : 'napja');
    },
    M: function M(_, s, ___, isFuture) {
      return "egy " + (isFuture || s ? 'hónap' : 'hónapja');
    },
    MM: function MM(n, s, ___, isFuture) {
      return n + " " + (isFuture || s ? 'hónap' : 'hónapja');
    },
    y: function y(_, s, ___, isFuture) {
      return "egy " + (isFuture || s ? 'év' : 'éve');
    },
    yy: function yy(n, s, ___, isFuture) {
      return n + " " + (isFuture || s ? 'év' : 'éve');
    }
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'YYYY.MM.DD.',
    LL: 'YYYY. MMMM D.',
    LLL: 'YYYY. MMMM D. H:mm',
    LLLL: 'YYYY. MMMM D., dddd H:mm'
  }
};
dayjs.locale(locale, null, true);
export default locale;