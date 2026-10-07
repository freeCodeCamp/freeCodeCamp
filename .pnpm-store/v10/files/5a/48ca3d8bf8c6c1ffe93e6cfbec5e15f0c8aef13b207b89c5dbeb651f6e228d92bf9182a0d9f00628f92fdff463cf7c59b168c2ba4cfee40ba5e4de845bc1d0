"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const GetRootNodeOptions = require("./GetRootNodeOptions.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const EventTarget = require("./EventTarget.js");

const interfaceName = "Node";

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
  throw new globalObject.TypeError(`${context} is not of type 'Node'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Node"].prototype;
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
  EventTarget._internalSetup(wrapper, globalObject);
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
  class Node extends globalObject.EventTarget {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    getRootNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'getRootNode' called on an object that is not a valid instance of Node.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = GetRootNodeOptions.convert(globalObject, curArg, {
          context: "Failed to execute 'getRootNode' on 'Node': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getRootNode(...args));
    }

    hasChildNodes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'hasChildNodes' called on an object that is not a valid instance of Node.");
      }

      return esValue[implSymbol].hasChildNodes();
    }

    normalize() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'normalize' called on an object that is not a valid instance of Node.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].normalize();
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    cloneNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'cloneNode' called on an object that is not a valid instance of Node.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'cloneNode' on 'Node': parameter 1",
            globals: globalObject
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].cloneNode(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    isEqualNode(otherNode) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'isEqualNode' called on an object that is not a valid instance of Node.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'isEqualNode' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = exports.convert(globalObject, curArg, {
            context: "Failed to execute 'isEqualNode' on 'Node': parameter 1"
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].isEqualNode(...args);
    }

    isSameNode(otherNode) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'isSameNode' called on an object that is not a valid instance of Node.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'isSameNode' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = exports.convert(globalObject, curArg, {
            context: "Failed to execute 'isSameNode' on 'Node': parameter 1"
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].isSameNode(...args);
    }

    compareDocumentPosition(other) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'compareDocumentPosition' called on an object that is not a valid instance of Node."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'compareDocumentPosition' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = exports.convert(globalObject, curArg, {
          context: "Failed to execute 'compareDocumentPosition' on 'Node': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].compareDocumentPosition(...args);
    }

    contains(other) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'contains' called on an object that is not a valid instance of Node.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'contains' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = exports.convert(globalObject, curArg, {
            context: "Failed to execute 'contains' on 'Node': parameter 1"
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].contains(...args);
    }

    lookupPrefix(namespace) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'lookupPrefix' called on an object that is not a valid instance of Node.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'lookupPrefix' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'lookupPrefix' on 'Node': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].lookupPrefix(...args);
    }

    lookupNamespaceURI(prefix) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'lookupNamespaceURI' called on an object that is not a valid instance of Node."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'lookupNamespaceURI' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'lookupNamespaceURI' on 'Node': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].lookupNamespaceURI(...args);
    }

    isDefaultNamespace(namespace) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'isDefaultNamespace' called on an object that is not a valid instance of Node."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'isDefaultNamespace' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'isDefaultNamespace' on 'Node': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].isDefaultNamespace(...args);
    }

    insertBefore(node, child) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'insertBefore' called on an object that is not a valid instance of Node.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = exports.convert(globalObject, curArg, {
          context: "Failed to execute 'insertBefore' on 'Node': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = exports.convert(globalObject, curArg, {
            context: "Failed to execute 'insertBefore' on 'Node': parameter 2"
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].insertBefore(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    appendChild(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'appendChild' called on an object that is not a valid instance of Node.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'appendChild' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = exports.convert(globalObject, curArg, {
          context: "Failed to execute 'appendChild' on 'Node': parameter 1"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].appendChild(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    replaceChild(node, child) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'replaceChild' called on an object that is not a valid instance of Node.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'replaceChild' on 'Node': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = exports.convert(globalObject, curArg, {
          context: "Failed to execute 'replaceChild' on 'Node': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = exports.convert(globalObject, curArg, {
          context: "Failed to execute 'replaceChild' on 'Node': parameter 2"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].replaceChild(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    removeChild(child) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'removeChild' called on an object that is not a valid instance of Node.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'removeChild' on 'Node': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = exports.convert(globalObject, curArg, {
          context: "Failed to execute 'removeChild' on 'Node': parameter 1"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].removeChild(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get nodeType() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get nodeType' called on an object that is not a valid instance of Node.");
      }

      return esValue[implSymbol]["nodeType"];
    }

    get nodeName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get nodeName' called on an object that is not a valid instance of Node.");
      }

      return esValue[implSymbol]["nodeName"];
    }

    get baseURI() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get baseURI' called on an object that is not a valid instance of Node.");
      }

      return esValue[implSymbol]["baseURI"];
    }

    get isConnected() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get isConnected' called on an object that is not a valid instance of Node.");
      }

      return esValue[implSymbol]["isConnected"];
    }

    get ownerDocument() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ownerDocument' called on an object that is not a valid instance of Node."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ownerDocument"]);
    }

    get parentNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get parentNode' called on an object that is not a valid instance of Node.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["parentNode"]);
    }

    get parentElement() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get parentElement' called on an object that is not a valid instance of Node."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["parentElement"]);
    }

    get childNodes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get childNodes' called on an object that is not a valid instance of Node.");
      }

      return utils.getSameObject(this, "childNodes", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["childNodes"]);
      });
    }

    get firstChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get firstChild' called on an object that is not a valid instance of Node.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["firstChild"]);
    }

    get lastChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get lastChild' called on an object that is not a valid instance of Node.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["lastChild"]);
    }

    get previousSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get previousSibling' called on an object that is not a valid instance of Node."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["previousSibling"]);
    }

    get nextSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get nextSibling' called on an object that is not a valid instance of Node.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["nextSibling"]);
    }

    get nodeValue() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get nodeValue' called on an object that is not a valid instance of Node.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["nodeValue"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set nodeValue(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set nodeValue' called on an object that is not a valid instance of Node.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'nodeValue' property on 'Node': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["nodeValue"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get textContent() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get textContent' called on an object that is not a valid instance of Node.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["textContent"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set textContent(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set textContent' called on an object that is not a valid instance of Node.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'textContent' property on 'Node': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["textContent"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(Node.prototype, {
    getRootNode: { enumerable: true },
    hasChildNodes: { enumerable: true },
    normalize: { enumerable: true },
    cloneNode: { enumerable: true },
    isEqualNode: { enumerable: true },
    isSameNode: { enumerable: true },
    compareDocumentPosition: { enumerable: true },
    contains: { enumerable: true },
    lookupPrefix: { enumerable: true },
    lookupNamespaceURI: { enumerable: true },
    isDefaultNamespace: { enumerable: true },
    insertBefore: { enumerable: true },
    appendChild: { enumerable: true },
    replaceChild: { enumerable: true },
    removeChild: { enumerable: true },
    nodeType: { enumerable: true },
    nodeName: { enumerable: true },
    baseURI: { enumerable: true },
    isConnected: { enumerable: true },
    ownerDocument: { enumerable: true },
    parentNode: { enumerable: true },
    parentElement: { enumerable: true },
    childNodes: { enumerable: true },
    firstChild: { enumerable: true },
    lastChild: { enumerable: true },
    previousSibling: { enumerable: true },
    nextSibling: { enumerable: true },
    nodeValue: { enumerable: true },
    textContent: { enumerable: true },
    [Symbol.toStringTag]: { value: "Node", configurable: true },
    ELEMENT_NODE: { value: 1, enumerable: true },
    ATTRIBUTE_NODE: { value: 2, enumerable: true },
    TEXT_NODE: { value: 3, enumerable: true },
    CDATA_SECTION_NODE: { value: 4, enumerable: true },
    ENTITY_REFERENCE_NODE: { value: 5, enumerable: true },
    ENTITY_NODE: { value: 6, enumerable: true },
    PROCESSING_INSTRUCTION_NODE: { value: 7, enumerable: true },
    COMMENT_NODE: { value: 8, enumerable: true },
    DOCUMENT_NODE: { value: 9, enumerable: true },
    DOCUMENT_TYPE_NODE: { value: 10, enumerable: true },
    DOCUMENT_FRAGMENT_NODE: { value: 11, enumerable: true },
    NOTATION_NODE: { value: 12, enumerable: true },
    DOCUMENT_POSITION_DISCONNECTED: { value: 0x01, enumerable: true },
    DOCUMENT_POSITION_PRECEDING: { value: 0x02, enumerable: true },
    DOCUMENT_POSITION_FOLLOWING: { value: 0x04, enumerable: true },
    DOCUMENT_POSITION_CONTAINS: { value: 0x08, enumerable: true },
    DOCUMENT_POSITION_CONTAINED_BY: { value: 0x10, enumerable: true },
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { value: 0x20, enumerable: true }
  });
  Object.defineProperties(Node, {
    ELEMENT_NODE: { value: 1, enumerable: true },
    ATTRIBUTE_NODE: { value: 2, enumerable: true },
    TEXT_NODE: { value: 3, enumerable: true },
    CDATA_SECTION_NODE: { value: 4, enumerable: true },
    ENTITY_REFERENCE_NODE: { value: 5, enumerable: true },
    ENTITY_NODE: { value: 6, enumerable: true },
    PROCESSING_INSTRUCTION_NODE: { value: 7, enumerable: true },
    COMMENT_NODE: { value: 8, enumerable: true },
    DOCUMENT_NODE: { value: 9, enumerable: true },
    DOCUMENT_TYPE_NODE: { value: 10, enumerable: true },
    DOCUMENT_FRAGMENT_NODE: { value: 11, enumerable: true },
    NOTATION_NODE: { value: 12, enumerable: true },
    DOCUMENT_POSITION_DISCONNECTED: { value: 0x01, enumerable: true },
    DOCUMENT_POSITION_PRECEDING: { value: 0x02, enumerable: true },
    DOCUMENT_POSITION_FOLLOWING: { value: 0x04, enumerable: true },
    DOCUMENT_POSITION_CONTAINS: { value: 0x08, enumerable: true },
    DOCUMENT_POSITION_CONTAINED_BY: { value: 0x10, enumerable: true },
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { value: 0x20, enumerable: true }
  });
  ctorRegistry[interfaceName] = Node;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Node
  });
};

const Impl = require("../nodes/Node-impl.js");
