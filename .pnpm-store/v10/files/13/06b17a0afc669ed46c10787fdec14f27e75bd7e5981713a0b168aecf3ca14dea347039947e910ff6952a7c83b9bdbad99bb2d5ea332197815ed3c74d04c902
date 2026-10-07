import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js"; // https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1621 - #1630
var eraValues = {
  narrow: ['ઈસપૂ', 'ઈસ'],
  abbreviated: ['ઈ.સ.પૂર્વે', 'ઈ.સ.'],
  wide: ['ઈસવીસન પૂર્વે', 'ઈસવીસન']
};

// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1631 - #1654
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1લો ત્રિમાસ', '2જો ત્રિમાસ', '3જો ત્રિમાસ', '4થો ત્રિમાસ']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1655 - #1726
var monthValues = {
  narrow: ['જા', 'ફે', 'મા', 'એ', 'મે', 'જૂ', 'જુ', 'ઓ', 'સ', 'ઓ', 'ન', 'ડિ'],
  abbreviated: ['જાન્યુ', 'ફેબ્રુ', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઑગસ્ટ', 'સપ્ટે', 'ઓક્ટો', 'નવે', 'ડિસે'],
  wide: ['જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઇ', 'ઓગસ્ટ', 'સપ્ટેમ્બર', 'ઓક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર']
};

// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1727 - #1768
var dayValues = {
  narrow: ['ર', 'સો', 'મં', 'બુ', 'ગુ', 'શુ', 'શ'],
  short: ['ર', 'સો', 'મં', 'બુ', 'ગુ', 'શુ', 'શ'],
  abbreviated: ['રવિ', 'સોમ', 'મંગળ', 'બુધ', 'ગુરુ', 'શુક્ર', 'શનિ'],
  wide: ['રવિવાર' /* Sunday */, 'સોમવાર' /* Monday */, 'મંગળવાર' /* Tuesday */, 'બુધવાર' /* Wednesday */, 'ગુરુવાર' /* Thursday */, 'શુક્રવાર' /* Friday */, 'શનિવાર' /* Saturday */]
};

// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1783 - #1824
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'મ.રાત્રિ',
    noon: 'બ.',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: '​મધ્યરાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: '​મધ્યરાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'મ.રાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'મધ્યરાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: '​મધ્યરાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
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