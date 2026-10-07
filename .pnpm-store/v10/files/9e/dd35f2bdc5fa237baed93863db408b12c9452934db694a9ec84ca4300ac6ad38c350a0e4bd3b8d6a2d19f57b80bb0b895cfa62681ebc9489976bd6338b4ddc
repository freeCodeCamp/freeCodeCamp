export default (function (o, c, d) {
  var LT = 'h:mm A';
  var L = 'MM/DD/YYYY';
  var calendarFormat = {
    lastDay: "[Yesterday at] " + LT,
    sameDay: "[Today at] " + LT,
    nextDay: "[Tomorrow at] " + LT,
    nextWeek: "dddd [at] " + LT,
    lastWeek: "[Last] dddd [at] " + LT,
    sameElse: L
  };
  var proto = c.prototype;

  proto.calendar = function (referenceTime, formats) {
    var format = formats || this.$locale().calendar || calendarFormat;
    var referenceStartOfDay = d(referenceTime || undefined).startOf('d');
    var diff = this.diff(referenceStartOfDay, 'd', true);
    var sameElse = 'sameElse';
    /* eslint-disable no-nested-ternary */

    var retVal = diff < -6 ? sameElse : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : sameElse;
    /* eslint-enable no-nested-ternary */

    var currentFormat = format[retVal] || calendarFormat[retVal];

    if (typeof currentFormat === 'function') {
      return currentFormat.call(this, d());
    }

    return this.format(currentFormat);
  };
});