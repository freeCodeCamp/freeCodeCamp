"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addCreateSuperHelper;
var _core = require("@babel/core");
const helper = _core.template.statement`
  function CREATE_SUPER(Derived) {
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;

      // core-js@3
      if (Reflect.construct.sham) return false;

      // Proxy can't be polyfilled. Every browser implemented
      // proxies before or at the same time as Reflect.construct,
      // so if they support Proxy they also support Reflect.construct.
      if (typeof Proxy === "function") return true;

      // Since Reflect.construct can't be properly polyfilled, some
      // implementations (e.g. core-js@2) don't set the correct internal slots.
      // Those polyfills don't allow us to subclass built-ins, so we need to
      // use our fallback implementation.
      try {
        // If the internal slots aren't set, this throws an error similar to
        //   TypeError: this is not a Date object.
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    return function () {
      var Super = GET_PROTOTYPE_OF(Derived), result;
      if (isNativeReflectConstruct()) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = GET_PROTOTYPE_OF(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return POSSIBLE_CONSTRUCTOR_RETURN(this, result);
    }
  }
`;
const helperIDs = new WeakMap();
function addCreateSuperHelper(file) {
  if (helperIDs.has(file)) {
    return (_core.types.cloneNode || _core.types.clone)(helperIDs.get(file));
  }
  try {
    return file.addHelper("createSuper");
  } catch (_unused) {}
  const id = file.scope.generateUidIdentifier("createSuper");
  helperIDs.set(file, id);
  const fn = helper({
    CREATE_SUPER: id,
    GET_PROTOTYPE_OF: file.addHelper("getPrototypeOf"),
    POSSIBLE_CONSTRUCTOR_RETURN: file.addHelper("possibleConstructorReturn")
  });
  file.path.unshiftContainer("body", [fn]);
  file.scope.registerDeclaration(file.path.get("body.0"));
  return _core.types.cloneNode(id);
}

//# sourceMappingURL=inline-createSuper-helpers.js.map
