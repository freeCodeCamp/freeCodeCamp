import { FORMAT_DEFAULT } from '../../constant';
export default (function (o, c) {
  // locale needed later
  var proto = c.prototype;
  var oldFormat = proto.format; // extend en locale here

  proto.format = function (formatStr) {
    var _this = this;

    var yearBias = 543;
    var str = formatStr || FORMAT_DEFAULT;
    var result = str.replace(/(\[[^\]]+])|BBBB|BB/g, function (match, a) {
      var _this$$utils;

      var year = String(_this.$y + yearBias);
      var args = match === 'BB' ? [year.slice(-2), 2] : [year, 4];
      return a || (_this$$utils = _this.$utils()).s.apply(_this$$utils, args.concat(['0']));
    });
    return oldFormat.bind(this)(result);
  };
});