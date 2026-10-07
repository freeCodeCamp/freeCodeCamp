"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLElement = require("./HTMLElement.js");

const interfaceName = "HTMLDetailsElement";

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
  throw new globalObject.TypeError(`${context} is not of type 'HTMLDetailsElement'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["HTMLDetailsElement"].prototype;
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
  HTMLElement._internalSetup(wrapper, globalObject);
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
  class HTMLDetailsElement extends globalObject.HTMLElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    get open() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get open' called on an object that is not a valid instance of HTMLDetailsElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("open") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set open(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set open' called on an object that is not a valid instance of HTMLDetailsElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'open' property on 'HTMLDetailsElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("open", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("open");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(HTMLDetailsElement.prototype, {
    open: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLDetailsElement", configurable: true }
  });
  ctorRegistry[interfaceName] = HTMLDetailsElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLDetailsElement
  });
};

const Impl = require("../nodes/HTMLDetailsElement-impl.js");
