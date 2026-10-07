export default (function (o, c, d) {
  var proto = c.prototype;

  proto.isTomorrow = function () {
    var comparisonTemplate = 'YYYY-MM-DD';
    var tomorrow = d().add(1, 'day');
    return this.format(comparisonTemplate) === tomorrow.format(comparisonTemplate);
  };
});