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
exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new globalObject.TypeError(`${context} is not of type 'Element'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Element"].prototype;
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
  class Element extends globalObject.Node {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    hasAttributes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'hasAttributes' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol].hasAttributes();
    }

    getAttributeNames() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getAttributeNames' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].getAttributeNames());
    }

    getAttribute(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'getAttribute' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getAttribute' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getAttribute' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].getAttribute(...args);
    }

    getAttributeNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getAttributeNS' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'getAttributeNS' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'getAttributeNS' on 'Element': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getAttributeNS' on 'Element': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].getAttributeNS(...args);
    }

    setAttribute(qualifiedName, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'setAttribute' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setAttribute' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setAttribute' on 'Element': parameter 2",
          globals: globalObject
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
        throw new globalObject.TypeError(
          "'setAttributeNS' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 3) {
        throw new globalObject.TypeError(
          `Failed to execute 'setAttributeNS' on 'Element': 3 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'setAttributeNS' on 'Element': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setAttributeNS' on 'Element': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setAttributeNS' on 'Element': parameter 3",
          globals: globalObject
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
        throw new globalObject.TypeError(
          "'removeAttribute' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'removeAttribute' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'removeAttribute' on 'Element': parameter 1",
          globals: globalObject
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
        throw new globalObject.TypeError(
          "'removeAttributeNS' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'removeAttributeNS' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'removeAttributeNS' on 'Element': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'removeAttributeNS' on 'Element': parameter 2",
          globals: globalObject
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
        throw new globalObject.TypeError(
          "'toggleAttribute' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'toggleAttribute' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'toggleAttribute' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'toggleAttribute' on 'Element': parameter 2",
            globals: globalObject
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
        throw new globalObject.TypeError("'hasAttribute' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'hasAttribute' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'hasAttribute' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].hasAttribute(...args);
    }

    hasAttributeNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'hasAttributeNS' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'hasAttributeNS' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'hasAttributeNS' on 'Element': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'hasAttributeNS' on 'Element': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].hasAttributeNS(...args);
    }

    getAttributeNode(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getAttributeNode' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getAttributeNode' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getAttributeNode' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getAttributeNode(...args));
    }

    getAttributeNodeNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getAttributeNodeNS' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'getAttributeNodeNS' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'getAttributeNodeNS' on 'Element': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getAttributeNodeNS' on 'Element': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getAttributeNodeNS(...args));
    }

    setAttributeNode(attr) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'setAttributeNode' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setAttributeNode' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Attr.convert(globalObject, curArg, {
          context: "Failed to execute 'setAttributeNode' on 'Element': parameter 1"
        });
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
        throw new globalObject.TypeError(
          "'setAttributeNodeNS' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'setAttributeNodeNS' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Attr.convert(globalObject, curArg, {
          context: "Failed to execute 'setAttributeNodeNS' on 'Element': parameter 1"
        });
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
        throw new globalObject.TypeError(
          "'removeAttributeNode' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'removeAttributeNode' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Attr.convert(globalObject, curArg, {
          context: "Failed to execute 'removeAttributeNode' on 'Element': parameter 1"
        });
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
        throw new globalObject.TypeError("'attachShadow' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'attachShadow' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = ShadowRootInit.convert(globalObject, curArg, {
          context: "Failed to execute 'attachShadow' on 'Element': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].attachShadow(...args));
    }

    closest(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'closest' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'closest' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'closest' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].closest(...args));
    }

    matches(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'matches' called on an object that is not a valid instance of Element.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'matches' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'matches' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].matches(...args);
    }

    webkitMatchesSelector(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'webkitMatchesSelector' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'webkitMatchesSelector' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'webkitMatchesSelector' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].webkitMatchesSelector(...args);
    }

    getElementsByTagName(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getElementsByTagName' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getElementsByTagName' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByTagName' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByTagName(...args));
    }

    getElementsByTagNameNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getElementsByTagNameNS' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'getElementsByTagNameNS' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'getElementsByTagNameNS' on 'Element': parameter 1",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByTagNameNS' on 'Element': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByTagNameNS(...args));
    }

    getElementsByClassName(classNames) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getElementsByClassName' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getElementsByClassName' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByClassName' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByClassName(...args));
    }

    insertAdjacentElement(where, element) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'insertAdjacentElement' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'insertAdjacentElement' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentElement' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = exports.convert(globalObject, curArg, {
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
        throw new globalObject.TypeError(
          "'insertAdjacentText' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'insertAdjacentText' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentText' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentText' on 'Element': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].insertAdjacentText(...args);
    }

    insertAdjacentHTML(position, text) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'insertAdjacentHTML' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'insertAdjacentHTML' on 'Element': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentHTML' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertAdjacentHTML' on 'Element': parameter 2",
          globals: globalObject
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
        throw new globalObject.TypeError(
          "'getClientRects' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].getClientRects());
    }

    getBoundingClientRect() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getBoundingClientRect' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].getBoundingClientRect());
    }

    before() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'before' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'before' on 'Element': parameter " + (i + 1),
            globals: globalObject
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
        throw new globalObject.TypeError("'after' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'after' on 'Element': parameter " + (i + 1),
            globals: globalObject
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
        throw new globalObject.TypeError("'replaceWith' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'replaceWith' on 'Element': parameter " + (i + 1),
            globals: globalObject
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
        throw new globalObject.TypeError("'remove' called on an object that is not a valid instance of Element.");
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
        throw new globalObject.TypeError("'prepend' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'prepend' on 'Element': parameter " + (i + 1),
            globals: globalObject
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
        throw new globalObject.TypeError("'append' called on an object that is not a valid instance of Element.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'append' on 'Element': parameter " + (i + 1),
            globals: globalObject
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
        throw new globalObject.TypeError(
          "'replaceChildren' called on an object that is not a valid instance of Element."
        );
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'replaceChildren' on 'Element': parameter " + (i + 1),
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].replaceChildren(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    querySelector(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'querySelector' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'querySelector' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'querySelector' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].querySelector(...args));
    }

    querySelectorAll(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'querySelectorAll' called on an object that is not a valid instance of Element."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'querySelectorAll' on 'Element': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'querySelectorAll' on 'Element': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].querySelectorAll(...args));
    }

    get namespaceURI() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get namespaceURI' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["namespaceURI"];
    }

    get prefix() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get prefix' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["prefix"];
    }

    get localName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get localName' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["localName"];
    }

    get tagName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get tagName' called on an object that is not a valid instance of Element.");
      }

      return esValue[implSymbol]["tagName"];
    }

    get id() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get id' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("id");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set id(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set id' called on an object that is not a valid instance of Element.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'id' property on 'Element': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("id", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get className() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get className' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("class");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set className(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set className' called on an object that is not a valid instance of Element."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'className' property on 'Element': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("class", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get classList() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get classList' called on an object that is not a valid instance of Element."
        );
      }

      return utils.getSameObject(this, "classList", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["classList"]);
      });
    }

    set classList(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set classList' called on an object that is not a valid instance of Element."
        );
      }

      const Q = esValue["classList"];
      if (!utils.isObject(Q)) {
        throw new globalObject.TypeError("Property 'classList' is not an object");
      }
      Reflect.set(Q, "value", V);
    }

    get slot() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get slot' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("slot");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set slot(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set slot' called on an object that is not a valid instance of Element.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'slot' property on 'Element': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("slot", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get attributes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get attributes' called on an object that is not a valid instance of Element."
        );
      }

      return utils.getSameObject(this, "attributes", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["attributes"]);
      });
    }

    get shadowRoot() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get shadowRoot' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["shadowRoot"]);
    }

    get outerHTML() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get outerHTML' called on an object that is not a valid instance of Element."
        );
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
        throw new globalObject.TypeError(
          "'set outerHTML' called on an object that is not a valid instance of Element."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'outerHTML' property on 'Element': The provided value",
        globals: globalObject,
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
        throw new globalObject.TypeError(
          "'get scrollTop' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["scrollTop"];
    }

    set scrollTop(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set scrollTop' called on an object that is not a valid instance of Element."
        );
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'scrollTop' property on 'Element': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["scrollTop"] = V;
    }

    get scrollLeft() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get scrollLeft' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["scrollLeft"];
    }

    set scrollLeft(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set scrollLeft' called on an object that is not a valid instance of Element."
        );
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'scrollLeft' property on 'Element': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["scrollLeft"] = V;
    }

    get scrollWidth() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get scrollWidth' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["scrollWidth"];
    }

    get scrollHeight() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get scrollHeight' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["scrollHeight"];
    }

    get clientTop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get clientTop' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["clientTop"];
    }

    get clientLeft() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get clientLeft' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["clientLeft"];
    }

    get clientWidth() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get clientWidth' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["clientWidth"];
    }

    get clientHeight() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get clientHeight' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["clientHeight"];
    }

    get innerHTML() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get innerHTML' called on an object that is not a valid instance of Element."
        );
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
        throw new globalObject.TypeError(
          "'set innerHTML' called on an object that is not a valid instance of Element."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'innerHTML' property on 'Element': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["innerHTML"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get role() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get role' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("role");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set role(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set role' called on an object that is not a valid instance of Element.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'role' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("role");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("role", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaAtomic() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaAtomic' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-atomic");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaAtomic(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaAtomic' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaAtomic' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-atomic");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-atomic", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaAutoComplete() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaAutoComplete' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-autocomplete");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaAutoComplete(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaAutoComplete' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaAutoComplete' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-autocomplete");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-autocomplete", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaBusy() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get ariaBusy' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-busy");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaBusy(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set ariaBusy' called on an object that is not a valid instance of Element.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaBusy' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-busy");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-busy", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaChecked() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaChecked' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-checked");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaChecked(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaChecked' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaChecked' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-checked");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-checked", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaColCount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaColCount' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-colcount");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaColCount(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaColCount' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaColCount' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-colcount");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-colcount", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaColIndex() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaColIndex' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-colindex");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaColIndex(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaColIndex' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaColIndex' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-colindex");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-colindex", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaColIndexText() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaColIndexText' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-colindextext");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaColIndexText(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaColIndexText' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaColIndexText' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-colindextext");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-colindextext", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaColSpan() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaColSpan' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-colspan");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaColSpan(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaColSpan' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaColSpan' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-colspan");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-colspan", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaCurrent() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaCurrent' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-current");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaCurrent(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaCurrent' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaCurrent' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-current");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-current", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaDescription() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaDescription' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-description");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaDescription(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaDescription' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaDescription' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-description");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-description", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaDisabled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaDisabled' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-disabled");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaDisabled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaDisabled' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaDisabled' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-disabled");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-disabled", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaExpanded() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaExpanded' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-expanded");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaExpanded(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaExpanded' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaExpanded' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-expanded");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-expanded", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaHasPopup() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaHasPopup' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-haspopup");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaHasPopup(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaHasPopup' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaHasPopup' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-haspopup");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-haspopup", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaHidden() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaHidden' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-hidden");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaHidden(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaHidden' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaHidden' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-hidden");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-hidden", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaInvalid() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaInvalid' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-invalid");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaInvalid(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaInvalid' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaInvalid' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-invalid");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-invalid", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaKeyShortcuts() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaKeyShortcuts' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-keyshortcuts");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaKeyShortcuts(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaKeyShortcuts' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaKeyShortcuts' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-keyshortcuts");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-keyshortcuts", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaLabel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaLabel' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-label");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaLabel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaLabel' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaLabel' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-label");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-label", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaLevel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaLevel' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-level");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaLevel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaLevel' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaLevel' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-level");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-level", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaLive() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get ariaLive' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-live");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaLive(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set ariaLive' called on an object that is not a valid instance of Element.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaLive' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-live");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-live", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaModal() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaModal' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-modal");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaModal(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaModal' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaModal' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-modal");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-modal", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaMultiLine() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaMultiLine' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-multiline");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaMultiLine(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaMultiLine' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaMultiLine' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-multiline");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-multiline", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaMultiSelectable() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaMultiSelectable' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-multiselectable");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaMultiSelectable(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaMultiSelectable' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaMultiSelectable' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-multiselectable");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-multiselectable", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaOrientation() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaOrientation' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-orientation");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaOrientation(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaOrientation' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaOrientation' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-orientation");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-orientation", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaPlaceholder() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaPlaceholder' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-placeholder");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaPlaceholder(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaPlaceholder' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaPlaceholder' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-placeholder");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-placeholder", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaPosInSet() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaPosInSet' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-posinset");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaPosInSet(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaPosInSet' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaPosInSet' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-posinset");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-posinset", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaPressed() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaPressed' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-pressed");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaPressed(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaPressed' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaPressed' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-pressed");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-pressed", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaReadOnly() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaReadOnly' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-readonly");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaReadOnly(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaReadOnly' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaReadOnly' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-readonly");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-readonly", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRequired() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRequired' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-required");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRequired(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRequired' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRequired' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-required");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-required", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRoleDescription() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRoleDescription' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-roledescription");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRoleDescription(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRoleDescription' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRoleDescription' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-roledescription");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-roledescription", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRowCount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRowCount' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-rowcount");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRowCount(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRowCount' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRowCount' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-rowcount");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-rowcount", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRowIndex() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRowIndex' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-rowindex");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRowIndex(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRowIndex' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRowIndex' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-rowindex");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-rowindex", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRowIndexText() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRowIndexText' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-rowindextext");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRowIndexText(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRowIndexText' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRowIndexText' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-rowindextext");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-rowindextext", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRowSpan() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRowSpan' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-rowspan");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRowSpan(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRowSpan' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRowSpan' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-rowspan");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-rowspan", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaSelected() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaSelected' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-selected");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaSelected(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaSelected' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaSelected' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-selected");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-selected", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaSetSize() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaSetSize' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-setsize");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaSetSize(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaSetSize' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaSetSize' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-setsize");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-setsize", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaSort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get ariaSort' called on an object that is not a valid instance of Element.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-sort");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaSort(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set ariaSort' called on an object that is not a valid instance of Element.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaSort' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-sort");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-sort", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaValueMax() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaValueMax' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-valuemax");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaValueMax(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaValueMax' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaValueMax' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-valuemax");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-valuemax", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaValueMin() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaValueMin' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-valuemin");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaValueMin(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaValueMin' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaValueMin' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-valuemin");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-valuemin", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaValueNow() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaValueNow' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-valuenow");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaValueNow(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaValueNow' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaValueNow' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-valuenow");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-valuenow", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaValueText() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaValueText' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-valuetext");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaValueText(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaValueText' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaValueText' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-valuetext");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-valuetext", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ariaRelevant() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ariaRelevant' called on an object that is not a valid instance of Element."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("aria-relevant");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set ariaRelevant(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ariaRelevant' called on an object that is not a valid instance of Element."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'ariaRelevant' property on 'Element': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("aria-relevant");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("aria-relevant", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get previousElementSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get previousElementSibling' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["previousElementSibling"]);
    }

    get nextElementSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get nextElementSibling' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["nextElementSibling"]);
    }

    get children() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get children' called on an object that is not a valid instance of Element.");
      }

      return utils.getSameObject(this, "children", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["children"]);
      });
    }

    get firstElementChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get firstElementChild' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["firstElementChild"]);
    }

    get lastElementChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get lastElementChild' called on an object that is not a valid instance of Element."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["lastElementChild"]);
    }

    get childElementCount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get childElementCount' called on an object that is not a valid instance of Element."
        );
      }

      return esValue[implSymbol]["childElementCount"];
    }

    get assignedSlot() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get assignedSlot' called on an object that is not a valid instance of Element."
        );
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
    role: { enumerable: true },
    ariaAtomic: { enumerable: true },
    ariaAutoComplete: { enumerable: true },
    ariaBusy: { enumerable: true },
    ariaChecked: { enumerable: true },
    ariaColCount: { enumerable: true },
    ariaColIndex: { enumerable: true },
    ariaColIndexText: { enumerable: true },
    ariaColSpan: { enumerable: true },
    ariaCurrent: { enumerable: true },
    ariaDescription: { enumerable: true },
    ariaDisabled: { enumerable: true },
    ariaExpanded: { enumerable: true },
    ariaHasPopup: { enumerable: true },
    ariaHidden: { enumerable: true },
    ariaInvalid: { enumerable: true },
    ariaKeyShortcuts: { enumerable: true },
    ariaLabel: { enumerable: true },
    ariaLevel: { enumerable: true },
    ariaLive: { enumerable: true },
    ariaModal: { enumerable: true },
    ariaMultiLine: { enumerable: true },
    ariaMultiSelectable: { enumerable: true },
    ariaOrientation: { enumerable: true },
    ariaPlaceholder: { enumerable: true },
    ariaPosInSet: { enumerable: true },
    ariaPressed: { enumerable: true },
    ariaReadOnly: { enumerable: true },
    ariaRequired: { enumerable: true },
    ariaRoleDescription: { enumerable: true },
    ariaRowCount: { enumerable: true },
    ariaRowIndex: { enumerable: true },
    ariaRowIndexText: { enumerable: true },
    ariaRowSpan: { enumerable: true },
    ariaSelected: { enumerable: true },
    ariaSetSize: { enumerable: true },
    ariaSort: { enumerable: true },
    ariaValueMax: { enumerable: true },
    ariaValueMin: { enumerable: true },
    ariaValueNow: { enumerable: true },
    ariaValueText: { enumerable: true },
    ariaRelevant: { enumerable: true },
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
  ctorRegistry[interfaceName] = Element;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Element
  });
};

const Impl = require("../nodes/Element-impl.js");
