import getPrototypeOf from "./getPrototypeOf.js";
import isNativeReflectConstruct from "./isNativeReflectConstruct.js";
import possibleConstructorReturn from "./possibleConstructorReturn.js";
function _createSuper(t) {
  var r = isNativeReflectConstruct();
  return function () {
    var e,
      o = getPrototypeOf(t);
    if (r) {
      var s = getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return possibleConstructorReturn(this, e);
  };
}
export { _createSuper as default };