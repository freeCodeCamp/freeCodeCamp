import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

const dateFormats = {
  full: "EEEE, y'ko' MMMM'ren' d'a' y'ren'",
  long: "y'ko' MMMM'ren' d'a'",
  medium: "y MMM d",
  short: "yy/MM/dd",
};

const timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm",
};

const dateTimeFormats = {
  full: "{{date}} 'tan' {{time}}",
  long: "{{date}} 'tan' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
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
