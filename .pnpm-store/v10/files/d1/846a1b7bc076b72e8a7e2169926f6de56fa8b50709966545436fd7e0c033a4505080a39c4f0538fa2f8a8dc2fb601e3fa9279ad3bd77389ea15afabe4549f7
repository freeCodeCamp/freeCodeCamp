import { buildFormatLongFn } from "../../_lib/buildFormatLongFn.js";

const dateFormats = {
  full: "วันEEEEที่ do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy",
};

const timeFormats = {
  full: "H:mm:ss น. zzzz",
  long: "H:mm:ss น. z",
  medium: "H:mm:ss น.",
  short: "H:mm น.",
};

const dateTimeFormats = {
  full: "{{date}} 'เวลา' {{time}}",
  long: "{{date}} 'เวลา' {{time}}",
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
    defaultWidth: "medium",
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};
