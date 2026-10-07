import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

//Source: https://www.unicode.org/cldr/charts/32/summary/gu.html
const dateFormats = {
  full: "EEEE, d MMMM, y", // CLDR #1825
  long: "d MMMM, y", // CLDR #1826
  medium: "d MMM, y", // CLDR #1827
  short: "d/M/yy", // CLDR #1828
};

const timeFormats = {
  full: "hh:mm:ss a zzzz", // CLDR #1829
  long: "hh:mm:ss a z", // CLDR #1830
  medium: "hh:mm:ss a", // CLDR #1831
  short: "hh:mm a", // CLDR #1832
};

const dateTimeFormats = {
  full: "{{date}} {{time}}", // CLDR #1833
  long: "{{date}} {{time}}", // CLDR #1834
  medium: "{{date}} {{time}}", // CLDR #1835
  short: "{{date}} {{time}}", // CLDR #1836
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
