import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['f.Kr.', 'e.Kr.'],
  abbreviated: ['f.Kr.', 'e.Kr.'],
  wide: ['før Kristus', 'etter Kristus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['jan.', 'feb.', 'mars', 'apr.', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'],
  wide: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  short: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
  abbreviated: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
  wide: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morg.',
    afternoon: 'på etterm.',
    evening: 'på kvelden',
    night: 'på natten'
  },
  abbreviated: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morg.',
    afternoon: 'på etterm.',
    evening: 'på kvelden',
    night: 'på natten'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morgenen',
    afternoon: 'på ettermiddagen',
    evening: 'på kvelden',
    night: 'på natten'
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
    defaultWidth: 'wide'
  })
};
export default localize;