import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

const dateFormats = {
  full: "eeee d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "d.M.y",
};

const timeFormats = {
  full: "HH.mm.ss zzzz",
  long: "HH.mm.ss z",
  medium: "HH.mm.ss",
  short: "HH.mm",
};

const dateTimeFormats = {
  full: "{{date}} 'klo' {{time}}",
  long: "{{date}} 'klo' {{time}}",
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
