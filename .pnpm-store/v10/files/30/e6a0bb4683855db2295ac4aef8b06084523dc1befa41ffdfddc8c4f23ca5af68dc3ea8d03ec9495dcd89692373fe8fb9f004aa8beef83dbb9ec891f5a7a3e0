"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['M.A', 'M.'],
  abbreviated: ['M.A', 'M.'],
  wide: ['Miloddan Avvalgi', 'Milodiy']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['CH.1', 'CH.2', 'CH.3', 'CH.4'],
  wide: ['1-chi chorak', '2-chi chorak', '3-chi chorak', '4-chi chorak']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['Y', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'],
  wide: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']
};
var dayValues = {
  narrow: ['Y', 'D', 'S', 'CH', 'P', 'J', 'SH'],
  short: ['Ya', 'Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha'],
  abbreviated: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
  wide: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'y.t',
    noon: 'p.',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'y.t',
    noon: 'p.',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  return String(dirtyNumber);
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;