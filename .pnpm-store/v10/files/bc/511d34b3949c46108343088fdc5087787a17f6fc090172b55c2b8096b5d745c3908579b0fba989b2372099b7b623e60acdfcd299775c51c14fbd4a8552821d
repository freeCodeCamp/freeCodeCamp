import _setPrototypeOf from "./_set_prototype_of.mjs";

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
    return true;
  } catch (e) {
    return false;
  }
}

function construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    construct = Reflect.construct;
  } else {
    construct = function construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return construct.apply(null, arguments);
}

export default function _construct(Parent, args, Class) {
  return construct.apply(null, arguments);
}
