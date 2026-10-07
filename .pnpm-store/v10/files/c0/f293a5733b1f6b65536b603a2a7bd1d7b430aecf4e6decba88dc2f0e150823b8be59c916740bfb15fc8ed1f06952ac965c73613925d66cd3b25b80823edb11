"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const parseNonNegativeInteger_helpers_strings = require("../helpers/strings.js").parseNonNegativeInteger;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const parseURLToResultingURLRecord_helpers_document_base_url =
  require("../helpers/document-base-url.js").parseURLToResultingURLRecord;
const serializeURLwhatwg_url = require("whatwg-url").serializeURL;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLMediaElement = require("./HTMLMediaElement.js");

const interfaceName = "HTMLVideoElement";

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
  throw new TypeError(`${context} is not of type 'HTMLVideoElement'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["HTMLVideoElement"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor HTMLVideoElement is not installed on the passed global object");
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
  HTMLMediaElement._internalSetup(wrapper, globalObject);
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

  if (globalObject.HTMLMediaElement === undefined) {
    throw new Error("Internal error: attempting to evaluate HTMLVideoElement before HTMLMediaElement");
  }
  class HTMLVideoElement extends globalObject.HTMLMediaElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    get width() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get width' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol].getAttributeNS(null, "width");
        if (value === null) {
          return 0;
        }
        value = parseNonNegativeInteger_helpers_strings(value);
        return value !== null && value >= 0 && value <= 2147483647 ? value : 0;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set width(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set width' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'width' property on 'HTMLVideoElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const n = V <= 2147483647 ? V : 0;
        esValue[implSymbol].setAttributeNS(null, "width", String(n));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get height() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get height' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol].getAttributeNS(null, "height");
        if (value === null) {
          return 0;
        }
        value = parseNonNegativeInteger_helpers_strings(value);
        return value !== null && value >= 0 && value <= 2147483647 ? value : 0;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set height(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set height' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'height' property on 'HTMLVideoElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const n = V <= 2147483647 ? V : 0;
        esValue[implSymbol].setAttributeNS(null, "height", String(n));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get videoWidth() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get videoWidth' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      return esValue[implSymbol]["videoWidth"];
    }

    get videoHeight() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get videoHeight' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      return esValue[implSymbol]["videoHeight"];
    }

    get poster() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get poster' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "poster");
        if (value === null) {
          return "";
        }
        const urlRecord = parseURLToResultingURLRecord_helpers_document_base_url(
          value,
          esValue[implSymbol]._ownerDocument
        );
        if (urlRecord !== null) {
          return serializeURLwhatwg_url(urlRecord);
        }
        return conversions.USVString(value);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set poster(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set poster' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'poster' property on 'HTMLVideoElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "poster", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get playsInline() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get playsInline' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "playsinline");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set playsInline(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set playsInline' called on an object that is not a valid instance of HTMLVideoElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'playsInline' property on 'HTMLVideoElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "playsinline", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "playsinline");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(HTMLVideoElement.prototype, {
    width: { enumerable: true },
    height: { enumerable: true },
    videoWidth: { enumerable: true },
    videoHeight: { enumerable: true },
    poster: { enumerable: true },
    playsInline: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLVideoElement", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = HTMLVideoElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLVideoElement
  });
};

const Impl = require("../nodes/HTMLVideoElement-impl.js");
