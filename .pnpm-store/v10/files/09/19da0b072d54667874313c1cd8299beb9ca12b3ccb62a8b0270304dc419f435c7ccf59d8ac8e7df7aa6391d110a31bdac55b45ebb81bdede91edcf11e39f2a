"use strict";

exports.__esModule = true;
exports.default = void 0;

var _each2 = _interopRequireDefault(require("lodash/each"));

var _MapCache2 = _interopRequireDefault(require("./MapCache"));

var _util = require("./util");

var _Package = _interopRequireDefault(require("./Package"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*----------------------------------------------------------------------------*/
var Store =
/*#__PURE__*/
function (_MapCache) {
  _inheritsLoose(Store, _MapCache);

  function Store(pkgPaths) {
    var _this;

    _this = _MapCache.call(this) || this;
    (0, _each2.default)(pkgPaths, function (pkgPath) {
      return _this.set(pkgPath);
    });
    return _this;
  }

  var _proto = Store.prototype;

  _proto.get = function get(pkgPath) {
    return _MapCache.prototype.get.call(this, (0, _util.normalizePath)(pkgPath));
  };

  _proto.set = function set(pkgPath, pkgStore) {
    if (pkgStore === void 0) {
      pkgStore = new _Package.default((0, _util.normalizePath)(pkgPath));
    }

    return _MapCache.prototype.set.call(this, (0, _util.normalizePath)(pkgPath), pkgStore);
  };

  return Store;
}(_MapCache2.default);

exports.default = Store;
module.exports = exports["default"];