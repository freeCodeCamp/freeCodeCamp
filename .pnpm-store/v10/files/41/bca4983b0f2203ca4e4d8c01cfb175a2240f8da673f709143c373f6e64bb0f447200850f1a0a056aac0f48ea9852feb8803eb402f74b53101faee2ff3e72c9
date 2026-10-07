import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

const dateFormats = {
  full: "EEEE, do MMMM, y",
  long: "do MMMM, y",
  medium: "d MMM, y",
  short: "dd/MM/yyyy",
};

const timeFormats = {
  full: "h:mm:ss zzzz",
  long: "h:mm:ss z",
  medium: "h:mm:ss",
  short: "h:mm",
};

const dateTimeFormats = {
  any: "{{date}}, {{time}}",
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
    defaultWidth: "any",
  }),
};
