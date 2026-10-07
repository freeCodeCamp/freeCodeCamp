import buildFormatLongFn from "../../../_lib/buildFormatLongFn/index.js";
var dateFormats = {
  full: 'EEEE, d. MMMM yyyy.',
  long: 'd. MMMM yyyy.',
  medium: 'd. MMM yy.',
  short: 'dd. MM. yy.'
};
var timeFormats = {
  full: 'HH:mm:ss (zzzz)',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'u' {{time}}",
  long: "{{date}} 'u' {{time}}",
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
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