"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const Attr = require("./Attr.js");
const ShadowRootInit = require("./ShadowRootInit.js");
const Node = require("./Node.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Element";

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
  throw new TypeError(`${context} is not of type 'Element'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["Element"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor Element is not installed on the passed global object");
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

exports._internalSetup = (wrapper, globalObject) => {
  Node._internalSetup(wrapper, globalObject);
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

  if (globalObject.Node === undefined) {
    throw new Error("Internal error: attempting to evaluate Element before Node");
  }
  class Element extends globalObject.Node {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    hasAttributes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'hasAttributes' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol].hasAttributes();
    }

    getAttributeNames() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getAttributeNames' called on an object that is not a valid instance of Element.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].getAttributeNames());
    }

    getAttribute(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getAttribute' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getAttribute' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getAttribute' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].getAttribute(...args);
    }

    getAttributeNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getAttributeNS' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'getAttributeNS' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'getAttributeNS' on 'Element': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getAttributeNS' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].getAttributeNS(...args);
    }

    setAttribute(qualifiedName, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'setAttribute' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setAttribute' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setAttribute' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].setAttribute(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    setAttributeNS(namespace, qualifiedName, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'setAttributeNS' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 3) {
        throw new TypeError(
          "Failed to execute 'setAttributeNS' on 'Element': 3 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'setAttributeNS' on 'Element': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setAttributeNS' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setAttributeNS' on 'Element': parameter 3"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].setAttributeNS(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    removeAttribute(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'removeAttribute' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'removeAttribute' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'removeAttribute' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].removeAttribute(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    removeAttributeNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'removeAttributeNS' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'removeAttributeNS' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'removeAttributeNS' on 'Element': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'removeAttributeNS' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].removeAttributeNS(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    toggleAttribute(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'toggleAttribute' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'toggleAttribute' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'toggleAttribute' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'toggleAttribute' on 'Element': parameter 2"
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].toggleAttribute(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    hasAttribute(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'hasAttribute' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'hasAttribute' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'hasAttribute' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].hasAttribute(...args);
    }

    hasAttributeNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'hasAttributeNS' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'hasAttributeNS' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'hasAttributeNS' on 'Element': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'hasAttributeNS' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].hasAttributeNS(...args);
    }

    getAttributeNode(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getAttributeNode' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getAttributeNode' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getAttributeNode' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getAttributeNode(...args));
    }

    getAttributeNodeNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getAttributeNodeNS' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'getAttributeNodeNS' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'getAttributeNodeNS' on 'Element': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getAttributeNodeNS' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getAttributeNodeNS(...args));
    }

    setAttributeNode(attr) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'setAttributeNode' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'setAttributeNode' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Attr.convert(curArg, { context: "Failed to execute 'setAttributeNode' on 'Element': parameter 1" });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].setAttributeNode(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    setAttributeNodeNS(attr) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'setAttributeNodeNS' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'setAttributeNodeNS' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Attr.convert(curArg, { context: "Failed to execute 'setAttributeNodeNS' on 'Element': parameter 1" });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].setAttributeNodeNS(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    removeAttributeNode(attr) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'removeAttributeNode' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'removeAttributeNode' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Attr.convert(curArg, { context: "Failed to execute 'removeAttributeNode' on 'Element': parameter 1" });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].removeAttributeNode(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    attachShadow(init) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'attachShadow' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'attachShadow' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = ShadowRootInit.convert(curArg, {
          context: "Failed to execute 'attachShadow' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].attachShadow(...args));
    }

    closest(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'closest' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'closest' on 'Element': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'closest' on 'Element': parameter 1" });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].closest(...args));
    }

    matches(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'matches' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'matches' on 'Element': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'matches' on 'Element': parameter 1" });
        args.push(curArg);
      }
      return esValue[implSymbol].matches(...args);
    }

    webkitMatchesSelector(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'webkitMatchesSelector' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'webkitMatchesSelector' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'webkitMatchesSelector' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].webkitMatchesSelector(...args);
    }

    getElementsByTagName(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getElementsByTagName' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getElementsByTagName' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByTagName' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByTagName(...args));
    }

    getElementsByTagNameNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getElementsByTagNameNS' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'getElementsByTagNameNS' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'getElementsByTagNameNS' on 'Element': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByTagNameNS' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByTagNameNS(...args));
    }

    getElementsByClassName(classNames) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getElementsByClassName' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getElementsByClassName' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByClassName' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByClassName(...args));
    }

    insertAdjacentElement(where, element) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'insertAdjacentElement' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'insertAdjacentElement' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentElement' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = exports.convert(curArg, {
          context: "Failed to execute 'insertAdjacentElement' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].insertAdjacentElement(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    insertAdjacentText(where, data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'insertAdjacentText' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'insertAdjacentText' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentText' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentText' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].insertAdjacentText(...args);
    }

    insertAdjacentHTML(position, text) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'insertAdjacentHTML' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'insertAdjacentHTML' on 'Element': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentHTML' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentHTML' on 'Element': parameter 2"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].insertAdjacentHTML(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    getClientRects() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getClientRects' called on an object that is not a valid instance of Element.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].getClientRects());
    }

    getBoundingClientRect() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getBoundingClientRect' called on an object that is not a valid instance of Element.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].getBoundingClientRect());
    }

    before() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'before' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'before' on 'Element': parameter " + (i + 1)
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].before(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    after() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'after' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'after' on 'Element': parameter " + (i + 1)
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].after(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    replaceWith() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'replaceWith' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'replaceWith' on 'Element': parameter " + (i + 1)
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].replaceWith(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    remove() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'remove' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].remove();
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    prepend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'prepend' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'prepend' on 'Element': parameter " + (i + 1)
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].prepend(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    append() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'append' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'append' on 'Element': parameter " + (i + 1)
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].append(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    replaceChildren() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'replaceChildren' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'replaceChildren' on 'Element': parameter " + (i + 1)
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].replaceChildren(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    querySelector(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'querySelector' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'querySelector' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'querySelector' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].querySelector(...args));
    }

    querySelectorAll(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'querySelectorAll' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'querySelectorAll' on 'Element': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'querySelectorAll' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].querySelectorAll(...args));
    }

    get namespaceURI() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get namespaceURI' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["namespaceURI"];
    }

    get prefix() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get prefix' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["prefix"];
    }

    get localName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get localName' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["localName"];
    }

    get tagName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get tagName' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["tagName"];
    }

    get id() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get id' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "id");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set id(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set id' called on an object that is not a valid instance of Element.");
      }

      V = conversions["DOMString"](V, { context: "Failed to set the 'id' property on 'Element': The provided value" });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "id", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get className() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get className' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "class");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set className(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set className' called on an object that is not a valid instance of Element.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'className' property on 'Element': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "class", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get classList() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get classList' called on an object that is not a valid instance of Element.");
      }

      return utils.getSameObject(this, "classList", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["classList"]);
      });
    }

    set classList(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set classList' called on an object that is not a valid instance of Element.");
      }

      const Q = esValue["classList"];
      if (!utils.isObject(Q)) {
        throw new TypeError("Property 'classList' is not an object");
      }
      Reflect.set(Q, "value", V);
    }

    get slot() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get slot' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "slot");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set slot(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set slot' called on an object that is not a valid instance of Element.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'slot' property on 'Element': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "slot", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get attributes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get attributes' called on an object that is not a valid instance of Element.");
      }

      return utils.getSameObject(this, "attributes", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["attributes"]);
      });
    }

    get shadowRoot() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get shadowRoot' called on an object that is not a valid instance of Element.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["shadowRoot"]);
    }

    get outerHTML() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get outerHTML' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["outerHTML"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set outerHTML(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set outerHTML' called on an object that is not a valid instance of Element.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'outerHTML' property on 'Element': The provided value",
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["outerHTML"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get scrollTop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get scrollTop' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["scrollTop"];
    }

    set scrollTop(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set scrollTop' called on an object that is not a valid instance of Element.");
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'scrollTop' property on 'Element': The provided value"
      });

      esValue[implSymbol]["scrollTop"] = V;
    }

    get scrollLeft() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get scrollLeft' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["scrollLeft"];
    }

    set scrollLeft(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set scrollLeft' called on an object that is not a valid instance of Element.");
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'scrollLeft' property on 'Element': The provided value"
      });

      esValue[implSymbol]["scrollLeft"] = V;
    }

    get scrollWidth() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get scrollWidth' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["scrollWidth"];
    }

    get scrollHeight() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get scrollHeight' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["scrollHeight"];
    }

    get clientTop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get clientTop' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["clientTop"];
    }

    get clientLeft() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get clientLeft' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["clientLeft"];
    }

    get clientWidth() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get clientWidth' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["clientWidth"];
    }

    get clientHeight() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get clientHeight' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["clientHeight"];
    }

    get innerHTML() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get innerHTML' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["innerHTML"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set innerHTML(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set innerHTML' called on an object that is not a valid instance of Element.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'innerHTML' property on 'Element': The provided value",
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["innerHTML"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get previousElementSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get previousElementSibling' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["previousElementSibling"]);
    }

    get nextElementSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get nextElementSibling' called on an object that is not a valid instance of Element.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["nextElementSibling"]);
    }

    get children() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get children' called on an object that is not a valid instance of Element.");
      }

      return utils.getSameObject(this, "children", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["children"]);
      });
    }

    get firstElementChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get firstElementChild' called on an object that is not a valid instance of Element.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["firstElementChild"]);
    }

    get lastElementChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get lastElementChild' called on an object that is not a valid instance of Element.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["lastElementChild"]);
    }

    get childElementCount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get childElementCount' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["childElementCount"];
    }

    get assignedSlot() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get assignedSlot' called on an object that is not a valid instance of Element.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["assignedSlot"]);
    }
  }
  Object.defineProperties(Element.prototype, {
    hasAttributes: { enumerable: true },
    getAttributeNames: { enumerable: true },
    getAttribute: { enumerable: true },
    getAttributeNS: { enumerable: true },
    setAttribute: { enumerable: true },
    setAttributeNS: { enumerable: true },
    removeAttribute: { enumerable: true },
    removeAttributeNS: { enumerable: true },
    toggleAttribute: { enumerable: true },
    hasAttribute: { enumerable: true },
    hasAttributeNS: { enumerable: true },
    getAttributeNode: { enumerable: true },
    getAttributeNodeNS: { enumerable: true },
    setAttributeNode: { enumerable: true },
    setAttributeNodeNS: { enumerable: true },
    removeAttributeNode: { enumerable: true },
    attachShadow: { enumerable: true },
    closest: { enumerable: true },
    matches: { enumerable: true },
    webkitMatchesSelector: { enumerable: true },
    getElementsByTagName: { enumerable: true },
    getElementsByTagNameNS: { enumerable: true },
    getElementsByClassName: { enumerable: true },
    insertAdjacentElement: { enumerable: true },
    insertAdjacentText: { enumerable: true },
    insertAdjacentHTML: { enumerable: true },
    getClientRects: { enumerable: true },
    getBoundingClientRect: { enumerable: true },
    before: { enumerable: true },
    after: { enumerable: true },
    replaceWith: { enumerable: true },
    remove: { enumerable: true },
    prepend: { enumerable: true },
    append: { enumerable: true },
    replaceChildren: { enumerable: true },
    querySelector: { enumerable: true },
    querySelectorAll: { enumerable: true },
    namespaceURI: { enumerable: true },
    prefix: { enumerable: true },
    localName: { enumerable: true },
    tagName: { enumerable: true },
    id: { enumerable: true },
    className: { enumerable: true },
    classList: { enumerable: true },
    slot: { enumerable: true },
    attributes: { enumerable: true },
    shadowRoot: { enumerable: true },
    outerHTML: { enumerable: true },
    scrollTop: { enumerable: true },
    scrollLeft: { enumerable: true },
    scrollWidth: { enumerable: true },
    scrollHeight: { enumerable: true },
    clientTop: { enumerable: true },
    clientLeft: { enumerable: true },
    clientWidth: { enumerable: true },
    clientHeight: { enumerable: true },
    innerHTML: { enumerable: true },
    previousElementSibling: { enumerable: true },
    nextElementSibling: { enumerable: true },
    children: { enumerable: true },
    firstElementChild: { enumerable: true },
    lastElementChild: { enumerable: true },
    childElementCount: { enumerable: true },
    assignedSlot: { enumerable: true },
    [Symbol.toStringTag]: { value: "Element", configurable: true },
    [Symbol.unscopables]: {
      value: {
        slot: true,
        before: true,
        after: true,
        replaceWith: true,
        remove: true,
        prepend: true,
        append: true,
        replaceChildren: true,
        __proto__: null
      },
      configurable: true
    }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = Element;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Element
  });
};

const Impl = require("../nodes/Element-impl.js");
