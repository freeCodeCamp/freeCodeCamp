"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const isNode = require("./Node.js").is;
const impl = utils.implSymbol;
const Node = require("./Node.js");
const ChildNode = require("./ChildNode.js");

function DocumentType() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(DocumentType.prototype, Node.interface.prototype);
Object.setPrototypeOf(DocumentType, Node.interface);

Object.defineProperty(DocumentType, "prototype", {
  value: DocumentType.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

DocumentType.prototype.before = function before() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    let curArg = arguments[i];
    if (isNode(curArg)) {
      curArg = utils.implForWrapper(curArg);
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'before' on 'DocumentType': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].before(...args);
};

DocumentType.prototype.after = function after() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    let curArg = arguments[i];
    if (isNode(curArg)) {
      curArg = utils.implForWrapper(curArg);
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'after' on 'DocumentType': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].after(...args);
};

DocumentType.prototype.replaceWith = function replaceWith() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    let curArg = arguments[i];
    if (isNode(curArg)) {
      curArg = utils.implForWrapper(curArg);
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'replaceWith' on 'DocumentType': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].replaceWith(...args);
};

DocumentType.prototype.remove = function remove() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].remove();
};

Object.defineProperty(DocumentType.prototype, "name", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["name"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DocumentType.prototype, "publicId", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["publicId"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DocumentType.prototype, "systemId", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["systemId"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DocumentType.prototype, Symbol.toStringTag, {
  value: "DocumentType",
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
    throw new TypeError(`${context} is not of type 'DocumentType'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(DocumentType.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(DocumentType.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Node._internalSetup(obj);
  },
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
  interface: DocumentType,
  expose: {
    Window: { DocumentType }
  }
}; // iface
module.exports = iface;

ChildNode._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/DocumentType-impl.js");
