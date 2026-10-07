import isNativeReflectConstruct from "./isNativeReflectConstruct.js";
import setPrototypeOf from "./setPrototypeOf.js";
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
export { _construct as default };