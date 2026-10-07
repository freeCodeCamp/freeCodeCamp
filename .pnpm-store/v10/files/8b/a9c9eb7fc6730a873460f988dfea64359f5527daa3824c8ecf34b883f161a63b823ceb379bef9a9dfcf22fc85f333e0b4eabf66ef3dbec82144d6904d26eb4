var arrayLikeToArray = require("./arrayLikeToArray.js");
function _maybeArrayLike(r, a, e) {
  if (a && !Array.isArray(a) && "number" == typeof a.length) {
    var y = a.length;
    return arrayLikeToArray(a, void 0 !== e && e < y ? e : y);
  }
  return r(a, e);
}
module.exports = _maybeArrayLike, module.exports.__esModule = true, module.exports["default"] = module.exports;