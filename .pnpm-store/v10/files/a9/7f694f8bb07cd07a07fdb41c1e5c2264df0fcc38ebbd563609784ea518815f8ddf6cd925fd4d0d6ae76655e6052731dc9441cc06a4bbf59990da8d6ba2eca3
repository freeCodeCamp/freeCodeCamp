"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const parseNonNegativeInteger_helpers_strings = require("../helpers/strings.js").parseNonNegativeInteger;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLElement = require("./HTMLElement.js");

const interfaceName = "HTMLMarqueeElement";

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
  throw new TypeError(`${context} is not of type 'HTMLMarqueeElement'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["HTMLMarqueeElement"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor HTMLMarqueeElement is not installed on the passed global object");
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

  if (globalObject.HTMLElement === undefined) {
    throw new Error("Internal error: attempting to evaluate HTMLMarqueeElement before HTMLElement");
  }
  class HTMLMarqueeElement extends globalObject.HTMLElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    get behavior() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get behavior' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "behavior");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set behavior(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set behavior' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'behavior' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "behavior", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get bgColor() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get bgColor' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "bgcolor");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set bgColor(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set bgColor' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'bgColor' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "bgcolor", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get direction() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get direction' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "direction");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set direction(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set direction' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'direction' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "direction", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get height() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get height' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "height");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set height(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set height' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'height' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "height", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get hspace() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get hspace' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol].getAttributeNS(null, "hspace");
        if (value === null) {
          return 0;
        }
        value = parseNonNegativeInteger_helpers_strings(value);
        return value !== null && value >= 0 && value <= 2147483647 ? value : 0;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set hspace(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set hspace' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'hspace' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const n = V <= 2147483647 ? V : 0;
        esValue[implSymbol].setAttributeNS(null, "hspace", String(n));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get scrollAmount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get scrollAmount' called on an object that is not a valid instance of HTMLMarqueeElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol].getAttributeNS(null, "scrollamount");
        if (value === null) {
          return 0;
        }
        value = parseNonNegativeInteger_helpers_strings(value);
        return value !== null && value >= 0 && value <= 2147483647 ? value : 0;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set scrollAmount(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set scrollAmount' called on an object that is not a valid instance of HTMLMarqueeElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'scrollAmount' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const n = V <= 2147483647 ? V : 0;
        esValue[implSymbol].setAttributeNS(null, "scrollamount", String(n));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get scrollDelay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get scrollDelay' called on an object that is not a valid instance of HTMLMarqueeElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol].getAttributeNS(null, "scrolldelay");
        if (value === null) {
          return 0;
        }
        value = parseNonNegativeInteger_helpers_strings(value);
        return value !== null && value >= 0 && value <= 2147483647 ? value : 0;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set scrollDelay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set scrollDelay' called on an object that is not a valid instance of HTMLMarqueeElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'scrollDelay' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const n = V <= 2147483647 ? V : 0;
        esValue[implSymbol].setAttributeNS(null, "scrolldelay", String(n));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get trueSpeed() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get trueSpeed' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "truespeed");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set trueSpeed(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set trueSpeed' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'trueSpeed' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "truespeed", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "truespeed");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get vspace() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get vspace' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol].getAttributeNS(null, "vspace");
        if (value === null) {
          return 0;
        }
        value = parseNonNegativeInteger_helpers_strings(value);
        return value !== null && value >= 0 && value <= 2147483647 ? value : 0;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set vspace(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set vspace' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'vspace' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const n = V <= 2147483647 ? V : 0;
        esValue[implSymbol].setAttributeNS(null, "vspace", String(n));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get width() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get width' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "width");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set width(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set width' called on an object that is not a valid instance of HTMLMarqueeElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'width' property on 'HTMLMarqueeElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "width", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(HTMLMarqueeElement.prototype, {
    behavior: { enumerable: true },
    bgColor: { enumerable: true },
    direction: { enumerable: true },
    height: { enumerable: true },
    hspace: { enumerable: true },
    scrollAmount: { enumerable: true },
    scrollDelay: { enumerable: true },
    trueSpeed: { enumerable: true },
    vspace: { enumerable: true },
    width: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLMarqueeElement", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = HTMLMarqueeElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLMarqueeElement
  });
};

const Impl = require("../nodes/HTMLMarqueeElement-impl.js");
