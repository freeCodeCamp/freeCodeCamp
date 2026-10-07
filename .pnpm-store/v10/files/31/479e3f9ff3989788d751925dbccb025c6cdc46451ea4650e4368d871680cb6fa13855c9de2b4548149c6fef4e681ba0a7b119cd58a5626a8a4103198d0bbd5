import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['p.n.e.', 'n.e.'],
  abbreviated: ['p.n.e.', 'n.e.'],
  wide: ['przed naszą erą', 'naszej ery']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['I kw.', 'II kw.', 'III kw.', 'IV kw.'],
  wide: ['I kwartał', 'II kwartał', 'III kwartał', 'IV kwartał']
};
var monthValues = {
  narrow: ['S', 'L', 'M', 'K', 'M', 'C', 'L', 'S', 'W', 'P', 'L', 'G'],
  abbreviated: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  wide: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
};
var monthFormattingValues = {
  narrow: ['s', 'l', 'm', 'k', 'm', 'c', 'l', 's', 'w', 'p', 'l', 'g'],
  abbreviated: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  wide: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia']
};
var dayValues = {
  narrow: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
  short: ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob'],
  abbreviated: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
  wide: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
};
var dayFormattingValues = {
  narrow: ['n', 'p', 'w', 'ś', 'c', 'p', 's'],
  short: ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob'],
  abbreviated: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
  wide: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'półn.',
    noon: 'poł',
    morning: 'rano',
    afternoon: 'popoł.',
    evening: 'wiecz.',
    night: 'noc'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'północ',
    noon: 'południe',
    morning: 'rano',
    afternoon: 'popołudnie',
    evening: 'wieczór',
    night: 'noc'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'północ',
    noon: 'południe',
    morning: 'rano',
    afternoon: 'popołudnie',
    evening: 'wieczór',
    night: 'noc'
  }
};
var dayPeriodFormattingValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'o półn.',
    noon: 'w poł.',
    morning: 'rano',
    afternoon: 'po poł.',
    evening: 'wiecz.',
    night: 'w nocy'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o północy',
    noon: 'w południe',
    morning: 'rano',
    afternoon: 'po południu',
    evening: 'wieczorem',
    night: 'w nocy'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o północy',
    noon: 'w południe',
    morning: 'rano',
    afternoon: 'po południu',
    evening: 'wieczorem',
    night: 'w nocy'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  return String(dirtyNumber);
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: monthFormattingValues,
    defaultFormattingWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
    formattingValues: dayFormattingValues,
    defaultFormattingWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: dayPeriodFormattingValues,
    defaultFormattingWidth: 'wide'
  })
};
export default localize;