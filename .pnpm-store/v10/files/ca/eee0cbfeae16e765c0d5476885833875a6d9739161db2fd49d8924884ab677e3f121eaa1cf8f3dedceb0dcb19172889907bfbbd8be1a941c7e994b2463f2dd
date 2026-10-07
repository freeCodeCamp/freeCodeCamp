"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['f.Kr.', 'e.Kr.'],
  abbreviated: ['f.Kr.', 'e.Kr.'],
  wide: ['före Kristus', 'efter Kristus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1:a kvartalet', '2:a kvartalet', '3:e kvartalet', '4:e kvartalet']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['jan.', 'feb.', 'mars', 'apr.', 'maj', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
  wide: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  short: ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'],
  abbreviated: ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'],
  wide: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag']
};

// https://www.unicode.org/cldr/charts/32/summary/sv.html#1888
var dayPeriodValues = {
  narrow: {
    am: 'fm',
    pm: 'em',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'morg.',
    afternoon: 'efterm.',
    evening: 'kväll',
    night: 'natt'
  },
  abbreviated: {
    am: 'f.m.',
    pm: 'e.m.',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'morgon',
    afternoon: 'efterm.',
    evening: 'kväll',
    night: 'natt'
  },
  wide: {
    am: 'förmiddag',
    pm: 'eftermiddag',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'morgon',
    afternoon: 'eftermiddag',
    evening: 'kväll',
    night: 'natt'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'fm',
    pm: 'em',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morg.',
    afternoon: 'på efterm.',
    evening: 'på kvällen',
    night: 'på natten'
  },
  abbreviated: {
    am: 'fm',
    pm: 'em',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morg.',
    afternoon: 'på efterm.',
    evening: 'på kvällen',
    night: 'på natten'
  },
  wide: {
    am: 'fm',
    pm: 'em',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morgonen',
    afternoon: 'på eftermiddagen',
    evening: 'på kvällen',
    night: 'på natten'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
      case 2:
        return number + ':a';
    }
  }
  return number + ':e';
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