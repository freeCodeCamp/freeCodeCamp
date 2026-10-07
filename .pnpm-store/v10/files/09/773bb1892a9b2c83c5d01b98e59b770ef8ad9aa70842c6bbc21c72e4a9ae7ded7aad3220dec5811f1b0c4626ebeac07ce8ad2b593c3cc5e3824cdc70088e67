export default (function (o, c, d) {
  var proto = c.prototype;

  proto.isYesterday = function () {
    var comparisonTemplate = 'YYYY-MM-DD';
    var yesterday = d().subtract(1, 'day');
    return this.format(comparisonTemplate) === yesterday.format(comparisonTemplate);
  };
});