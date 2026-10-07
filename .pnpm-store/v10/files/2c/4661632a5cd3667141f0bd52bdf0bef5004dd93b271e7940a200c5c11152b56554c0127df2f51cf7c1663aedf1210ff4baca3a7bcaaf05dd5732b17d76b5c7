// Breton [br]
import dayjs from '../index';

function lastNumber(number) {
  if (number > 9) {
    return lastNumber(number % 10);
  }

  return number;
}

function softMutation(text) {
  var mutationTable = {
    m: 'v',
    b: 'v',
    d: 'z'
  };
  return mutationTable[text.charAt(0)] + text.substring(1);
}

function mutation(text, number) {
  if (number === 2) {
    return softMutation(text);
  }

  return text;
}

function relativeTimeWithMutation(number, withoutSuffix, key) {
  var format = {
    mm: 'munutenn',
    MM: 'miz',
    dd: 'devezh'
  };
  return number + " " + mutation(format[key], number);
}

function specialMutationForYears(number) {
  /* istanbul ignore next line */
  switch (lastNumber(number)) {
    case 1:
    case 3:
    case 4:
    case 5:
    case 9:
      return number + " bloaz";

    default:
      return number + " vloaz";
  }
}

var locale = {
  name: 'br',
  weekdays: 'Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn'.split('_'),
  months: 'Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
  monthsShort: 'Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
  weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'h[e]mm A',
    LTS: 'h[e]mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D [a viz] MMMM YYYY',
    LLL: 'D [a viz] MMMM YYYY h[e]mm A',
    LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
  },
  relativeTime: {
    future: 'a-benn %s',
    past: '%s ʼzo',
    s: 'un nebeud segondennoù',
    m: 'ur vunutenn',
    mm: relativeTimeWithMutation,
    h: 'un eur',
    hh: '%d eur',
    d: 'un devezh',
    dd: relativeTimeWithMutation,
    M: 'ur miz',
    MM: relativeTimeWithMutation,
    y: 'ur bloaz',
    yy: specialMutationForYears
  },
  meridiem: function meridiem(hour) {
    return hour < 12 ? 'a.m.' : 'g.m.';
  } // a-raok merenn | goude merenn

};
dayjs.locale(locale, null, true);
export default locale;