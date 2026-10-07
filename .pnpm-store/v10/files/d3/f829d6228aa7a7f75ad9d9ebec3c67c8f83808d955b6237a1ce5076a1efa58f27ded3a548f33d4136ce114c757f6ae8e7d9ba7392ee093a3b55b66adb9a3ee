"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Node = require("./Node.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const AbstractRange = require("./AbstractRange.js");

const interfaceName = "Range";

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
  throw new globalObject.TypeError(`${context} is not of type 'Range'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Range"].prototype;
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

exports._internalSetup = (wrapper, globalObject) => {
  AbstractRange._internalSetup(wrapper, globalObject);
};

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
  class Range extends globalObject.AbstractRange {
    constructor() {
      return exports.setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    setStart(node, offset) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'setStart' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'setStart' on 'Range': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'setStart' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setStart' on 'Range': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setStart(...args);
    }

    setEnd(node, offset) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'setEnd' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'setEnd' on 'Range': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, { context: "Failed to execute 'setEnd' on 'Range': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setEnd' on 'Range': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setEnd(...args);
    }

    setStartBefore(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'setStartBefore' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setStartBefore' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'setStartBefore' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setStartBefore(...args);
    }

    setStartAfter(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'setStartAfter' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setStartAfter' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'setStartAfter' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setStartAfter(...args);
    }

    setEndBefore(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'setEndBefore' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setEndBefore' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'setEndBefore' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setEndBefore(...args);
    }

    setEndAfter(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'setEndAfter' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setEndAfter' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'setEndAfter' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setEndAfter(...args);
    }

    collapse() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'collapse' called on an object that is not a valid instance of Range.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'collapse' on 'Range': parameter 1",
            globals: globalObject
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].collapse(...args);
    }

    selectNode(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'selectNode' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'selectNode' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'selectNode' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].selectNode(...args);
    }

    selectNodeContents(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'selectNodeContents' called on an object that is not a valid instance of Range."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'selectNodeContents' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'selectNodeContents' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].selectNodeContents(...args);
    }

    compareBoundaryPoints(how, sourceRange) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'compareBoundaryPoints' called on an object that is not a valid instance of Range."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'compareBoundaryPoints' on 'Range': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned short"](curArg, {
          context: "Failed to execute 'compareBoundaryPoints' on 'Range': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = exports.convert(globalObject, curArg, {
          context: "Failed to execute 'compareBoundaryPoints' on 'Range': parameter 2"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].compareBoundaryPoints(...args);
    }

    deleteContents() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'deleteContents' called on an object that is not a valid instance of Range.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].deleteContents();
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    extractContents() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'extractContents' called on an object that is not a valid instance of Range."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].extractContents());
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    cloneContents() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'cloneContents' called on an object that is not a valid instance of Range.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].cloneContents());
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    insertNode(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'insertNode' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'insertNode' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'insertNode' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].insertNode(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    surroundContents(newParent) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'surroundContents' called on an object that is not a valid instance of Range."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'surroundContents' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'surroundContents' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].surroundContents(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    cloneRange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'cloneRange' called on an object that is not a valid instance of Range.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].cloneRange());
    }

    detach() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'detach' called on an object that is not a valid instance of Range.");
      }

      return esValue[implSymbol].detach();
    }

    isPointInRange(node, offset) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'isPointInRange' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'isPointInRange' on 'Range': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'isPointInRange' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'isPointInRange' on 'Range': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].isPointInRange(...args);
    }

    comparePoint(node, offset) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'comparePoint' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'comparePoint' on 'Range': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'comparePoint' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'comparePoint' on 'Range': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].comparePoint(...args);
    }

    intersectsNode(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'intersectsNode' called on an object that is not a valid instance of Range.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'intersectsNode' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'intersectsNode' on 'Range': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].intersectsNode(...args);
    }

    toString() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'toString' called on an object that is not a valid instance of Range.");
      }

      return esValue[implSymbol].toString();
    }

    createContextualFragment(fragment) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'createContextualFragment' called on an object that is not a valid instance of Range."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'createContextualFragment' on 'Range': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createContextualFragment' on 'Range': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].createContextualFragment(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get commonAncestorContainer() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get commonAncestorContainer' called on an object that is not a valid instance of Range."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["commonAncestorContainer"]);
    }
  }
  Object.defineProperties(Range.prototype, {
    setStart: { enumerable: true },
    setEnd: { enumerable: true },
    setStartBefore: { enumerable: true },
    setStartAfter: { enumerable: true },
    setEndBefore: { enumerable: true },
    setEndAfter: { enumerable: true },
    collapse: { enumerable: true },
    selectNode: { enumerable: true },
    selectNodeContents: { enumerable: true },
    compareBoundaryPoints: { enumerable: true },
    deleteContents: { enumerable: true },
    extractContents: { enumerable: true },
    cloneContents: { enumerable: true },
    insertNode: { enumerable: true },
    surroundContents: { enumerable: true },
    cloneRange: { enumerable: true },
    detach: { enumerable: true },
    isPointInRange: { enumerable: true },
    comparePoint: { enumerable: true },
    intersectsNode: { enumerable: true },
    toString: { enumerable: true },
    createContextualFragment: { enumerable: true },
    commonAncestorContainer: { enumerable: true },
    [Symbol.toStringTag]: { value: "Range", configurable: true },
    START_TO_START: { value: 0, enumerable: true },
    START_TO_END: { value: 1, enumerable: true },
    END_TO_END: { value: 2, enumerable: true },
    END_TO_START: { value: 3, enumerable: true }
  });
  Object.defineProperties(Range, {
    START_TO_START: { value: 0, enumerable: true },
    START_TO_END: { value: 1, enumerable: true },
    END_TO_END: { value: 2, enumerable: true },
    END_TO_START: { value: 3, enumerable: true }
  });
  ctorRegistry[interfaceName] = Range;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Range
  });
};

const Impl = require("../range/Range-impl.js");
