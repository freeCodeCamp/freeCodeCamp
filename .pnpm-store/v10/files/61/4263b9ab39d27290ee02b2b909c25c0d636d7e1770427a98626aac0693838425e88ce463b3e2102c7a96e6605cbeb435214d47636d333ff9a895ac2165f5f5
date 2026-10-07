// Polish [pl]
import dayjs from '../index';

function plural(n) {
  return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1; // eslint-disable-line
}
/* eslint-disable */


function translate(number, withoutSuffix, key) {
  var result = number + " ";

  switch (key) {
    case 'm':
      return withoutSuffix ? 'minuta' : 'minutę';

    case 'mm':
      return result + (plural(number) ? 'minuty' : 'minut');

    case 'h':
      return withoutSuffix ? 'godzina' : 'godzinę';

    case 'hh':
      return result + (plural(number) ? 'godziny' : 'godzin');

    case 'MM':
      return result + (plural(number) ? 'miesiące' : 'miesięcy');

    case 'yy':
      return result + (plural(number) ? 'lata' : 'lat');
  }
}
/* eslint-enable */


var monthFormat = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
var monthStandalone = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
var MONTHS_IN_FORMAT = /D MMMM/;

var months = function months(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }

  return monthStandalone[dayjsInstance.month()];
};

months.s = monthStandalone;
months.f = monthFormat;
var locale = {
  name: 'pl',
  weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
  weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
  weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
  months: months,
  monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: 'za %s',
    past: '%s temu',
    s: 'kilka sekund',
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: '1 dzień',
    dd: '%d dni',
    M: 'miesiąc',
    MM: translate,
    y: 'rok',
    yy: translate
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  }
};
dayjs.locale(locale, null, true);
export default locale;