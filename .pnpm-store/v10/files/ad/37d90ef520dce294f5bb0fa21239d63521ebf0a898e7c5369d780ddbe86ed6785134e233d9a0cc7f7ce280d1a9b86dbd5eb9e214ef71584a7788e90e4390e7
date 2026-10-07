// Serbian Cyrillic [sr-cyrl]
import dayjs from '../index';
var translator = {
  words: {
    m: ['један минут', 'једног минута'],
    mm: ['%d минут', '%d минута', '%d минута'],
    h: ['један сат', 'једног сата'],
    hh: ['%d сат', '%d сата', '%d сати'],
    d: ['један дан', 'једног дана'],
    dd: ['%d дан', '%d дана', '%d дана'],
    M: ['један месец', 'једног месеца'],
    MM: ['%d месец', '%d месеца', '%d месеци'],
    y: ['једну годину', 'једне године'],
    yy: ['%d годину', '%d године', '%d година']
  },
  correctGrammarCase: function correctGrammarCase(number, wordKey) {
    if (number % 10 >= 1 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      return number % 10 === 1 ? wordKey[0] : wordKey[1];
    }

    return wordKey[2];
  },
  relativeTimeFormatter: function relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
    var wordKey = translator.words[key];

    if (key.length === 1) {
      // Nominativ
      if (key === 'y' && withoutSuffix) return 'једна година';
      return isFuture || withoutSuffix ? wordKey[0] : wordKey[1];
    }

    var word = translator.correctGrammarCase(number, wordKey); // Nominativ

    if (key === 'yy' && withoutSuffix && word === '%d годину') return number + " \u0433\u043E\u0434\u0438\u043D\u0430";
    return word.replace('%d', number);
  }
};
var locale = {
  name: 'sr-cyrl',
  weekdays: 'Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота'.split('_'),
  weekdaysShort: 'Нед._Пон._Уто._Сре._Чет._Пет._Суб.'.split('_'),
  weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
  months: 'Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар'.split('_'),
  monthsShort: 'Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.'.split('_'),
  weekStart: 1,
  relativeTime: {
    future: 'за %s',
    past: 'пре %s',
    s: 'неколико секунди',
    m: translator.relativeTimeFormatter,
    mm: translator.relativeTimeFormatter,
    h: translator.relativeTimeFormatter,
    hh: translator.relativeTimeFormatter,
    d: translator.relativeTimeFormatter,
    dd: translator.relativeTimeFormatter,
    M: translator.relativeTimeFormatter,
    MM: translator.relativeTimeFormatter,
    y: translator.relativeTimeFormatter,
    yy: translator.relativeTimeFormatter
  },
  ordinal: function ordinal(n) {
    return n + ".";
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D. M. YYYY.',
    LL: 'D. MMMM YYYY.',
    LLL: 'D. MMMM YYYY. H:mm',
    LLLL: 'dddd, D. MMMM YYYY. H:mm'
  }
};
dayjs.locale(locale, null, true);
export default locale;