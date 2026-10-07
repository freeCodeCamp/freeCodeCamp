import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

// Source: https://www.unicode.org/cldr/charts/32/summary/te.html

// CLDR #1807 - #1811
const dateFormats = {
  full: "d, MMMM y, EEEE",
  long: "d MMMM, y",
  medium: "d MMM, y",
  short: "dd-MM-yy",
};

// CLDR #1807 - #1811
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

// CLDR #1815 - #1818
const dateTimeFormats = {
  full: "{{date}} {{time}}'కి'",
  long: "{{date}} {{time}}'కి'",
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
