"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Node = require("./Node.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "TreeWalker";

exports.is = value => {
  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = value => {
  return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new TypeError(`${context} is not of type 'TreeWalker'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["TreeWalker"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor TreeWalker is not installed on the passed global object");
  }

  return Object.create(ctor.prototype);
}

exports.create = (globalObject, constructorArgs, privateData) => {
  const wrapper = makeWrapper(globalObject);
  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};

exports.createImpl = (globalObject, constructorArgs, privateData) => {
  const wrapper = exports.create(globalObject, constructorArgs, privateData);
  return utils.implForWrapper(wrapper);
};

exports._internalSetup = (wrapper, globalObject) => {};

exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl.implementation(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

exports.new = globalObject => {
  const wrapper = makeWrapper(globalObject);

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.implementation.prototype),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper[implSymbol];
};

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }
  class TreeWalker {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    parentNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'parentNode' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].parentNode());
    }

    firstChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'firstChild' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].firstChild());
    }

    lastChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'lastChild' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].lastChild());
    }

    previousSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'previousSibling' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].previousSibling());
    }

    nextSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'nextSibling' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].nextSibling());
    }

    previousNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'previousNode' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].previousNode());
    }

    nextNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'nextNode' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].nextNode());
    }

    get root() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get root' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.getSameObject(this, "root", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["root"]);
      });
    }

    get whatToShow() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get whatToShow' called on an object that is not a valid instance of TreeWalker.");
      }

      return esValue[implSymbol]["whatToShow"];
    }

    get filter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get filter' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["filter"]);
    }

    get currentNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get currentNode' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["currentNode"]);
    }

    set currentNode(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set currentNode' called on an object that is not a valid instance of TreeWalker.");
      }

      V = Node.convert(V, { context: "Failed to set the 'currentNode' property on 'TreeWalker': The provided value" });

      esValue[implSymbol]["currentNode"] = V;
    }
  }
  Object.defineProperties(TreeWalker.prototype, {
    parentNode: { enumerable: true },
    firstChild: { enumerable: true },
    lastChild: { enumerable: true },
    previousSibling: { enumerable: true },
    nextSibling: { enumerable: true },
    previousNode: { enumerable: true },
    nextNode: { enumerable: true },
    root: { enumerable: true },
    whatToShow: { enumerable: true },
    filter: { enumerable: true },
    currentNode: { enumerable: true },
    [Symbol.toStringTag]: { value: "TreeWalker", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = TreeWalker;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: TreeWalker
  });
};

const Impl = require("../traversal/TreeWalker-impl.js");
