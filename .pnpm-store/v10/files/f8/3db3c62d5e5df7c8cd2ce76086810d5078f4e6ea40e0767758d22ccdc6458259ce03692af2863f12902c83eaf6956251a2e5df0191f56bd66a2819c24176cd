import buildFormatLongFn from "../../../_lib/buildFormatLongFn/index.js";
var dateFormats = {
  full: 'EEEE, dd MMMM yyyy',
  long: 'dd MMMM yyyy',
  medium: 'dd MMM yyyy',
  short: 'dd/MM/yyyy'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'H:mm'
};
var dateTimeFormats = {
  any: '{{date}} {{time}}'
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
    defaultWidth: 'any'
  })
};
export default formatLong;