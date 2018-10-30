"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

function NodeIterator() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(NodeIterator, "prototype", {
  value: NodeIterator.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

NodeIterator.prototype.nextNode = function nextNode() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].nextNode());
};

NodeIterator.prototype.previousNode = function previousNode() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].previousNode());
};

NodeIterator.prototype.detach = function detach() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].detach();
};

Object.defineProperty(NodeIterator.prototype, "root", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "root", () => {
      return utils.tryWrapperForImpl(this[impl]["root"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(NodeIterator.prototype, "referenceNode", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["referenceNode"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(NodeIterator.prototype, "pointerBeforeReferenceNode", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["pointerBeforeReferenceNode"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(NodeIterator.prototype, "whatToShow", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["whatToShow"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(NodeIterator.prototype, "filter", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["filter"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(NodeIterator.prototype, Symbol.toStringTag, {
  value: "NodeIterator",
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
    throw new TypeError(`${context} is not of type 'NodeIterator'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(NodeIterator.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(NodeIterator.prototype);
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
  interface: NodeIterator,
  expose: {
    Window: { NodeIterator }
  }
}; // iface
module.exports = iface;

const Impl = require("../traversal/NodeIterator-impl.js");
