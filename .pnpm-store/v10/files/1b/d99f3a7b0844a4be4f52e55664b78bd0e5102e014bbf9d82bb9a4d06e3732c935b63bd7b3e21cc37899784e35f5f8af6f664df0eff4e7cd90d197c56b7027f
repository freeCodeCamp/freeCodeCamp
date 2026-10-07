import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

const dateFormats = {
  full: "EEEE, do MMMM y 'il'",
  long: "do MMMM y 'il'",
  medium: "d MMM y 'il'",
  short: "dd.MM.yyyy",
};

const timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm",
};

const dateTimeFormats = {
  full: "{{date}} {{time}} - 'də'",
  long: "{{date}} {{time}} - 'də'",
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
