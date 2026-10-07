"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const ElementCreationOptions = require("./ElementCreationOptions.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const Node = require("./Node.js");
const NodeFilter = require("./NodeFilter.js");
const HTMLElement = require("./HTMLElement.js");
const EventHandlerNonNull = require("./EventHandlerNonNull.js");
const OnErrorEventHandlerNonNull = require("./OnErrorEventHandlerNonNull.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Document";

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
  throw new TypeError(`${context} is not of type 'Document'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["Document"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor Document is not installed on the passed global object");
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

  Object.defineProperties(
    wrapper,
    Object.getOwnPropertyDescriptors({
      get location() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get location' called on an object that is not a valid instance of Document.");
        }

        return utils.tryWrapperForImpl(esValue[implSymbol]["location"]);
      },
      set location(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set location' called on an object that is not a valid instance of Document.");
        }

        const Q = esValue["location"];
        if (!utils.isObject(Q)) {
          throw new TypeError("Property 'location' is not an object");
        }
        Reflect.set(Q, "href", V);
      }
    })
  );

  Object.defineProperties(wrapper, { location: { configurable: false } });
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
    throw new Error("Internal error: attempting to evaluate Document before Node");
  }
  class Document extends globalObject.Node {
    constructor() {
      return exports.setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    getElementsByTagName(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getElementsByTagName' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getElementsByTagName' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByTagName' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByTagName(...args));
    }

    getElementsByTagNameNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getElementsByTagNameNS' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'getElementsByTagNameNS' on 'Document': 2 arguments required, but only " +
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
            context: "Failed to execute 'getElementsByTagNameNS' on 'Document': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByTagNameNS' on 'Document': parameter 2"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByTagNameNS(...args));
    }

    getElementsByClassName(classNames) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getElementsByClassName' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByClassName' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByClassName(...args));
    }

    createElement(localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createElement' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'createElement' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createElement' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = ElementCreationOptions.convert(curArg, {
              context: "Failed to execute 'createElement' on 'Document': parameter 2"
            });
          } else if (utils.isObject(curArg)) {
            curArg = ElementCreationOptions.convert(curArg, {
              context: "Failed to execute 'createElement' on 'Document': parameter 2" + " dictionary"
            });
          } else {
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to execute 'createElement' on 'Document': parameter 2"
            });
          }
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].createElement(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    createElementNS(namespace, qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createElementNS' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'createElementNS' on 'Document': 2 arguments required, but only " +
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
            context: "Failed to execute 'createElementNS' on 'Document': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createElementNS' on 'Document': parameter 2"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = ElementCreationOptions.convert(curArg, {
              context: "Failed to execute 'createElementNS' on 'Document': parameter 3"
            });
          } else if (utils.isObject(curArg)) {
            curArg = ElementCreationOptions.convert(curArg, {
              context: "Failed to execute 'createElementNS' on 'Document': parameter 3" + " dictionary"
            });
          } else {
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to execute 'createElementNS' on 'Document': parameter 3"
            });
          }
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].createElementNS(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    createDocumentFragment() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createDocumentFragment' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].createDocumentFragment());
    }

    createTextNode(data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createTextNode' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'createTextNode' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createTextNode' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createTextNode(...args));
    }

    createCDATASection(data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createCDATASection' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'createCDATASection' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createCDATASection' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createCDATASection(...args));
    }

    createComment(data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createComment' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'createComment' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createComment' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createComment(...args));
    }

    createProcessingInstruction(target, data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError(
          "'createProcessingInstruction' called on an object that is not a valid instance of Document."
        );
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'createProcessingInstruction' on 'Document': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createProcessingInstruction' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createProcessingInstruction' on 'Document': parameter 2"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createProcessingInstruction(...args));
    }

    importNode(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'importNode' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'importNode' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(curArg, { context: "Failed to execute 'importNode' on 'Document': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'importNode' on 'Document': parameter 2"
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].importNode(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    adoptNode(node) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'adoptNode' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'adoptNode' on 'Document': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(curArg, { context: "Failed to execute 'adoptNode' on 'Document': parameter 1" });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].adoptNode(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    createAttribute(localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createAttribute' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'createAttribute' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createAttribute' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createAttribute(...args));
    }

    createAttributeNS(namespace, qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createAttributeNS' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'createAttributeNS' on 'Document': 2 arguments required, but only " +
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
            context: "Failed to execute 'createAttributeNS' on 'Document': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createAttributeNS' on 'Document': parameter 2"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createAttributeNS(...args));
    }

    createEvent(interface_) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createEvent' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'createEvent' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'createEvent' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createEvent(...args));
    }

    createRange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createRange' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].createRange());
    }

    createNodeIterator(root) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createNodeIterator' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'createNodeIterator' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(curArg, { context: "Failed to execute 'createNodeIterator' on 'Document': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["unsigned long"](curArg, {
            context: "Failed to execute 'createNodeIterator' on 'Document': parameter 2"
          });
        } else {
          curArg = 0xffffffff;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = null;
          } else {
            curArg = NodeFilter.convert(curArg, {
              context: "Failed to execute 'createNodeIterator' on 'Document': parameter 3"
            });
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createNodeIterator(...args));
    }

    createTreeWalker(root) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createTreeWalker' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'createTreeWalker' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(curArg, { context: "Failed to execute 'createTreeWalker' on 'Document': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["unsigned long"](curArg, {
            context: "Failed to execute 'createTreeWalker' on 'Document': parameter 2"
          });
        } else {
          curArg = 0xffffffff;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = null;
          } else {
            curArg = NodeFilter.convert(curArg, {
              context: "Failed to execute 'createTreeWalker' on 'Document': parameter 3"
            });
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createTreeWalker(...args));
    }

    getElementsByName(elementName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getElementsByName' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getElementsByName' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementsByName' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementsByName(...args));
    }

    open() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'open' called on an object that is not a valid instance of Document.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'open' on 'Document': parameter 1" });
        } else {
          curArg = "text/html";
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'open' on 'Document': parameter 2" });
        } else {
          curArg = "";
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].open(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    close() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'close' called on an object that is not a valid instance of Document.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].close();
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    write() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'write' called on an object that is not a valid instance of Document.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'write' on 'Document': parameter " + (i + 1)
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].write(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    writeln() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'writeln' called on an object that is not a valid instance of Document.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'writeln' on 'Document': parameter " + (i + 1)
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].writeln(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    hasFocus() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'hasFocus' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol].hasFocus();
    }

    clear() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'clear' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol].clear();
    }

    captureEvents() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'captureEvents' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol].captureEvents();
    }

    releaseEvents() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'releaseEvents' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol].releaseEvents();
    }

    getSelection() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getSelection' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].getSelection());
    }

    getElementById(elementId) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getElementById' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getElementById' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementById' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementById(...args));
    }

    prepend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'prepend' called on an object that is not a valid instance of Document.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'prepend' on 'Document': parameter " + (i + 1)
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
        throw new TypeError("'append' called on an object that is not a valid instance of Document.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'append' on 'Document': parameter " + (i + 1)
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
        throw new TypeError("'replaceChildren' called on an object that is not a valid instance of Document.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'replaceChildren' on 'Document': parameter " + (i + 1)
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
        throw new TypeError("'querySelector' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'querySelector' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'querySelector' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].querySelector(...args));
    }

    querySelectorAll(selectors) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'querySelectorAll' called on an object that is not a valid instance of Document.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'querySelectorAll' on 'Document': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].querySelectorAll(...args));
    }

    get implementation() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get implementation' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "implementation", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["implementation"]);
      });
    }

    get URL() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get URL' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["URL"];
    }

    get documentURI() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get documentURI' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["documentURI"];
    }

    get compatMode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get compatMode' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["compatMode"];
    }

    get characterSet() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get characterSet' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["characterSet"];
    }

    get charset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get charset' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["charset"];
    }

    get inputEncoding() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get inputEncoding' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["inputEncoding"];
    }

    get contentType() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get contentType' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["contentType"];
    }

    get doctype() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get doctype' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["doctype"]);
    }

    get documentElement() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get documentElement' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["documentElement"]);
    }

    get referrer() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get referrer' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["referrer"];
    }

    get cookie() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get cookie' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["cookie"];
    }

    set cookie(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set cookie' called on an object that is not a valid instance of Document.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'cookie' property on 'Document': The provided value"
      });

      esValue[implSymbol]["cookie"] = V;
    }

    get lastModified() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get lastModified' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["lastModified"];
    }

    get readyState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get readyState' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["readyState"]);
    }

    get title() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get title' called on an object that is not a valid instance of Document.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["title"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set title(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set title' called on an object that is not a valid instance of Document.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'title' property on 'Document': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["title"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get dir() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get dir' called on an object that is not a valid instance of Document.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["dir"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set dir(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set dir' called on an object that is not a valid instance of Document.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'dir' property on 'Document': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["dir"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get body() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get body' called on an object that is not a valid instance of Document.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol]["body"]);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set body(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set body' called on an object that is not a valid instance of Document.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = HTMLElement.convert(V, { context: "Failed to set the 'body' property on 'Document': The provided value" });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["body"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get head() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get head' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["head"]);
    }

    get images() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get images' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "images", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["images"]);
      });
    }

    get embeds() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get embeds' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "embeds", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["embeds"]);
      });
    }

    get plugins() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get plugins' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "plugins", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["plugins"]);
      });
    }

    get links() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get links' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "links", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["links"]);
      });
    }

    get forms() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get forms' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "forms", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["forms"]);
      });
    }

    get scripts() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get scripts' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "scripts", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["scripts"]);
      });
    }

    get currentScript() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get currentScript' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["currentScript"]);
    }

    get defaultView() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get defaultView' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["defaultView"]);
    }

    get onreadystatechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onreadystatechange"]);
    }

    set onreadystatechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onreadystatechange' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onreadystatechange"] = V;
    }

    get anchors() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get anchors' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "anchors", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["anchors"]);
      });
    }

    get applets() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get applets' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "applets", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["applets"]);
      });
    }

    get styleSheets() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get styleSheets' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "styleSheets", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["styleSheets"]);
      });
    }

    get hidden() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get hidden' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["hidden"];
    }

    get visibilityState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get visibilityState' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["visibilityState"]);
    }

    get onvisibilitychange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onvisibilitychange' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onvisibilitychange"]);
    }

    set onvisibilitychange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onvisibilitychange' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onvisibilitychange' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onvisibilitychange"] = V;
    }

    get onabort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onabort' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onabort"]);
    }

    set onabort(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onabort' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onabort' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onabort"] = V;
    }

    get onauxclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onauxclick' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onauxclick"]);
    }

    set onauxclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onauxclick' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onauxclick' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onauxclick"] = V;
    }

    get onblur() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onblur' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onblur"]);
    }

    set onblur(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onblur' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onblur' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onblur"] = V;
    }

    get oncancel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncancel' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncancel"]);
    }

    set oncancel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncancel' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncancel' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["oncancel"] = V;
    }

    get oncanplay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncanplay' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncanplay"]);
    }

    set oncanplay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncanplay' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncanplay' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["oncanplay"] = V;
    }

    get oncanplaythrough() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncanplaythrough' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncanplaythrough"]);
    }

    set oncanplaythrough(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncanplaythrough' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncanplaythrough' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["oncanplaythrough"] = V;
    }

    get onchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onchange' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onchange"]);
    }

    set onchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onchange' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onchange' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onchange"] = V;
    }

    get onclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onclick' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onclick"]);
    }

    set onclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onclick' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onclick' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onclick"] = V;
    }

    get onclose() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onclose' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onclose"]);
    }

    set onclose(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onclose' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onclose' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onclose"] = V;
    }

    get oncontextmenu() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncontextmenu' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncontextmenu"]);
    }

    set oncontextmenu(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncontextmenu' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncontextmenu' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["oncontextmenu"] = V;
    }

    get oncuechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncuechange' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncuechange"]);
    }

    set oncuechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncuechange' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncuechange' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["oncuechange"] = V;
    }

    get ondblclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondblclick' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondblclick"]);
    }

    set ondblclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondblclick' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondblclick' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondblclick"] = V;
    }

    get ondrag() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondrag' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondrag"]);
    }

    set ondrag(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondrag' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondrag' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondrag"] = V;
    }

    get ondragend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragend' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragend"]);
    }

    set ondragend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragend' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragend' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondragend"] = V;
    }

    get ondragenter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragenter' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragenter"]);
    }

    set ondragenter(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragenter' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragenter' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondragenter"] = V;
    }

    get ondragleave() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragleave' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragleave"]);
    }

    set ondragleave(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragleave' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragleave' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondragleave"] = V;
    }

    get ondragover() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragover' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragover"]);
    }

    set ondragover(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragover' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragover' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondragover"] = V;
    }

    get ondragstart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragstart' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragstart"]);
    }

    set ondragstart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragstart' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragstart' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondragstart"] = V;
    }

    get ondrop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondrop' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondrop"]);
    }

    set ondrop(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondrop' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondrop' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondrop"] = V;
    }

    get ondurationchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondurationchange' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondurationchange"]);
    }

    set ondurationchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondurationchange' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondurationchange' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ondurationchange"] = V;
    }

    get onemptied() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onemptied' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onemptied"]);
    }

    set onemptied(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onemptied' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onemptied' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onemptied"] = V;
    }

    get onended() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onended' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onended"]);
    }

    set onended(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onended' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onended' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onended"] = V;
    }

    get onerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onerror' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onerror"]);
    }

    set onerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onerror' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = OnErrorEventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onerror' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onerror"] = V;
    }

    get onfocus() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onfocus' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onfocus"]);
    }

    set onfocus(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onfocus' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onfocus' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onfocus"] = V;
    }

    get oninput() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oninput' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oninput"]);
    }

    set oninput(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oninput' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oninput' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["oninput"] = V;
    }

    get oninvalid() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oninvalid' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oninvalid"]);
    }

    set oninvalid(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oninvalid' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oninvalid' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["oninvalid"] = V;
    }

    get onkeydown() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onkeydown' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeydown"]);
    }

    set onkeydown(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onkeydown' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onkeydown' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onkeydown"] = V;
    }

    get onkeypress() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onkeypress' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeypress"]);
    }

    set onkeypress(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onkeypress' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onkeypress' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onkeypress"] = V;
    }

    get onkeyup() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onkeyup' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeyup"]);
    }

    set onkeyup(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onkeyup' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onkeyup' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onkeyup"] = V;
    }

    get onload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onload' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onload"]);
    }

    set onload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onload' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onload' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onload"] = V;
    }

    get onloadeddata() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onloadeddata' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadeddata"]);
    }

    set onloadeddata(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onloadeddata' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadeddata' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onloadeddata"] = V;
    }

    get onloadedmetadata() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onloadedmetadata' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadedmetadata"]);
    }

    set onloadedmetadata(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onloadedmetadata' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadedmetadata' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onloadedmetadata"] = V;
    }

    get onloadend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onloadend' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadend"]);
    }

    set onloadend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onloadend' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadend' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onloadend"] = V;
    }

    get onloadstart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onloadstart' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadstart"]);
    }

    set onloadstart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onloadstart' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadstart' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onloadstart"] = V;
    }

    get onmousedown() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmousedown' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmousedown"]);
    }

    set onmousedown(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmousedown' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmousedown' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onmousedown"] = V;
    }

    get onmouseenter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseenter"]);
    }

    set onmouseenter(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseenter' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onmouseenter"] = V;
    }

    get onmouseleave() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseleave"]);
    }

    set onmouseleave(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseleave' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onmouseleave"] = V;
    }

    get onmousemove() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmousemove' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmousemove"]);
    }

    set onmousemove(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmousemove' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmousemove' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onmousemove"] = V;
    }

    get onmouseout() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmouseout' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseout"]);
    }

    set onmouseout(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmouseout' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseout' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onmouseout"] = V;
    }

    get onmouseover() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmouseover' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseover"]);
    }

    set onmouseover(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmouseover' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseover' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onmouseover"] = V;
    }

    get onmouseup() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmouseup' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseup"]);
    }

    set onmouseup(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmouseup' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseup' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onmouseup"] = V;
    }

    get onwheel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onwheel' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onwheel"]);
    }

    set onwheel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onwheel' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onwheel' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onwheel"] = V;
    }

    get onpause() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onpause' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpause"]);
    }

    set onpause(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onpause' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onpause' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onpause"] = V;
    }

    get onplay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onplay' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onplay"]);
    }

    set onplay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onplay' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onplay' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onplay"] = V;
    }

    get onplaying() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onplaying' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onplaying"]);
    }

    set onplaying(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onplaying' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onplaying' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onplaying"] = V;
    }

    get onprogress() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onprogress' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onprogress"]);
    }

    set onprogress(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onprogress' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onprogress' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onprogress"] = V;
    }

    get onratechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onratechange' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onratechange"]);
    }

    set onratechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onratechange' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onratechange' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onratechange"] = V;
    }

    get onreset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onreset' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onreset"]);
    }

    set onreset(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onreset' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onreset' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onreset"] = V;
    }

    get onresize() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onresize' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onresize"]);
    }

    set onresize(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onresize' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onresize' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onresize"] = V;
    }

    get onscroll() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onscroll' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onscroll"]);
    }

    set onscroll(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onscroll' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onscroll' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onscroll"] = V;
    }

    get onsecuritypolicyviolation() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onsecuritypolicyviolation' called on an object that is not a valid instance of Document."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsecuritypolicyviolation"]);
    }

    set onsecuritypolicyviolation(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onsecuritypolicyviolation' called on an object that is not a valid instance of Document."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onsecuritypolicyviolation' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onsecuritypolicyviolation"] = V;
    }

    get onseeked() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onseeked' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onseeked"]);
    }

    set onseeked(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onseeked' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onseeked' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onseeked"] = V;
    }

    get onseeking() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onseeking' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onseeking"]);
    }

    set onseeking(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onseeking' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onseeking' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onseeking"] = V;
    }

    get onselect() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onselect' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onselect"]);
    }

    set onselect(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onselect' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onselect' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onselect"] = V;
    }

    get onstalled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onstalled' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onstalled"]);
    }

    set onstalled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onstalled' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onstalled' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onstalled"] = V;
    }

    get onsubmit() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onsubmit' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsubmit"]);
    }

    set onsubmit(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onsubmit' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onsubmit' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onsubmit"] = V;
    }

    get onsuspend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onsuspend' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsuspend"]);
    }

    set onsuspend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onsuspend' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onsuspend' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onsuspend"] = V;
    }

    get ontimeupdate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ontimeupdate' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ontimeupdate"]);
    }

    set ontimeupdate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ontimeupdate' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ontimeupdate' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ontimeupdate"] = V;
    }

    get ontoggle() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ontoggle' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ontoggle"]);
    }

    set ontoggle(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ontoggle' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ontoggle' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["ontoggle"] = V;
    }

    get onvolumechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onvolumechange' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onvolumechange"]);
    }

    set onvolumechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onvolumechange' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onvolumechange' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onvolumechange"] = V;
    }

    get onwaiting() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onwaiting' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onwaiting"]);
    }

    set onwaiting(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onwaiting' called on an object that is not a valid instance of Document.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onwaiting' property on 'Document': The provided value"
        });
      }
      esValue[implSymbol]["onwaiting"] = V;
    }

    get activeElement() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get activeElement' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["activeElement"]);
    }

    get children() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get children' called on an object that is not a valid instance of Document.");
      }

      return utils.getSameObject(this, "children", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["children"]);
      });
    }

    get firstElementChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get firstElementChild' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["firstElementChild"]);
    }

    get lastElementChild() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get lastElementChild' called on an object that is not a valid instance of Document.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["lastElementChild"]);
    }

    get childElementCount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get childElementCount' called on an object that is not a valid instance of Document.");
      }

      return esValue[implSymbol]["childElementCount"];
    }
  }
  Object.defineProperties(Document.prototype, {
    getElementsByTagName: { enumerable: true },
    getElementsByTagNameNS: { enumerable: true },
    getElementsByClassName: { enumerable: true },
    createElement: { enumerable: true },
    createElementNS: { enumerable: true },
    createDocumentFragment: { enumerable: true },
    createTextNode: { enumerable: true },
    createCDATASection: { enumerable: true },
    createComment: { enumerable: true },
    createProcessingInstruction: { enumerable: true },
    importNode: { enumerable: true },
    adoptNode: { enumerable: true },
    createAttribute: { enumerable: true },
    createAttributeNS: { enumerable: true },
    createEvent: { enumerable: true },
    createRange: { enumerable: true },
    createNodeIterator: { enumerable: true },
    createTreeWalker: { enumerable: true },
    getElementsByName: { enumerable: true },
    open: { enumerable: true },
    close: { enumerable: true },
    write: { enumerable: true },
    writeln: { enumerable: true },
    hasFocus: { enumerable: true },
    clear: { enumerable: true },
    captureEvents: { enumerable: true },
    releaseEvents: { enumerable: true },
    getSelection: { enumerable: true },
    getElementById: { enumerable: true },
    prepend: { enumerable: true },
    append: { enumerable: true },
    replaceChildren: { enumerable: true },
    querySelector: { enumerable: true },
    querySelectorAll: { enumerable: true },
    implementation: { enumerable: true },
    URL: { enumerable: true },
    documentURI: { enumerable: true },
    compatMode: { enumerable: true },
    characterSet: { enumerable: true },
    charset: { enumerable: true },
    inputEncoding: { enumerable: true },
    contentType: { enumerable: true },
    doctype: { enumerable: true },
    documentElement: { enumerable: true },
    referrer: { enumerable: true },
    cookie: { enumerable: true },
    lastModified: { enumerable: true },
    readyState: { enumerable: true },
    title: { enumerable: true },
    dir: { enumerable: true },
    body: { enumerable: true },
    head: { enumerable: true },
    images: { enumerable: true },
    embeds: { enumerable: true },
    plugins: { enumerable: true },
    links: { enumerable: true },
    forms: { enumerable: true },
    scripts: { enumerable: true },
    currentScript: { enumerable: true },
    defaultView: { enumerable: true },
    onreadystatechange: { enumerable: true },
    anchors: { enumerable: true },
    applets: { enumerable: true },
    styleSheets: { enumerable: true },
    hidden: { enumerable: true },
    visibilityState: { enumerable: true },
    onvisibilitychange: { enumerable: true },
    onabort: { enumerable: true },
    onauxclick: { enumerable: true },
    onblur: { enumerable: true },
    oncancel: { enumerable: true },
    oncanplay: { enumerable: true },
    oncanplaythrough: { enumerable: true },
    onchange: { enumerable: true },
    onclick: { enumerable: true },
    onclose: { enumerable: true },
    oncontextmenu: { enumerable: true },
    oncuechange: { enumerable: true },
    ondblclick: { enumerable: true },
    ondrag: { enumerable: true },
    ondragend: { enumerable: true },
    ondragenter: { enumerable: true },
    ondragleave: { enumerable: true },
    ondragover: { enumerable: true },
    ondragstart: { enumerable: true },
    ondrop: { enumerable: true },
    ondurationchange: { enumerable: true },
    onemptied: { enumerable: true },
    onended: { enumerable: true },
    onerror: { enumerable: true },
    onfocus: { enumerable: true },
    oninput: { enumerable: true },
    oninvalid: { enumerable: true },
    onkeydown: { enumerable: true },
    onkeypress: { enumerable: true },
    onkeyup: { enumerable: true },
    onload: { enumerable: true },
    onloadeddata: { enumerable: true },
    onloadedmetadata: { enumerable: true },
    onloadend: { enumerable: true },
    onloadstart: { enumerable: true },
    onmousedown: { enumerable: true },
    onmouseenter: { enumerable: true },
    onmouseleave: { enumerable: true },
    onmousemove: { enumerable: true },
    onmouseout: { enumerable: true },
    onmouseover: { enumerable: true },
    onmouseup: { enumerable: true },
    onwheel: { enumerable: true },
    onpause: { enumerable: true },
    onplay: { enumerable: true },
    onplaying: { enumerable: true },
    onprogress: { enumerable: true },
    onratechange: { enumerable: true },
    onreset: { enumerable: true },
    onresize: { enumerable: true },
    onscroll: { enumerable: true },
    onsecuritypolicyviolation: { enumerable: true },
    onseeked: { enumerable: true },
    onseeking: { enumerable: true },
    onselect: { enumerable: true },
    onstalled: { enumerable: true },
    onsubmit: { enumerable: true },
    onsuspend: { enumerable: true },
    ontimeupdate: { enumerable: true },
    ontoggle: { enumerable: true },
    onvolumechange: { enumerable: true },
    onwaiting: { enumerable: true },
    activeElement: { enumerable: true },
    children: { enumerable: true },
    firstElementChild: { enumerable: true },
    lastElementChild: { enumerable: true },
    childElementCount: { enumerable: true },
    [Symbol.toStringTag]: { value: "Document", configurable: true },
    [Symbol.unscopables]: {
      value: { prepend: true, append: true, replaceChildren: true, __proto__: null },
      configurable: true
    }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = Document;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Document
  });
};

const Impl = require("../nodes/Document-impl.js");
