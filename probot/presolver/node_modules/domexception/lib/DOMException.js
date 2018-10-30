"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

function DOMException() {
  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }

  if (args[0] !== undefined) {
    args[0] = conversions["DOMString"](args[0], { context: "Failed to construct 'DOMException': parameter 1" });
  } else {
    args[0] = "";
  }

  if (args[1] !== undefined) {
    args[1] = conversions["DOMString"](args[1], { context: "Failed to construct 'DOMException': parameter 2" });
  } else {
    args[1] = "Error";
  }

  iface.setup(this, args);
}

Object.defineProperty(DOMException, "prototype", {
  value: DOMException.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(DOMException.prototype, "name", {
  get() {
    return this[impl]["name"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DOMException.prototype, "message", {
  get() {
    return this[impl]["message"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DOMException.prototype, "code", {
  get() {
    return this[impl]["code"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DOMException, "INDEX_SIZE_ERR", {
  value: 1,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "INDEX_SIZE_ERR", {
  value: 1,
  enumerable: true
});

Object.defineProperty(DOMException, "DOMSTRING_SIZE_ERR", {
  value: 2,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "DOMSTRING_SIZE_ERR", {
  value: 2,
  enumerable: true
});

Object.defineProperty(DOMException, "HIERARCHY_REQUEST_ERR", {
  value: 3,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "HIERARCHY_REQUEST_ERR", {
  value: 3,
  enumerable: true
});

Object.defineProperty(DOMException, "WRONG_DOCUMENT_ERR", {
  value: 4,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "WRONG_DOCUMENT_ERR", {
  value: 4,
  enumerable: true
});

Object.defineProperty(DOMException, "INVALID_CHARACTER_ERR", {
  value: 5,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "INVALID_CHARACTER_ERR", {
  value: 5,
  enumerable: true
});

Object.defineProperty(DOMException, "NO_DATA_ALLOWED_ERR", {
  value: 6,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "NO_DATA_ALLOWED_ERR", {
  value: 6,
  enumerable: true
});

Object.defineProperty(DOMException, "NO_MODIFICATION_ALLOWED_ERR", {
  value: 7,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "NO_MODIFICATION_ALLOWED_ERR", {
  value: 7,
  enumerable: true
});

Object.defineProperty(DOMException, "NOT_FOUND_ERR", {
  value: 8,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "NOT_FOUND_ERR", {
  value: 8,
  enumerable: true
});

Object.defineProperty(DOMException, "NOT_SUPPORTED_ERR", {
  value: 9,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "NOT_SUPPORTED_ERR", {
  value: 9,
  enumerable: true
});

Object.defineProperty(DOMException, "INUSE_ATTRIBUTE_ERR", {
  value: 10,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "INUSE_ATTRIBUTE_ERR", {
  value: 10,
  enumerable: true
});

Object.defineProperty(DOMException, "INVALID_STATE_ERR", {
  value: 11,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "INVALID_STATE_ERR", {
  value: 11,
  enumerable: true
});

Object.defineProperty(DOMException, "SYNTAX_ERR", {
  value: 12,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "SYNTAX_ERR", {
  value: 12,
  enumerable: true
});

Object.defineProperty(DOMException, "INVALID_MODIFICATION_ERR", {
  value: 13,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "INVALID_MODIFICATION_ERR", {
  value: 13,
  enumerable: true
});

Object.defineProperty(DOMException, "NAMESPACE_ERR", {
  value: 14,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "NAMESPACE_ERR", {
  value: 14,
  enumerable: true
});

Object.defineProperty(DOMException, "INVALID_ACCESS_ERR", {
  value: 15,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "INVALID_ACCESS_ERR", {
  value: 15,
  enumerable: true
});

Object.defineProperty(DOMException, "VALIDATION_ERR", {
  value: 16,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "VALIDATION_ERR", {
  value: 16,
  enumerable: true
});

Object.defineProperty(DOMException, "TYPE_MISMATCH_ERR", {
  value: 17,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "TYPE_MISMATCH_ERR", {
  value: 17,
  enumerable: true
});

Object.defineProperty(DOMException, "SECURITY_ERR", {
  value: 18,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "SECURITY_ERR", {
  value: 18,
  enumerable: true
});

Object.defineProperty(DOMException, "NETWORK_ERR", {
  value: 19,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "NETWORK_ERR", {
  value: 19,
  enumerable: true
});

Object.defineProperty(DOMException, "ABORT_ERR", {
  value: 20,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "ABORT_ERR", {
  value: 20,
  enumerable: true
});

Object.defineProperty(DOMException, "URL_MISMATCH_ERR", {
  value: 21,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "URL_MISMATCH_ERR", {
  value: 21,
  enumerable: true
});

Object.defineProperty(DOMException, "QUOTA_EXCEEDED_ERR", {
  value: 22,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "QUOTA_EXCEEDED_ERR", {
  value: 22,
  enumerable: true
});

Object.defineProperty(DOMException, "TIMEOUT_ERR", {
  value: 23,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "TIMEOUT_ERR", {
  value: 23,
  enumerable: true
});

Object.defineProperty(DOMException, "INVALID_NODE_TYPE_ERR", {
  value: 24,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "INVALID_NODE_TYPE_ERR", {
  value: 24,
  enumerable: true
});

Object.defineProperty(DOMException, "DATA_CLONE_ERR", {
  value: 25,
  enumerable: true
});
Object.defineProperty(DOMException.prototype, "DATA_CLONE_ERR", {
  value: 25,
  enumerable: true
});

Object.defineProperty(DOMException.prototype, Symbol.toStringTag, {
  value: "DOMException",
  writable: false,
  enumerable: false,
  configurable: true
});

const iface = {
  mixedInto: [],
  is(obj) {
    if (obj) {
      if (obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (obj instanceof module.exports.mixedInto[i]) {
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
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (wrapper instanceof module.exports.mixedInto[i]) {
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

  create(constructorArgs, privateData) {
    let obj = Object.create(DOMException.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(DOMException.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      writable: false,
      enumerable: false,
      configurable: true
    });
    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
  },
  interface: DOMException,
  expose: {
    Window: { DOMException },
    Worker: { DOMException }
  }
}; // iface
module.exports = iface;

const Impl = require(".//DOMException-impl.js");
