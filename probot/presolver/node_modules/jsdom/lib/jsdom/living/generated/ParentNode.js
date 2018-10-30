"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const isNode = require("./Node.js").is;
const impl = utils.implSymbol;

function ParentNode() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(ParentNode, "prototype", {
  value: ParentNode.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

ParentNode.prototype.prepend = function prepend() {
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
        context: "Failed to execute 'prepend' on 'ParentNode': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].prepend(...args);
};

ParentNode.prototype.append = function append() {
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
        context: "Failed to execute 'append' on 'ParentNode': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].append(...args);
};

ParentNode.prototype.querySelector = function querySelector(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'querySelector' on 'ParentNode': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'querySelector' on 'ParentNode': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].querySelector(...args));
};

ParentNode.prototype.querySelectorAll = function querySelectorAll(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'querySelectorAll' on 'ParentNode': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'querySelectorAll' on 'ParentNode': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].querySelectorAll(...args));
};

Object.defineProperty(ParentNode.prototype, "children", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "children", () => {
      return utils.tryWrapperForImpl(this[impl]["children"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ParentNode.prototype, "firstElementChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["firstElementChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ParentNode.prototype, "lastElementChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["lastElementChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ParentNode.prototype, "childElementCount", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["childElementCount"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ParentNode.prototype, Symbol.unscopables, {
  value: {
    prepend: true,
    append: true
  },
  writable: false,
  enumerable: false,
  configurable: true
});

Object.defineProperty(ParentNode.prototype, Symbol.toStringTag, {
  value: "ParentNode",
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
    throw new TypeError(`${context} is not of type 'ParentNode'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(ParentNode.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(ParentNode.prototype);
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
  interface: ParentNode,
  expose: {}
}; // iface
module.exports = iface;

const Impl = require("../nodes/ParentNode-impl.js");
