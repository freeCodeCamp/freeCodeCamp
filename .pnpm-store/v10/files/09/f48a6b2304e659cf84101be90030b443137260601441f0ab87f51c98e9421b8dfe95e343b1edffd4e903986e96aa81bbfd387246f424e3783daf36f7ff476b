import buildFormatLongFn from "../../../_lib/buildFormatLongFn/index.js";
var dateFormats = {
  full: 'EEEE, d. MMMM yyyy',
  long: 'd. MMMM yyyy',
  medium: 'd. M. yyyy',
  short: 'dd.MM.yyyy'
};
var timeFormats = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'v' {{time}}",
  long: "{{date}} 'v' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
export default formatLong;