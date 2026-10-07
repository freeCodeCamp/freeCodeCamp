// Occitan, lengadocian dialecte [oc-lnc]
import dayjs from '../index';
var locale = {
  name: 'oc-lnc',
  weekdays: 'dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte'.split('_'),
  weekdaysShort: 'Dg_Dl_Dm_Dc_Dj_Dv_Ds'.split('_'),
  weekdaysMin: 'dg_dl_dm_dc_dj_dv_ds'.split('_'),
  months: 'genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre'.split('_'),
  monthsShort: 'gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM [de] YYYY',
    LLL: 'D MMMM [de] YYYY [a] H:mm',
    LLLL: 'dddd D MMMM [de] YYYY [a] H:mm'
  },
  relativeTime: {
    future: 'd\'aquí %s',
    past: 'fa %s',
    s: 'unas segondas',
    m: 'una minuta',
    mm: '%d minutas',
    h: 'una ora',
    hh: '%d oras',
    d: 'un jorn',
    dd: '%d jorns',
    M: 'un mes',
    MM: '%d meses',
    y: 'un an',
    yy: '%d ans'
  },
  ordinal: function ordinal(n) {
    return n + "\xBA";
  }
};
dayjs.locale(locale, null, true);
export default locale;