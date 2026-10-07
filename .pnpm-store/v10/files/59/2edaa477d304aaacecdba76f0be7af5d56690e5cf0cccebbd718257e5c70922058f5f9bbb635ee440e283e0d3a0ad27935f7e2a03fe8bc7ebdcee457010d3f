import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js"; // https://www.unicode.org/cldr/charts/32/summary/sk.html#1772
var eraValues = {
  narrow: ['pred Kr.', 'po Kr.'],
  abbreviated: ['pred Kr.', 'po Kr.'],
  wide: ['pred Kristom', 'po Kristovi']
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1780
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. štvrťrok', '2. štvrťrok', '3. štvrťrok', '4. štvrťrok']
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1804
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
  wide: ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december']
};
var formattingMonthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra']
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1876
var dayValues = {
  narrow: ['n', 'p', 'u', 's', 'š', 'p', 's'],
  short: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  abbreviated: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  wide: ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota']
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1932
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'poln.',
    noon: 'pol.',
    morning: 'ráno',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'noc'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'poln.',
    noon: 'pol.',
    morning: 'ráno',
    afternoon: 'popol.',
    evening: 'večer',
    night: 'noc'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'polnoc',
    noon: 'poludnie',
    morning: 'ráno',
    afternoon: 'popoludnie',
    evening: 'večer',
    night: 'noc'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o poln.',
    noon: 'nap.',
    morning: 'ráno',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'v n.'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o poln.',
    noon: 'napol.',
    morning: 'ráno',
    afternoon: 'popol.',
    evening: 'večer',
    night: 'v noci'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o polnoci',
    noon: 'napoludnie',
    morning: 'ráno',
    afternoon: 'popoludní',
    evening: 'večer',
    night: 'v noci'
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
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
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