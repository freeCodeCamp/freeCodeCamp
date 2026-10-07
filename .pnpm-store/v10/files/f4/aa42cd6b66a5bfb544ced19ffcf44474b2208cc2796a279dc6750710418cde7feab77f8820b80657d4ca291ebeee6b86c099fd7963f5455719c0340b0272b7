import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

const dateFormats = {
  full: "EEEE, d. MMMM yyyy.",
  long: "d. MMMM yyyy.",
  medium: "d. MMM yy.",
  short: "dd. MM. yy.",
};

const timeFormats = {
  full: "HH:mm:ss (zzzz)",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm",
};

const dateTimeFormats = {
  full: "{{date}} 'у' {{time}}",
  long: "{{date}} 'у' {{time}}",
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
