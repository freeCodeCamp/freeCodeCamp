export default (function (o, c) {
  var proto = c.prototype;

  proto.isoWeeksInYear = function () {
    var isLeapYear = this.isLeapYear();
    var last = this.endOf('y');
    var day = last.day();

    if (day === 4 || isLeapYear && day === 5) {
      return 53;
    }

    return 52;
  };
});