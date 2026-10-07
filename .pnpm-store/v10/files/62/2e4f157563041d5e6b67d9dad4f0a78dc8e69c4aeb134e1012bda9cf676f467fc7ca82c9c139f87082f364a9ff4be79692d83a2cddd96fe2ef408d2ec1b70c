import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['pr. n. št.', 'po n. št.'],
  abbreviated: ['pr. n. št.', 'po n. št.'],
  wide: ['pred našim štetjem', 'po našem štetju']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. čet.', '2. čet.', '3. čet.', '4. čet.'],
  wide: ['1. četrtletje', '2. četrtletje', '3. četrtletje', '4. četrtletje']
};
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
  wide: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december']
};
var dayValues = {
  narrow: ['n', 'p', 't', 's', 'č', 'p', 's'],
  short: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  abbreviated: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  wide: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota']
};
var dayPeriodValues = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'j',
    afternoon: 'p',
    evening: 'v',
    night: 'n'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'poln.',
    noon: 'pold.',
    morning: 'jut.',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'noč'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'polnoč',
    noon: 'poldne',
    morning: 'jutro',
    afternoon: 'popoldne',
    evening: 'večer',
    night: 'noč'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'zj',
    afternoon: 'p',
    evening: 'zv',
    night: 'po'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opoln.',
    noon: 'opold.',
    morning: 'zjut.',
    afternoon: 'pop.',
    evening: 'zveč.',
    night: 'ponoči'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opolnoči',
    noon: 'opoldne',
    morning: 'zjutraj',
    afternoon: 'popoldan',
    evening: 'zvečer',
    night: 'ponoči'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + '.';
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
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
export default localize;