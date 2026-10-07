import { FORMAT_DEFAULT } from '../../constant';
import { u, englishFormats } from './utils';
export default (function (o, c, d) {
  var proto = c.prototype;
  var oldFormat = proto.format;
  d.en.formats = englishFormats;

  proto.format = function (formatStr) {
    if (formatStr === void 0) {
      formatStr = FORMAT_DEFAULT;
    }

    var _this$$locale = this.$locale(),
        _this$$locale$formats = _this$$locale.formats,
        formats = _this$$locale$formats === void 0 ? {} : _this$$locale$formats;

    var result = u(formatStr, formats);
    return oldFormat.call(this, result);
  };
});