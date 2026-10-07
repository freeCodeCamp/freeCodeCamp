// Icelandic [is]
import dayjs from '../index';
var texts = {
  s: ['nokkrar sekúndur', 'nokkrar sekúndur', 'nokkrum sekúndum'],
  m: ['mínúta', 'mínútu', 'mínútu'],
  mm: ['mínútur', 'mínútur', 'mínútum'],
  h: ['klukkustund', 'klukkustund', 'klukkustund'],
  hh: ['klukkustundir', 'klukkustundir', 'klukkustundum'],
  d: ['dagur', 'dag', 'degi'],
  dd: ['dagar', 'daga', 'dögum'],
  M: ['mánuður', 'mánuð', 'mánuði'],
  MM: ['mánuðir', 'mánuði', 'mánuðum'],
  y: ['ár', 'ár', 'ári'],
  yy: ['ár', 'ár', 'árum']
};

function resolveTemplate(key, number, isFuture, withoutSuffix) {
  var suffixIndex = isFuture ? 1 : 2;
  var index = withoutSuffix ? 0 : suffixIndex;
  var keyShouldBeSingular = key.length === 2 && number % 10 === 1;
  var correctedKey = keyShouldBeSingular ? key[0] : key;
  var unitText = texts[correctedKey];
  var text = unitText[index];
  return key.length === 1 ? text : "%d " + text;
}

function relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
  var template = resolveTemplate(key, number, isFuture, withoutSuffix);
  return template.replace('%d', number);
}

var locale = {
  name: 'is',
  weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
  months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
  monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
  weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY [kl.] H:mm',
    LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
  },
  relativeTime: {
    future: 'eftir %s',
    past: 'fyrir %s síðan',
    s: relativeTimeFormatter,
    m: relativeTimeFormatter,
    mm: relativeTimeFormatter,
    h: relativeTimeFormatter,
    hh: relativeTimeFormatter,
    d: relativeTimeFormatter,
    dd: relativeTimeFormatter,
    M: relativeTimeFormatter,
    MM: relativeTimeFormatter,
    y: relativeTimeFormatter,
    yy: relativeTimeFormatter
  }
};
dayjs.locale(locale, null, true);
export default locale;