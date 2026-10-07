import buildFormatLongFn from "../../../_lib/buildFormatLongFn/index.js"; // Ref: https://www.unicode.org/cldr/charts/32/summary/ta.html
// CLDR #1846 - #1849
var dateFormats = {
  full: 'EEEE, d MMMM, y',
  long: 'd MMMM, y',
  medium: 'd MMM, y',
  short: 'd/M/yy'
};

// CLDR #1850 - #1853
var timeFormats = {
  full: 'a h:mm:ss zzzz',
  long: 'a h:mm:ss z',
  medium: 'a h:mm:ss',
  short: 'a h:mm'
};
var dateTimeFormats = {
  full: '{{date}} {{time}}',
  long: '{{date}} {{time}}',
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