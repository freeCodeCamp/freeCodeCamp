function _importDeferProxy(e) {
  var t = null,
    constValue = function constValue(e) {
      return function () {
        return e;
      };
    },
    proxy = function proxy(r) {
      return function (n, o, f) {
        return null === t && (t = e()), r(t, o, f);
      };
    };
  return new Proxy({}, {
    defineProperty: constValue(!1),
    deleteProperty: constValue(!1),
    get: proxy(Reflect.get),
    getOwnPropertyDescriptor: proxy(Reflect.getOwnPropertyDescriptor),
    getPrototypeOf: constValue(null),
    isExtensible: constValue(!1),
    has: proxy(Reflect.has),
    ownKeys: proxy(Reflect.ownKeys),
    preventExtensions: constValue(!0),
    set: constValue(!1),
    setPrototypeOf: constValue(!1)
  });
}
module.exports = _importDeferProxy, module.exports.__esModule = true, module.exports["default"] = module.exports;