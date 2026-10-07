export default (function (o, c, d) {
  var proto = c.prototype;

  proto.dayOfYear = function (input) {
    // d(this) is for badMutable
    var dayOfYear = Math.round((d(this).startOf('day') - d(this).startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'day');
  };
});