"use strict";
exports.formatLong = void 0;
var _index = require("../../_lib/buildFormatLongFn.cjs");

const dateFormats = {
  full: "วันEEEEที่ do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy",
};

const timeFormats = {
  full: "H:mm:ss น. zzzz",
  long: "H:mm:ss น. z",
  medium: "H:mm:ss น.",
  short: "H:mm น.",
};

const dateTimeFormats = {
  full: "{{date}} 'เวลา' {{time}}",
  long: "{{date}} 'เวลา' {{time}}",
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
    defaultWidth: "medium",
  }),

  dateTime: (0, _index.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
});
