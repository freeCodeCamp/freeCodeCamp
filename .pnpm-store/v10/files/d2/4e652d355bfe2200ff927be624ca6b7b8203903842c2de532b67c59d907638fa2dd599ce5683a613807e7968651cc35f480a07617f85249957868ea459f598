export default (function (o, c) {
  var proto = c.prototype;

  proto.weekYear = function () {
    var month = this.month();
    var weekOfYear = this.week();
    var year = this.year();

    if (weekOfYear === 1 && month === 11) {
      return year + 1;
    }

    if (month === 0 && weekOfYear >= 52) {
      return year - 1;
    }

    return year;
  };
});