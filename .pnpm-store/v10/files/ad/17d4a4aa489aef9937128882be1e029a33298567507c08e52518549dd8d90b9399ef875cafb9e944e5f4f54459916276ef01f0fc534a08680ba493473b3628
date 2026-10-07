import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

const dateFormats = {
  full: "yねんMがつdにちEEEE",
  long: "yねんMがつdにち",
  medium: "y/MM/dd",
  short: "y/MM/dd",
};

const timeFormats = {
  full: "Hじmmふんssびょう zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm",
};

const dateTimeFormats = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}",
};

export const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};
