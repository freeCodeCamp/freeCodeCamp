import buildFormatLongFn from "../../../_lib/buildFormatLongFn/index.js"; // Reference: https://www.unicode.org/cldr/charts/32/summary/kn.html
var dateFormats = {
  full: 'EEEE, MMMM d, y',
  // CLDR 1816
  long: 'MMMM d, y',
  // CLDR 1817
  medium: 'MMM d, y',
  // CLDR 1818
  short: 'd/M/yy' // CLDR 1819
};

var timeFormats = {
  full: 'hh:mm:ss a zzzz',
  // CLDR 1820
  long: 'hh:mm:ss a z',
  // CLDR 1821
  medium: 'hh:mm:ss a',
  // CLDR 1822
  short: 'hh:mm a' // CLDR 1823
};

var dateTimeFormats = {
  full: '{{date}} {{time}}',
  // CLDR 1824
  long: '{{date}} {{time}}',
  // CLDR 1825
  medium: '{{date}} {{time}}',
  // CLDR 1826
  short: '{{date}} {{time}}' // CLDR 1827
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