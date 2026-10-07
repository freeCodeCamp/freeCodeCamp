"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const serializeURLwhatwg_url = require("whatwg-url").serializeURL;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLElement = require("./HTMLElement.js");

const interfaceName = "HTMLScriptElement";

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
  throw new globalObject.TypeError(`${context} is not of type 'HTMLScriptElement'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["HTMLScriptElement"].prototype;
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
  class HTMLScriptElement extends globalObject.HTMLElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    get src() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get src' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("src");
        if (value === null) {
          return "";
        }

        if (this._srcURLCacheKey === value) {
          return this._srcURLCache;
        }

        this._srcURLCacheKey = value;

        const urlRecord = esValue[implSymbol]._ownerDocument.encodingParseAURL(value);
        if (urlRecord !== null) {
          this._srcURLCache = serializeURLwhatwg_url(urlRecord);
          return this._srcURLCache;
        }
        this._srcURLCache = conversions.USVString(value);
        return this._srcURLCache;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set src(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set src' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'src' property on 'HTMLScriptElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("src", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get type() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get type' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("type");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set type(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set type' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'type' property on 'HTMLScriptElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("type", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get defer() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get defer' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("defer") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set defer(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set defer' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'defer' property on 'HTMLScriptElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("defer", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("defer");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get crossOrigin() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get crossOrigin' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("crossorigin");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set crossOrigin(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set crossOrigin' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'crossOrigin' property on 'HTMLScriptElement': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("crossorigin");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("crossorigin", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get text() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get text' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["text"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set text(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set text' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'text' property on 'HTMLScriptElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["text"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get charset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get charset' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("charset");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set charset(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set charset' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'charset' property on 'HTMLScriptElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("charset", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get event() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get event' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("event");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set event(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set event' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'event' property on 'HTMLScriptElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("event", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get htmlFor() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get htmlFor' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("for");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set htmlFor(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set htmlFor' called on an object that is not a valid instance of HTMLScriptElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'htmlFor' property on 'HTMLScriptElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("for", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(HTMLScriptElement.prototype, {
    src: { enumerable: true },
    type: { enumerable: true },
    defer: { enumerable: true },
    crossOrigin: { enumerable: true },
    text: { enumerable: true },
    charset: { enumerable: true },
    event: { enumerable: true },
    htmlFor: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLScriptElement", configurable: true }
  });
  ctorRegistry[interfaceName] = HTMLScriptElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLScriptElement
  });
};

const Impl = require("../nodes/HTMLScriptElement-impl.js");
