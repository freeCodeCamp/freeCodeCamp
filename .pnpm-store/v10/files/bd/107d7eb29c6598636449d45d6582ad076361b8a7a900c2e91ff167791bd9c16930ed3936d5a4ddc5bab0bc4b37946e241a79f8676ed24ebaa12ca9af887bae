import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['ម.គស', 'គស'],
  abbreviated: ['មុនគ.ស', 'គ.ស'],
  wide: ['មុនគ្រិស្តសករាជ', 'នៃគ្រិស្តសករាជ']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['ត្រីមាសទី 1', 'ត្រីមាសទី 2', 'ត្រីមាសទី 3', 'ត្រីមាសទី 4']
};
var monthValues = {
  narrow: ['ម.ក', 'ក.ម', 'មិ', 'ម.ស', 'ឧ.ស', 'ម.ថ', 'ក.ដ', 'សី', 'កញ', 'តុ', 'វិ', 'ធ'],
  abbreviated: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
  wide: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
};
var dayValues = {
  narrow: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'],
  short: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'],
  abbreviated: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'],
  wide: ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍']
};
var dayPeriodValues = {
  narrow: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  },
  abbreviated: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  },
  wide: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  },
  abbreviated: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  },
  wide: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _) {
  var number = Number(dirtyNumber);
  return number.toString();
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