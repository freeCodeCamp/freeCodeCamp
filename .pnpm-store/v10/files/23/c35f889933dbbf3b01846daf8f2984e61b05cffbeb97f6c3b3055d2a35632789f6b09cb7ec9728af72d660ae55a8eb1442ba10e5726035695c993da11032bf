"use strict";

exports.__esModule = true;
exports.default = void 0;

var _Map2 = _interopRequireDefault(require("./Map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var BREAK = {};
/*----------------------------------------------------------------------------*/

var MapCache =
/*#__PURE__*/
function (_Map) {
  _inheritsLoose(MapCache, _Map);

  function MapCache() {
    return _Map.apply(this, arguments) || this;
  }

  var _proto = MapCache.prototype;

  _proto.clear = function clear() {
    _Map.prototype.clear.call(this);

    return this;
  };

  _proto.findKey = function findKey(iteratee) {
    var result;

    try {
      this.forEach(function (value, key, map) {
        if (iteratee(value, key, map)) {
          result = key;
          throw BREAK;
        }
      });
    } catch (e) {
      if (e !== BREAK) {
        throw e;
      }
    }

    return result;
  };

  return MapCache;
}(_Map2.default);

exports.default = MapCache;
module.exports = exports["default"];