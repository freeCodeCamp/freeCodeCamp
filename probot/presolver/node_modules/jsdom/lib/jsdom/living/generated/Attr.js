"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

function Attr() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(Attr, "prototype", {
  value: Attr.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(Attr.prototype, "namespaceURI", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["namespaceURI"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "prefix", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["prefix"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "localName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["localName"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "name", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["name"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "nodeName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["nodeName"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "value", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["value"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, { context: "Failed to set the 'value' property on 'Attr': The provided value" });

    this[impl]["value"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "nodeValue", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["nodeValue"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'nodeValue' property on 'Attr': The provided value",
      treatNullAsEmptyString: true
    });

    this[impl]["nodeValue"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "textContent", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["textContent"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'textContent' property on 'Attr': The provided value",
      treatNullAsEmptyString: true
    });

    this[impl]["textContent"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "ownerElement", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ownerElement"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, "specified", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["specified"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Attr.prototype, Symbol.toStringTag, {
  value: "Attr",
  writable: false,
  enumerable: false,
  configurable: true
});

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
    throw new TypeError(`${context} is not of type 'Attr'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Attr.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Attr.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
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
    return obj;
  },
  interface: Attr,
  expose: {
    Window: { Attr }
  }
}; // iface
module.exports = iface;

const Impl = require("../attributes/Attr-impl.js");
