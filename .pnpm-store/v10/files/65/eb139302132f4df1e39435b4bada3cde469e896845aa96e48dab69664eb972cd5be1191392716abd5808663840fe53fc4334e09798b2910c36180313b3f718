"use strict";
exports.formatLong = void 0;
var _index = require("../../_lib/buildFormatLongFn.cjs");

// DIN 5008: https://de.wikipedia.org/wiki/Datumsformat#DIN_5008
const dateFormats = {
  full: "EEEE, do MMMM y", // Montag, 7. Januar 2018
  long: "do MMMM y", // 7. Januar 2018
  medium: "do MMM y", // 7. Jan. 2018
  short: "dd.MM.y", // 07.01.2018
};

const timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm",
};

const dateTimeFormats = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}",
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
    defaultWidth: "full",
  }),
});
