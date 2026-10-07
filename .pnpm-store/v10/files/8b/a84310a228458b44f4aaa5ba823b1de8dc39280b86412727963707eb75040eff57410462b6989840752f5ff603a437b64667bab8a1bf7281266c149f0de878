"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const ctorRegistry = utils.ctorRegistrySymbol;

const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'DOMException'.`);
  },

  create(globalObject, constructorArgs, privateData) {
    if (globalObject[ctorRegistry] === undefined) {
      throw new Error("Internal error: invalid global object");
    }

    const ctor = globalObject[ctorRegistry]["DOMException"];
    if (ctor === undefined) {
      throw new Error("Internal error: constructor DOMException is not installed on the passed global object");
    }

    let obj = Object.create(ctor.prototype);
    obj = iface.setup(obj, globalObject, constructorArgs, privateData);
    return obj;
  },
  createImpl(globalObject, constructorArgs, privateData) {
    const obj = iface.create(globalObject, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
  setup(obj, globalObject, constructorArgs = [], privateData = {}) {
    privateData.wrapper = obj;

    iface._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(globalObject, constructorArgs, privateData),
      configurable: true
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },

  install(globalObject) {
    class DOMException {
      constructor() {
        const args = [];
        {
          let curArg = arguments[0];
          if (curArg !== undefined) {
            curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'DOMException': parameter 1" });
          } else {
            curArg = "";
          }
          args.push(curArg);
        }
        {
          let curArg = arguments[1];
          if (curArg !== undefined) {
            curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'DOMException': parameter 2" });
          } else {
            curArg = "Error";
          }
          args.push(curArg);
        }
        return iface.setup(Object.create(new.target.prototype), globalObject, args);
      }

      get name() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["name"];
      }

      get message() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["message"];
      }

      get code() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["code"];
      }
    }
    Object.defineProperties(DOMException.prototype, {
      name: { enumerable: true },
      message: { enumerable: true },
      code: { enumerable: true },
      [Symbol.toStringTag]: { value: "DOMException", configurable: true },
      INDEX_SIZE_ERR: { value: 1, enumerable: true },
      DOMSTRING_SIZE_ERR: { value: 2, enumerable: true },
      HIERARCHY_REQUEST_ERR: { value: 3, enumerable: true },
      WRONG_DOCUMENT_ERR: { value: 4, enumerable: true },
      INVALID_CHARACTER_ERR: { value: 5, enumerable: true },
      NO_DATA_ALLOWED_ERR: { value: 6, enumerable: true },
      NO_MODIFICATION_ALLOWED_ERR: { value: 7, enumerable: true },
      NOT_FOUND_ERR: { value: 8, enumerable: true },
      NOT_SUPPORTED_ERR: { value: 9, enumerable: true },
      INUSE_ATTRIBUTE_ERR: { value: 10, enumerable: true },
      INVALID_STATE_ERR: { value: 11, enumerable: true },
      SYNTAX_ERR: { value: 12, enumerable: true },
      INVALID_MODIFICATION_ERR: { value: 13, enumerable: true },
      NAMESPACE_ERR: { value: 14, enumerable: true },
      INVALID_ACCESS_ERR: { value: 15, enumerable: true },
      VALIDATION_ERR: { value: 16, enumerable: true },
      TYPE_MISMATCH_ERR: { value: 17, enumerable: true },
      SECURITY_ERR: { value: 18, enumerable: true },
      NETWORK_ERR: { value: 19, enumerable: true },
      ABORT_ERR: { value: 20, enumerable: true },
      URL_MISMATCH_ERR: { value: 21, enumerable: true },
      QUOTA_EXCEEDED_ERR: { value: 22, enumerable: true },
      TIMEOUT_ERR: { value: 23, enumerable: true },
      INVALID_NODE_TYPE_ERR: { value: 24, enumerable: true },
      DATA_CLONE_ERR: { value: 25, enumerable: true }
    });
    Object.defineProperties(DOMException, {
      INDEX_SIZE_ERR: { value: 1, enumerable: true },
      DOMSTRING_SIZE_ERR: { value: 2, enumerable: true },
      HIERARCHY_REQUEST_ERR: { value: 3, enumerable: true },
      WRONG_DOCUMENT_ERR: { value: 4, enumerable: true },
      INVALID_CHARACTER_ERR: { value: 5, enumerable: true },
      NO_DATA_ALLOWED_ERR: { value: 6, enumerable: true },
      NO_MODIFICATION_ALLOWED_ERR: { value: 7, enumerable: true },
      NOT_FOUND_ERR: { value: 8, enumerable: true },
      NOT_SUPPORTED_ERR: { value: 9, enumerable: true },
      INUSE_ATTRIBUTE_ERR: { value: 10, enumerable: true },
      INVALID_STATE_ERR: { value: 11, enumerable: true },
      SYNTAX_ERR: { value: 12, enumerable: true },
      INVALID_MODIFICATION_ERR: { value: 13, enumerable: true },
      NAMESPACE_ERR: { value: 14, enumerable: true },
      INVALID_ACCESS_ERR: { value: 15, enumerable: true },
      VALIDATION_ERR: { value: 16, enumerable: true },
      TYPE_MISMATCH_ERR: { value: 17, enumerable: true },
      SECURITY_ERR: { value: 18, enumerable: true },
      NETWORK_ERR: { value: 19, enumerable: true },
      ABORT_ERR: { value: 20, enumerable: true },
      URL_MISMATCH_ERR: { value: 21, enumerable: true },
      QUOTA_EXCEEDED_ERR: { value: 22, enumerable: true },
      TIMEOUT_ERR: { value: 23, enumerable: true },
      INVALID_NODE_TYPE_ERR: { value: 24, enumerable: true },
      DATA_CLONE_ERR: { value: 25, enumerable: true }
    });
    if (globalObject[ctorRegistry] === undefined) {
      globalObject[ctorRegistry] = Object.create(null);
    }
    globalObject[ctorRegistry]["DOMException"] = DOMException;

    Object.defineProperty(globalObject, "DOMException", {
      configurable: true,
      writable: true,
      value: DOMException
    });
  }
}; // iface
module.exports = iface;

const Impl = require("./DOMException-impl.js");
