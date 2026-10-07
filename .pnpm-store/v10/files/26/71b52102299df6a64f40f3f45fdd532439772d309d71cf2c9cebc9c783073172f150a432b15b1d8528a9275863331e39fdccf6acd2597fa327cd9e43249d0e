"use strict";
exports.formatLong = void 0;
var _index = require("../../_lib/buildFormatLongFn.cjs");

const dateFormats = {
  full: "EEEE, do MMMM y 'ж.'",
  long: "do MMMM y 'ж.'",
  medium: "d MMM y 'ж.'",
  short: "dd.MM.yyyy",
};

const timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm",
};

const dateTimeFormats = {
  any: "{{date}}, {{time}}",
};

const formatLong = (exports.formatLong = {
  date: (0, _index.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0, _index.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0, _index.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "any",
  }),
});
