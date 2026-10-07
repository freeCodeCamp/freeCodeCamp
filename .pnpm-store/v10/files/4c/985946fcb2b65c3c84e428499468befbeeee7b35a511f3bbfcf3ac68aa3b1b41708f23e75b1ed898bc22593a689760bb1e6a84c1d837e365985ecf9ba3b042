"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Range = require("./Range.js");
const Node = require("./Node.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Selection";

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
  throw new globalObject.TypeError(`${context} is not of type 'Selection'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Selection"].prototype;
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
  class Selection {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    getRangeAt(index) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'getRangeAt' called on an object that is not a valid instance of Selection.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getRangeAt' on 'Selection': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'getRangeAt' on 'Selection': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getRangeAt(...args));
    }

    addRange(range) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'addRange' called on an object that is not a valid instance of Selection.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'addRange' on 'Selection': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Range.convert(globalObject, curArg, {
          context: "Failed to execute 'addRange' on 'Selection': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].addRange(...args);
    }

    removeRange(range) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'removeRange' called on an object that is not a valid instance of Selection."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'removeRange' on 'Selection': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Range.convert(globalObject, curArg, {
          context: "Failed to execute 'removeRange' on 'Selection': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].removeRange(...args);
    }

    removeAllRanges() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'removeAllRanges' called on an object that is not a valid instance of Selection."
        );
      }

      return esValue[implSymbol].removeAllRanges();
    }

    empty() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'empty' called on an object that is not a valid instance of Selection.");
      }

      return esValue[implSymbol].empty();
    }

    collapse(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'collapse' called on an object that is not a valid instance of Selection.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'collapse' on 'Selection': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = Node.convert(globalObject, curArg, {
            context: "Failed to execute 'collapse' on 'Selection': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["unsigned long"](curArg, {
            context: "Failed to execute 'collapse' on 'Selection': parameter 2",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].collapse(...args);
    }

    setPosition(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'setPosition' called on an object that is not a valid instance of Selection."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setPosition' on 'Selection': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = Node.convert(globalObject, curArg, {
            context: "Failed to execute 'setPosition' on 'Selection': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["unsigned long"](curArg, {
            context: "Failed to execute 'setPosition' on 'Selection': parameter 2",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].setPosition(...args);
    }

    collapseToStart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'collapseToStart' called on an object that is not a valid instance of Selection."
        );
      }

      return esValue[implSymbol].collapseToStart();
    }

    collapseToEnd() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'collapseToEnd' called on an object that is not a valid instance of Selection."
        );
      }

      return esValue[implSymbol].collapseToEnd();
    }

    extend(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'extend' called on an object that is not a valid instance of Selection.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'extend' on 'Selection': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'extend' on 'Selection': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["unsigned long"](curArg, {
            context: "Failed to execute 'extend' on 'Selection': parameter 2",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].extend(...args);
    }

    setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'setBaseAndExtent' called on an object that is not a valid instance of Selection."
        );
      }

      if (arguments.length < 4) {
        throw new globalObject.TypeError(
          `Failed to execute 'setBaseAndExtent' on 'Selection': 4 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'setBaseAndExtent' on 'Selection': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setBaseAndExtent' on 'Selection': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'setBaseAndExtent' on 'Selection': parameter 3"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[3];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setBaseAndExtent' on 'Selection': parameter 4",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setBaseAndExtent(...args);
    }

    selectAllChildren(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'selectAllChildren' called on an object that is not a valid instance of Selection."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'selectAllChildren' on 'Selection': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'selectAllChildren' on 'Selection': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].selectAllChildren(...args);
    }

    deleteFromDocument() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'deleteFromDocument' called on an object that is not a valid instance of Selection."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].deleteFromDocument();
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    containsNode(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'containsNode' called on an object that is not a valid instance of Selection."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'containsNode' on 'Selection': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'containsNode' on 'Selection': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'containsNode' on 'Selection': parameter 2",
            globals: globalObject
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].containsNode(...args);
    }

    toString() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'toString' called on an object that is not a valid instance of Selection.");
      }

      return esValue[implSymbol].toString();
    }

    get anchorNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get anchorNode' called on an object that is not a valid instance of Selection."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["anchorNode"]);
    }

    get anchorOffset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get anchorOffset' called on an object that is not a valid instance of Selection."
        );
      }

      return esValue[implSymbol]["anchorOffset"];
    }

    get focusNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get focusNode' called on an object that is not a valid instance of Selection."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["focusNode"]);
    }

    get focusOffset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get focusOffset' called on an object that is not a valid instance of Selection."
        );
      }

      return esValue[implSymbol]["focusOffset"];
    }

    get isCollapsed() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get isCollapsed' called on an object that is not a valid instance of Selection."
        );
      }

      return esValue[implSymbol]["isCollapsed"];
    }

    get rangeCount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get rangeCount' called on an object that is not a valid instance of Selection."
        );
      }

      return esValue[implSymbol]["rangeCount"];
    }

    get type() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get type' called on an object that is not a valid instance of Selection.");
      }

      return esValue[implSymbol]["type"];
    }
  }
  Object.defineProperties(Selection.prototype, {
    getRangeAt: { enumerable: true },
    addRange: { enumerable: true },
    removeRange: { enumerable: true },
    removeAllRanges: { enumerable: true },
    empty: { enumerable: true },
    collapse: { enumerable: true },
    setPosition: { enumerable: true },
    collapseToStart: { enumerable: true },
    collapseToEnd: { enumerable: true },
    extend: { enumerable: true },
    setBaseAndExtent: { enumerable: true },
    selectAllChildren: { enumerable: true },
    deleteFromDocument: { enumerable: true },
    containsNode: { enumerable: true },
    toString: { enumerable: true },
    anchorNode: { enumerable: true },
    anchorOffset: { enumerable: true },
    focusNode: { enumerable: true },
    focusOffset: { enumerable: true },
    isCollapsed: { enumerable: true },
    rangeCount: { enumerable: true },
    type: { enumerable: true },
    [Symbol.toStringTag]: { value: "Selection", configurable: true }
  });
  ctorRegistry[interfaceName] = Selection;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Selection
  });
};

const Impl = require("../selection/Selection-impl.js");
