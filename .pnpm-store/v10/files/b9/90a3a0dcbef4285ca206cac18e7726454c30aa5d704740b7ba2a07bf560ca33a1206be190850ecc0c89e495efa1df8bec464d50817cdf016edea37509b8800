export default (function (o, c, d) {
  var proto = c.prototype;

  proto.isToday = function () {
    var comparisonTemplate = 'YYYY-MM-DD';
    var now = d();
    return this.format(comparisonTemplate) === now.format(comparisonTemplate);
  };
});