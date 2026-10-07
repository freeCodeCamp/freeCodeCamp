"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventHandlerNonNull = require("./EventHandlerNonNull.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const EventTarget = require("./EventTarget.js");

const interfaceName = "XMLHttpRequestEventTarget";

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
  throw new TypeError(`${context} is not of type 'XMLHttpRequestEventTarget'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["XMLHttpRequestEventTarget"];
  if (ctor === undefined) {
    throw new Error(
      "Internal error: constructor XMLHttpRequestEventTarget is not installed on the passed global object"
    );
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

const exposed = new Set(["Window", "DedicatedWorker", "SharedWorker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  if (globalObject.EventTarget === undefined) {
    throw new Error("Internal error: attempting to evaluate XMLHttpRequestEventTarget before EventTarget");
  }
  class XMLHttpRequestEventTarget extends globalObject.EventTarget {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    get onloadstart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onloadstart' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadstart"]);
    }

    set onloadstart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onloadstart' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadstart' property on 'XMLHttpRequestEventTarget': The provided value"
        });
      }
      esValue[implSymbol]["onloadstart"] = V;
    }

    get onprogress() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onprogress' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onprogress"]);
    }

    set onprogress(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onprogress' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onprogress' property on 'XMLHttpRequestEventTarget': The provided value"
        });
      }
      esValue[implSymbol]["onprogress"] = V;
    }

    get onabort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onabort' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onabort"]);
    }

    set onabort(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onabort' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onabort' property on 'XMLHttpRequestEventTarget': The provided value"
        });
      }
      esValue[implSymbol]["onabort"] = V;
    }

    get onerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onerror' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onerror"]);
    }

    set onerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onerror' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onerror' property on 'XMLHttpRequestEventTarget': The provided value"
        });
      }
      esValue[implSymbol]["onerror"] = V;
    }

    get onload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onload' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onload"]);
    }

    set onload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onload' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onload' property on 'XMLHttpRequestEventTarget': The provided value"
        });
      }
      esValue[implSymbol]["onload"] = V;
    }

    get ontimeout() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get ontimeout' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ontimeout"]);
    }

    set ontimeout(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set ontimeout' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ontimeout' property on 'XMLHttpRequestEventTarget': The provided value"
        });
      }
      esValue[implSymbol]["ontimeout"] = V;
    }

    get onloadend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onloadend' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadend"]);
    }

    set onloadend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onloadend' called on an object that is not a valid instance of XMLHttpRequestEventTarget."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadend' property on 'XMLHttpRequestEventTarget': The provided value"
        });
      }
      esValue[implSymbol]["onloadend"] = V;
    }
  }
  Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    onloadstart: { enumerable: true },
    onprogress: { enumerable: true },
    onabort: { enumerable: true },
    onerror: { enumerable: true },
    onload: { enumerable: true },
    ontimeout: { enumerable: true },
    onloadend: { enumerable: true },
    [Symbol.toStringTag]: { value: "XMLHttpRequestEventTarget", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = XMLHttpRequestEventTarget;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: XMLHttpRequestEventTarget
  });
};

const Impl = require("../xhr/XMLHttpRequestEventTarget-impl.js");
