"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const isNode = require("./Node.js").is;
const impl = utils.implSymbol;

function ChildNode() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(ChildNode, "prototype", {
  value: ChildNode.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

ChildNode.prototype.before = function before() {
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
        context: "Failed to execute 'before' on 'ChildNode': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].before(...args);
};

ChildNode.prototype.after = function after() {
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
        context: "Failed to execute 'after' on 'ChildNode': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].after(...args);
};

ChildNode.prototype.replaceWith = function replaceWith() {
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
        context: "Failed to execute 'replaceWith' on 'ChildNode': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].replaceWith(...args);
};

ChildNode.prototype.remove = function remove() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].remove();
};

Object.defineProperty(ChildNode.prototype, Symbol.unscopables, {
  value: {
    before: true,
    after: true,
    replaceWith: true,
    remove: true
  },
  writable: false,
  enumerable: false,
  configurable: true
});

Object.defineProperty(ChildNode.prototype, Symbol.toStringTag, {
  value: "ChildNode",
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
    throw new TypeError(`${context} is not of type 'ChildNode'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(ChildNode.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(ChildNode.prototype);
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
  interface: ChildNode,
  expose: {}
}; // iface
module.exports = iface;

const Impl = require("../nodes/ChildNode-impl.js");
