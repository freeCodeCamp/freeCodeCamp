import buildFormatLongFn from "../../../_lib/buildFormatLongFn/index.js";
var dateFormats = {
  full: 'yねんMがつdにちEEEE',
  long: 'yねんMがつdにち',
  medium: 'y/MM/dd',
  short: 'y/MM/dd'
};
var timeFormats = {
  full: 'Hじmmふんssびょう zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm'
};
var dateTimeFormats = {
  full: '{{date}} {{time}}',
  long: '{{date}} {{time}}',
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