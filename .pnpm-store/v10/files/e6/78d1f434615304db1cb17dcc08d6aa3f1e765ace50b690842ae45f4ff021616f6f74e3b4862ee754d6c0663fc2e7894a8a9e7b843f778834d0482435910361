import buildFormatLongFn from "../../../_lib/buildFormatLongFn/index.js";
var dateFormats = {
  full: 'y년 M월 d일 EEEE',
  long: 'y년 M월 d일',
  medium: 'y.MM.dd',
  short: 'y.MM.dd'
};
var timeFormats = {
  full: 'a H시 mm분 ss초 zzzz',
  long: 'a H:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
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