import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

// DIN 5008: https://de.wikipedia.org/wiki/Datumsformat#DIN_5008
const dateFormats = {
  full: "EEEE, do MMMM y", // Montag, 7. Januar 2018
  long: "do MMMM y", // 7. Januar 2018
  medium: "do MMM y", // 7. Jan. 2018
  short: "dd.MM.y", // 07.01.2018
};

const timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm",
};

const dateTimeFormats = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
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
