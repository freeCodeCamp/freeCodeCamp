import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js"; // Reference: https://www.unicode.org/cldr/charts/32/summary/kn.html
var eraValues = {
  narrow: ['ಕ್ರಿ.ಪೂ', 'ಕ್ರಿ.ಶ'],
  abbreviated: ['ಕ್ರಿ.ಪೂ', 'ಕ್ರಿ.ಶ'],
  // CLDR #1618, #1620
  wide: ['ಕ್ರಿಸ್ತ ಪೂರ್ವ', 'ಕ್ರಿಸ್ತ ಶಕ'] // CLDR #1614, #1616
};

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['ತ್ರೈ 1', 'ತ್ರೈ 2', 'ತ್ರೈ 3', 'ತ್ರೈ 4'],
  // CLDR #1630 - #1638
  wide: ['1ನೇ ತ್ರೈಮಾಸಿಕ', '2ನೇ ತ್ರೈಮಾಸಿಕ', '3ನೇ ತ್ರೈಮಾಸಿಕ', '4ನೇ ತ್ರೈಮಾಸಿಕ'] // CLDR #1622 - #1629
};

// CLDR #1646 - #1717
var monthValues = {
  narrow: ['ಜ', 'ಫೆ', 'ಮಾ', 'ಏ', 'ಮೇ', 'ಜೂ', 'ಜು', 'ಆ', 'ಸೆ', 'ಅ', 'ನ', 'ಡಿ'],
  abbreviated: ['ಜನ', 'ಫೆಬ್ರ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿ', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗ', 'ಸೆಪ್ಟೆಂ', 'ಅಕ್ಟೋ', 'ನವೆಂ', 'ಡಿಸೆಂ'],
  wide: ['ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್']
};

// CLDR #1718 - #1773
var dayValues = {
  narrow: ['ಭಾ', 'ಸೋ', 'ಮಂ', 'ಬು', 'ಗು', 'ಶು', 'ಶ'],
  short: ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'],
  abbreviated: ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'],
  wide: ['ಭಾನುವಾರ', 'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ']
};

// CLDR #1774 - #1815
var dayPeriodValues = {
  narrow: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾಹ್ನ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾಹ್ನ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ'
  },
  abbreviated: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ'
  },
  wide: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ಪೂ',
    pm: 'ಅ',
    midnight: 'ಮಧ್ಯರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ'
  },
  abbreviated: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯ ರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ'
  },
  wide: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯ ರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + 'ನೇ';
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