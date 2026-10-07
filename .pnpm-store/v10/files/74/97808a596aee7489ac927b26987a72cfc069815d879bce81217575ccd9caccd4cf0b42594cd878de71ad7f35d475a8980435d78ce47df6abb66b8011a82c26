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
exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new globalObject.TypeError(`${context} is not of type 'TreeWalker'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["TreeWalker"].prototype;
  }

  return Object.create(proto);
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

exports.new = (globalObject, newTarget) => {
  const wrapper = makeWrapper(globalObject, newTarget);

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

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class TreeWalker {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    parentNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'parentNode' called on an object that is not a valid instance of TreeWalker."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].parentNode());
    }

    firstChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'firstChild' called on an object that is not a valid instance of TreeWalker."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].firstChild());
    }

    lastChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'lastChild' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].lastChild());
    }

    previousSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'previousSibling' called on an object that is not a valid instance of TreeWalker."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].previousSibling());
    }

    nextSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'nextSibling' called on an object that is not a valid instance of TreeWalker."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].nextSibling());
    }

    previousNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'previousNode' called on an object that is not a valid instance of TreeWalker."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].previousNode());
    }

    nextNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'nextNode' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].nextNode());
    }

    get root() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get root' called on an object that is not a valid instance of TreeWalker.");
      }

      return utils.getSameObject(this, "root", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["root"]);
      });
    }

    get whatToShow() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get whatToShow' called on an object that is not a valid instance of TreeWalker."
        );
      }

      return esValue[implSymbol]["whatToShow"];
    }

    get filter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get filter' called on an object that is not a valid instance of TreeWalker."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["filter"]);
    }

    get currentNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get currentNode' called on an object that is not a valid instance of TreeWalker."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["currentNode"]);
    }

    set currentNode(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set currentNode' called on an object that is not a valid instance of TreeWalker."
        );
      }

      V = Node.convert(globalObject, V, {
        context: "Failed to set the 'currentNode' property on 'TreeWalker': The provided value"
      });

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
  ctorRegistry[interfaceName] = TreeWalker;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: TreeWalker
  });
};

const Impl = require("../traversal/TreeWalker-impl.js");
