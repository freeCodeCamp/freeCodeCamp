"use strict";
exports.formatLong = void 0;
var _index = require("../../_lib/buildFormatLongFn.cjs");

const dateFormats = {
  full: "EEEE, y. 'gada' d. MMMM",
  long: "y. 'gada' d. MMMM",
  medium: "dd.MM.y.",
  short: "dd.MM.y.",
};

const timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm",
};

const dateTimeFormats = {
  full: "{{date}} 'plkst.' {{time}}",
  long: "{{date}} 'plkst.' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
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
