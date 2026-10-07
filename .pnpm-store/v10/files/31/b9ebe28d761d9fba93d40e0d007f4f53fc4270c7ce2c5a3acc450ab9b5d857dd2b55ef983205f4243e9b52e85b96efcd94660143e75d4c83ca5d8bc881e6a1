import buildFormatLongFn from "../../../_lib/buildFormatLongFn/index.js";
var dateFormats = {
  full: 'EEEE, d בMMMM y',
  long: 'd בMMMM y',
  medium: 'd בMMM y',
  short: 'd.M.y'
};
var timeFormats = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'בשעה' {{time}}",
  long: "{{date}} 'בשעה' {{time}}",
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