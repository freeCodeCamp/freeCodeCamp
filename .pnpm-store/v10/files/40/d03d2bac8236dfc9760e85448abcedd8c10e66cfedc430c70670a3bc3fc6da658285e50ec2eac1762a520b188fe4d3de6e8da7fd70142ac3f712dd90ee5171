import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

const dateFormats = {
  full: "EEEE MMMM d. 'b.' y",
  long: "MMMM d. 'b.' y",
  medium: "MMM d. 'b.' y",
  short: "dd.MM.y",
};

const timeFormats = {
  full: "'dii.' HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm",
};

const dateTimeFormats = {
  full: "{{date}} 'dii.' {{time}}",
  long: "{{date}} 'dii.' {{time}}",
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
